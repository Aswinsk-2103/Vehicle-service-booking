import React, { useEffect, useState } from 'react';
import { getVehicles, getSlots, createBooking, estimateCost } from '../services/api';
import toast from 'react-hot-toast';

const SERVICE_TYPES = ['Oil Change', 'Engine Service', 'Brake Check', 'General Service', 'Full Service'];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [vehicles, setVehicles] = useState([]);
  const [slots, setSlots] = useState([]);
  const [estimate, setEstimate] = useState(null);
  const [form, setForm] = useState({
    vehicleId: '', serviceType: '', date: '', slotId: '',
    pickupRequested: false, dropRequested: false, customerAddress: '', notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [booked, setBooked] = useState(null);

  useEffect(() => { getVehicles().then(r => setVehicles(r.data)); }, []);

  const fetchSlots = async () => {
    if (!form.date || !form.serviceType) return;
    const { data } = await getSlots({ date: form.date, serviceType: form.serviceType });
    setSlots(data);
  };

  useEffect(() => { fetchSlots(); }, [form.date, form.serviceType]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchEstimate = async () => {
    if (!form.serviceType || !form.vehicleId) return;
    const vehicle = vehicles.find(v => v._id === form.vehicleId);
    if (!vehicle) return;
    const { data } = await estimateCost({ serviceType: form.serviceType, fuelType: vehicle.fuelType });
    setEstimate(data);
  };

  useEffect(() => { fetchEstimate(); }, [form.serviceType, form.vehicleId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async () => {
    if (!form.slotId) return toast.error('Please select a time slot');
    setSubmitting(true);
    try {
      const { data } = await createBooking(form);
      setBooked(data);
      toast.success('Booking confirmed!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Booking failed');
    } finally {
      setSubmitting(false);
    }
  };

  const selectedVehicle = vehicles.find(v => v._id === form.vehicleId);

  if (booked) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <div className="card">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-500 mb-4">Your service has been booked successfully.</p>
          <div className="bg-gray-50 rounded-lg p-4 text-left text-sm space-y-2 mb-6">
            <p><strong>Booking ID:</strong> {booked._id}</p>
            <p><strong>Service:</strong> {booked.serviceType}</p>
            <p><strong>Status:</strong> {booked.status}</p>
          </div>
          <button onClick={() => { setBooked(null); setStep(1); setForm({ vehicleId: '', serviceType: '', date: '', slotId: '', pickupRequested: false, dropRequested: false, customerAddress: '', notes: '' }); }}
            className="btn-primary w-full">Book Another Service</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Book a Service</h1>

      {/* Step indicator */}
      <div className="flex items-center mb-8">
        {['Select Vehicle & Service', 'Choose Slot', 'Confirm'].map((label, i) => (
          <React.Fragment key={i}>
            <div className={`flex items-center gap-2 ${step > i + 1 ? 'text-green-600' : step === i + 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${step > i + 1 ? 'bg-green-600 border-green-600 text-white' : step === i + 1 ? 'border-blue-600 text-blue-600' : 'border-gray-300'}`}>
                {step > i + 1 ? '✓' : i + 1}
              </div>
              <span className="text-xs font-medium hidden sm:block">{label}</span>
            </div>
            {i < 2 && <div className={`flex-1 h-0.5 mx-2 ${step > i + 1 ? 'bg-green-600' : 'bg-gray-200'}`} />}
          </React.Fragment>
        ))}
      </div>

      <div className="card">
        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Vehicle</label>
              {vehicles.length === 0 ? (
                <p className="text-sm text-red-500">No vehicles found. <a href="/vehicles" className="underline">Add a vehicle first.</a></p>
              ) : (
                <select className="input-field" value={form.vehicleId} onChange={(e) => setForm({ ...form, vehicleId: e.target.value })}>
                  <option value="">-- Select Vehicle --</option>
                  {vehicles.map(v => <option key={v._id} value={v._id}>{v.brand} {v.model} - {v.vehicleNumber}</option>)}
                </select>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICE_TYPES.map(s => (
                  <button key={s} type="button"
                    onClick={() => setForm({ ...form, serviceType: s })}
                    className={`p-3 rounded-lg border-2 text-sm font-medium text-left transition-colors ${form.serviceType === s ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {estimate && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm font-medium text-green-800">💰 Cost Estimate</p>
                <p className="text-lg font-bold text-green-700">₹{estimate.estimatedMin} - ₹{estimate.estimatedMax}</p>
                <p className="text-xs text-green-600">{estimate.note}</p>
              </div>
            )}

            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-blue-600" checked={form.pickupRequested}
                  onChange={(e) => setForm({ ...form, pickupRequested: e.target.checked })} />
                <span className="text-sm">🚐 Request Pickup Service</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-blue-600" checked={form.dropRequested}
                  onChange={(e) => setForm({ ...form, dropRequested: e.target.checked })} />
                <span className="text-sm">🏠 Request Drop Service</span>
              </label>
              {(form.pickupRequested || form.dropRequested) && (
                <input type="text" className="input-field" placeholder="Enter your address for pickup/drop"
                  value={form.customerAddress} onChange={(e) => setForm({ ...form, customerAddress: e.target.value })} />
              )}
            </div>

            <button onClick={() => { if (!form.vehicleId || !form.serviceType) return toast.error('Select vehicle and service type'); setStep(2); }}
              className="btn-primary w-full">Next: Choose Slot →</button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
              <input type="date" className="input-field"
                min={new Date().toISOString().split('T')[0]}
                value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value, slotId: '' })} />
            </div>

            {form.date && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Available Time Slots</label>
                {slots.length === 0 ? (
                  <p className="text-sm text-gray-500 p-4 bg-gray-50 rounded-lg">No slots available for this date. Try another date.</p>
                ) : (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {slots.map(s => (
                      <button key={s._id} type="button"
                        onClick={() => setForm({ ...form, slotId: s._id })}
                        className={`p-2 rounded-lg border-2 text-sm font-medium transition-colors ${form.slotId === s._id ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300'}`}>
                        {s.time}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
              <textarea className="input-field" rows={3} placeholder="Describe any specific issues..."
                value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="btn-secondary flex-1">← Back</button>
              <button onClick={() => { if (!form.slotId) return toast.error('Select a time slot'); setStep(3); }}
                className="btn-primary flex-1">Next: Confirm →</button>
            </div>
          </div>
        )}

        {/* Step 3 - Confirm */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Booking Summary</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Vehicle</span><span className="font-medium">{selectedVehicle?.brand} {selectedVehicle?.model} - {selectedVehicle?.vehicleNumber}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Service</span><span className="font-medium">{form.serviceType}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Date</span><span className="font-medium">{form.date}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Pickup</span><span className="font-medium">{form.pickupRequested ? '✅ Yes' : '❌ No'}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Drop</span><span className="font-medium">{form.dropRequested ? '✅ Yes' : '❌ No'}</span></div>
              {estimate && <div className="flex justify-between border-t pt-2"><span className="text-gray-500">Est. Cost</span><span className="font-bold text-green-600">₹{estimate.estimatedMin} - ₹{estimate.estimatedMax}</span></div>}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="btn-secondary flex-1">← Back</button>
              <button onClick={handleSubmit} disabled={submitting} className="btn-primary flex-1">
                {submitting ? 'Booking...' : '✅ Confirm Booking'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
