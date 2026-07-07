import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getBookings, getVehicles, getInvoices } from '../services/api';
import StatusBadge from '../components/StatusBadge';
import Loader from '../components/Loader';

const StatCard = ({ icon, label, value, color, to }) => (
  <Link to={to} className={`card hover:shadow-md transition-shadow border-l-4 ${color}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <span className="text-4xl">{icon}</span>
    </div>
  </Link>
);

const Dashboard = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getBookings(), getVehicles(), getInvoices()])
      .then(([b, v, i]) => {
        setBookings(b.data);
        setVehicles(v.data);
        setInvoices(i.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  const activeBookings = bookings.filter(b => !['Completed', 'Cancelled'].includes(b.status));
  const pendingInvoices = invoices.filter(i => i.paymentStatus === 'Pending');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}! 👋</h1>
        <p className="text-gray-500 mt-1">Here's an overview of your vehicle services</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon="🚗" label="My Vehicles" value={vehicles.length} color="border-blue-500" to="/vehicles" />
        <StatCard icon="📅" label="Total Bookings" value={bookings.length} color="border-purple-500" to="/status" />
        <StatCard icon="⚙️" label="Active Services" value={activeBookings.length} color="border-yellow-500" to="/status" />
        <StatCard icon="💰" label="Pending Invoices" value={pendingInvoices.length} color="border-red-500" to="/invoices" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Bookings</h2>
            <Link to="/status" className="text-blue-600 text-sm hover:underline">View all</Link>
          </div>
          {bookings.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <p className="text-4xl mb-2">📋</p>
              <p>No bookings yet</p>
              <Link to="/booking" className="btn-primary mt-3 inline-block text-sm">Book a Service</Link>
            </div>
          ) : (
            <div className="space-y-3">
              {bookings.slice(0, 5).map(b => (
                <div key={b._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{b.serviceType}</p>
                    <p className="text-xs text-gray-500">{b.vehicleId?.vehicleNumber} • {b.slotId?.date}</p>
                  </div>
                  <StatusBadge status={b.status} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { to: '/booking', icon: '📅', label: 'Book Service', color: 'bg-blue-50 hover:bg-blue-100 text-blue-700' },
              { to: '/vehicles', icon: '🚗', label: 'Add Vehicle', color: 'bg-purple-50 hover:bg-purple-100 text-purple-700' },
              { to: '/status', icon: '🔍', label: 'Track Status', color: 'bg-yellow-50 hover:bg-yellow-100 text-yellow-700' },
              { to: '/invoices', icon: '🧾', label: 'View Invoices', color: 'bg-green-50 hover:bg-green-100 text-green-700' },
            ].map(({ to, icon, label, color }) => (
              <Link key={to} to={to} className={`flex flex-col items-center justify-center p-4 rounded-xl transition-colors ${color}`}>
                <span className="text-3xl mb-2">{icon}</span>
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
