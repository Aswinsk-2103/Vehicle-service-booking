import React, { useEffect, useState } from 'react';
import { getBookings, updateStatus } from '../../services/api';
import StatusBadge from '../../components/StatusBadge';
import Loader from '../../components/Loader';
import toast from 'react-hot-toast';

const MECHANIC_STATUS_OPTIONS = ['Vehicle Received', 'Inspection', 'Repair in Progress', 'Testing', 'Completed', 'Ready for Delivery'];

const MechanicDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);

  const fetchBookings = () => getBookings().then(r => setBookings(r.data)).finally(() => setLoading(false));
  useEffect(() => { fetchBookings(); }, []);

  const handleStatusUpdate = async (bookingId, status) => {
    setUpdating(bookingId);
    try {
      await updateStatus(bookingId, { status, note: `Updated by mechanic` });
      toast.success('Status updated!');
      fetchBookings();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update');
    } finally {
      setUpdating(null);
    }
  };

  if (loading) return <Loader />;

  const active = bookings.filter(b => !['Completed', 'Cancelled', 'Ready for Delivery'].includes(b.status));
  const completed = bookings.filter(b => ['Completed', 'Ready for Delivery'].includes(b.status));

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Assigned Services</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="card text-center border-l-4 border-yellow-500">
          <p className="text-3xl font-bold text-yellow-600">{active.length}</p>
          <p className="text-sm text-gray-500">Active Tasks</p>
        </div>
        <div className="card text-center border-l-4 border-green-500">
          <p className="text-3xl font-bold text-green-600">{completed.length}</p>
          <p className="text-sm text-gray-500">Completed</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-3">Active Tasks</h2>
      {active.length === 0 ? (
        <div className="card text-center py-8 text-gray-400 mb-6">
          <p className="text-4xl mb-2">✅</p>
          <p>No active tasks assigned</p>
        </div>
      ) : (
        <div className="space-y-4 mb-6">
          {active.map(b => (
            <div key={b._id} className="card">
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold">{b.serviceType}</h3>
                    <StatusBadge status={b.status} />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {b.vehicleId?.brand} {b.vehicleId?.model} ({b.vehicleId?.vehicleNumber})
                  </p>
                  <p className="text-sm text-gray-500">Customer: {b.customerId?.name} • {b.customerId?.phone}</p>
                  {b.notes && <p className="text-sm text-gray-400 mt-1">📝 {b.notes}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <select className="text-sm border rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={b.status}
                    onChange={(e) => handleStatusUpdate(b._id, e.target.value)}
                    disabled={updating === b._id}>
                    {MECHANIC_STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}
                  </select>
                  {updating === b._id && <p className="text-xs text-blue-500 text-center">Updating...</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h2 className="text-lg font-semibold mb-3">Completed Services</h2>
      <div className="space-y-3">
        {completed.slice(0, 5).map(b => (
          <div key={b._id} className="card flex items-center justify-between">
            <div>
              <p className="font-medium">{b.serviceType}</p>
              <p className="text-sm text-gray-500">{b.vehicleId?.brand} {b.vehicleId?.model} • {b.customerId?.name}</p>
            </div>
            <StatusBadge status={b.status} />
          </div>
        ))}
        {completed.length === 0 && <p className="text-gray-400 text-sm">No completed services yet</p>}
      </div>
    </div>
  );
};

export default MechanicDashboard;
