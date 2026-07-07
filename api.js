import React, { useEffect, useState } from 'react';
import { getBookings, updateStatus, assignMechanic, getUsers, createInvoice } from '../../services/api';
import StatusBadge from '../../components/StatusBadge';
import Loader from '../../components/Loader';
import toast from 'react-hot-toast';

const STATUS_OPTIONS = ['Booked', 'Vehicle Received', 'Inspection', 'Repair in Progress', 'Testing', 'Completed', 'Ready for Delivery', 'Cancelled'];

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [mechanics, setMechanics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [statusForm, setStatusForm] = useState({ status: '', note: '' });
  const [invoiceForm, setInvoiceForm] = useState({ serviceCost: '', sparePartsCost: '', laborCost: '', discount: '', paymentMethod: 'Cash' });
  const [activeTab, setActiveTab] = useState('status');

  const fetchData = () => Promise.all([getBookings(), getUsers('mechanic')])
    .then(([b, m]) => { setBookings(b.data); setMechanics(m.data); })
    .finally(() => setLoading(false));

  useEffect(() => { fetchData(); }, []);

  const handleStatusUpdate = async () => {
    try {
      await updateStatus(selected._id, statusForm);
      toast.success('Status updated!');
      setSelected(null);
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update');
    }
  };

  const handleAssign = async (bookingId, mechanicId) => {
    try {
      await assignMechanic(bookingId, { mechanicId });
      toast.success('Mechanic assigned!');
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to assign');
    }
  };

  const handleCreateInvoice = async () => {
    try {
      const subtotal = (parseFloat(invoiceForm.serviceCost) || 0) + (parseFloat(invoiceForm.sparePartsCost) || 0) + (parseFloat(invoiceForm.laborCost) || 0);
      if (subtotal === 0) return toast.error('Enter at least one cost');
      await createInvoice({ bookingId: selected._id, ...invoiceForm });
      toast.success('Invoice created!');
      setSelected(null);
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create invoice');
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Bookings ({bookings.length})</h1>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3 font-medium">Customer</th>
              <th className="p-3 font-medium">Vehicle</th>
              <th className="p-3 font-medium">Service</th>
              <th className="p-3 font-medium">Date</th>
              <th className="p-3 font-medium">Status</th>
              <th className="p-3 font-medium">Mechanic</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b._id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <p className="font-medium">{b.customerId?.name}</p>
                  <p className="text-xs text-gray-400">{b.customerId?.phone}</p>
                </td>
                <td className="p-3">
                  <p>{b.vehicleId?.brand} {b.vehicleId?.model}</p>
                  <p className="text-xs text-gray-400 font-mono">{b.vehicleId?.vehicleNumber}</p>
                </td>
                <td className="p-3">{b.serviceType}</td>
                <td className="p-3">{b.slotId?.date}<br /><span className="text-xs text-gray-400">{b.slotId?.time}</span></td>
                <td className="p-3"><StatusBadge status={b.status} /></td>
                <td className="p-3">
                  <select className="text-xs border rounded px-2 py-1"
                    value={b.mechanicId?._id || ''}
                    onChange={(e) => handleAssign(b._id, e.target.value)}>
                    <option value="">Assign...</option>
                    {mechanics.map(m => <option key={m._id} value={m._id}>{m.name}</option>)}
                  </select>
                </td>
                <td className="p-3">
                  <button onClick={() => { setSelected(b); setStatusForm({ status: b.status, note: '' }); setActiveTab('status'); }}
                    className="text-blue-600 hover:underline text-xs">Manage</button>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && <tr><td colSpan={7} className="p-8 text-center text-gray-400">No bookings found</td></tr>}
          </tbody>
        </table>
      </div>

      {/* Manage Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Manage Booking</h3>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            <div className="flex gap-2 mb-4">
              <button onClick={() => setActiveTab('status')} className={`text-sm px-3 py-1 rounded-lg ${activeTab === 'status' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Update Status</button>
              <button onClick={() => setActiveTab('invoice')} className={`text-sm px-3 py-1 rounded-lg ${activeTab === 'invoice' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Create Invoice</button>
            </div>

            {activeTab === 'status' && (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">New Status</label>
                  <select className="input-field" value={statusForm.status} onChange={(e) => setStatusForm({ ...statusForm, status: e.target.value })}>
                    {STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Note (optional)</label>
                  <input type="text" className="input-field" placeholder="Add a note..."
                    value={statusForm.note} onChange={(e) => setStatusForm({ ...statusForm, note: e.target.value })} />
                </div>
                <button onClick={handleStatusUpdate} className="btn-primary w-full">Update Status</button>
              </div>
            )}

            {activeTab === 'invoice' && (
              <div className="space-y-3">
                {[
                  { key: 'serviceCost', label: 'Service Cost (₹)' },
                  { key: 'sparePartsCost', label: 'Spare Parts Cost (₹)' },
                  { key: 'laborCost', label: 'Labor Cost (₹)' },
                  { key: 'discount', label: 'Discount (₹)' },
                ].map(({ key, label }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                    <input type="number" className="input-field" placeholder="0"
                      value={invoiceForm[key]} onChange={(e) => setInvoiceForm({ ...invoiceForm, [key]: e.target.value })} />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                  <select className="input-field" value={invoiceForm.paymentMethod} onChange={(e) => setInvoiceForm({ ...invoiceForm, paymentMethod: e.target.value })}>
                    {['Cash', 'Card', 'UPI', 'Online'].map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
                <button onClick={handleCreateInvoice} className="btn-primary w-full">Generate Invoice</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBookings;
