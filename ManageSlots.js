import React, { useEffect, useState } from 'react';
import { getBookings, cancelBooking } from '../services/api';
import StatusBadge from '../components/StatusBadge';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';

const STATUS_STAGES = ['Booked', 'Vehicle Received', 'Inspection', 'Repair in Progress', 'Testing', 'Completed', 'Ready for Delivery'];

const StatusTimeline = ({ history }) => (
  <div className="mt-4 space-y-2">
    {history.map((h, i) => (
      <div key={i} className="flex items-start gap-3">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-blue-600 mt-1 flex-shrink-0"></div>
          {i < history.length - 1 && <div className="w-0.5 h-6 bg-gray-200 mt-1"></div>}
        </div>
        <div>
          <p className="text-sm font-medium">{h.status}</p>
          <p className="text-xs text-gray-400">{new Date(h.updatedAt).toLocaleString()}</p>
          {h.note && <p className="text-xs text-gray-500">{h.note}</p>}
        </div>
      </div>
    ))}
  </div>
);

const Status = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);

  const fetchBookings = () => getBookings().then(r => setBookings(r.data)).finally(() => setLoading(false));
  useEffect(() => { fetchBookings(); }, []);

  const handleCancel = async (id) => {
    if (!window.confirm('Cancel this booking?')) return;
    try {
      await cancelBooking(id);
      toast.success('Booking cancelled');
      fetchBookings();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to cancel');
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Service Status Tracker</h1>

      {bookings.length === 0 ? (
        <div className="card text-center py-12 text-gray-400">
          <p className="text-5xl mb-3">📋</p>
          <p>No bookings found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map(b => {
            const currentStageIndex = STATUS_STAGES.indexOf(b.status);
            const isExpanded = expanded === b._id;

            return (
              <div key={b._id} className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-semibold">{b.serviceType}</h3>
                      <StatusBadge status={b.status} />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {b.vehicleId?.brand} {b.vehicleId?.model} ({b.vehicleId?.vehicleNumber}) •
                      {b.slotId?.date} at {b.slotId?.time}
                    </p>
                    {b.mechanicId && <p className="text-xs text-gray-400 mt-1">🔧 Mechanic: {b.mechanicId.name}</p>}
                  </div>
                  <button onClick={() => setExpanded(isExpanded ? null : b._id)}
                    className="text-blue-600 text-sm hover:underline ml-4">
                    {isExpanded ? 'Hide' : 'Details'}
                  </button>
                </div>

                {/* Progress bar */}
                {!['Cancelled'].includes(b.status) && (
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      {STATUS_STAGES.map((s, i) => (
                        <div key={s} className={`text-xs text-center flex-1 ${i <= currentStageIndex ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                          <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${i <= currentStageIndex ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                          <span className="hidden sm:block">{s.split(' ')[0]}</span>
                        </div>
                      ))}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(5, ((currentStageIndex + 1) / STATUS_STAGES.length) * 100)}%` }}></div>
                    </div>
                  </div>
                )}

                {isExpanded && (
                  <div className="mt-4 border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Status History</h4>
                    <StatusTimeline history={b.statusHistory || []} />
                    {b.notes && <p className="text-sm text-gray-500 mt-3">📝 Notes: {b.notes}</p>}
                    {b.pickupRequested && <p className="text-sm text-blue-600 mt-1">🚐 Pickup requested</p>}
                    {b.dropRequested && <p className="text-sm text-blue-600 mt-1">🏠 Drop requested</p>}
                    {['Booked'].includes(b.status) && (
                      <button onClick={() => handleCancel(b._id)} className="btn-danger text-sm mt-3">Cancel Booking</button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Status;
