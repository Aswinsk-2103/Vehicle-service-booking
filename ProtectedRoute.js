import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Vehicles from './pages/Vehicles';
import Booking from './pages/Booking';
import Status from './pages/Status';
import Invoices from './pages/Invoices';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageSlots from './pages/admin/ManageSlots';
import AdminBookings from './pages/admin/AdminBookings';
import AdminUsers from './pages/admin/AdminUsers';
import Inventory from './pages/admin/Inventory';
import GarageQueue from './pages/admin/GarageQueue';

// Mechanic Pages
import MechanicDashboard from './pages/mechanic/MechanicDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Customer */}
            <Route path="/dashboard" element={<ProtectedRoute roles={['customer']}><Dashboard /></ProtectedRoute>} />
            <Route path="/vehicles" element={<ProtectedRoute roles={['customer']}><Vehicles /></ProtectedRoute>} />
            <Route path="/booking" element={<ProtectedRoute roles={['customer']}><Booking /></ProtectedRoute>} />
            <Route path="/status" element={<ProtectedRoute roles={['customer']}><Status /></ProtectedRoute>} />
            <Route path="/invoices" element={<ProtectedRoute roles={['customer', 'admin']}><Invoices /></ProtectedRoute>} />

            {/* Admin */}
            <Route path="/admin" element={<ProtectedRoute roles={['admin']}><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/slots" element={<ProtectedRoute roles={['admin']}><ManageSlots /></ProtectedRoute>} />
            <Route path="/admin/bookings" element={<ProtectedRoute roles={['admin']}><AdminBookings /></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute roles={['admin']}><AdminUsers /></ProtectedRoute>} />
            <Route path="/admin/inventory" element={<ProtectedRoute roles={['admin']}><Inventory /></ProtectedRoute>} />
            <Route path="/admin/queue" element={<ProtectedRoute roles={['admin']}><GarageQueue /></ProtectedRoute>} />

            {/* Mechanic */}
            <Route path="/mechanic" element={<ProtectedRoute roles={['mechanic']}><MechanicDashboard /></ProtectedRoute>} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </Router>
    </AuthProvider>
  );
}

export default App;
