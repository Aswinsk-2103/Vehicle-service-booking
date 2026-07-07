import React, { useEffect, useState } from 'react';
import { getDashboard } from '../../services/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Loader from '../../components/Loader';

const StatCard = ({ icon, label, value, color }) => (
  <div className={`card border-l-4 ${color}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <span className="text-4xl">{icon}</span>
    </div>
  </div>
);

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { getDashboard().then(r => setData(r.data)).finally(() => setLoading(false)); }, []);

  if (loading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon="📅" label="Total Bookings" value={data.stats.totalBookings} color="border-blue-500" />
        <StatCard icon="✅" label="Completed" value={data.stats.completedServices} color="border-green-500" />
        <StatCard icon="⏳" label="Pending" value={data.stats.pendingServices} color="border-yellow-500" />
        <StatCard icon="💰" label="Revenue (₹)" value={data.stats.revenue.toLocaleString()} color="border-purple-500" />
        <StatCard icon="👥" label="Customers" value={data.stats.customers} color="border-indigo-500" />
        <StatCard icon="🔧" label="Mechanics" value={data.stats.mechanics} color="border-orange-500" />
        <StatCard icon="🚗" label="Vehicles" value={data.stats.vehicles} color="border-teal-500" />
        <StatCard icon="⚠️" label="Low Stock Alerts" value={data.lowStockAlerts} color="border-red-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bookings Chart */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Bookings - Last 7 Days</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} tickFormatter={d => d.slice(5)} />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="bookings" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Service Distribution */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Service Type Distribution</h2>
          {data.serviceDistribution.length === 0 ? (
            <p className="text-gray-400 text-center py-16">No data yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={data.serviceDistribution} dataKey="count" nameKey="_id" cx="50%" cy="50%" outerRadius={80} label={({ _id, percent }) => `${_id} ${(percent * 100).toFixed(0)}%`}>
                  {data.serviceDistribution.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
