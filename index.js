import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => { logout(); navigate('/login'); };

  const customerLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/vehicles', label: 'My Vehicles' },
    { to: '/booking', label: 'Book Service' },
    { to: '/status', label: 'Track Status' },
    { to: '/invoices', label: 'Invoices' },
  ];

  const adminLinks = [
    { to: '/admin', label: 'Dashboard' },
    { to: '/admin/slots', label: 'Manage Slots' },
    { to: '/admin/bookings', label: 'Bookings' },
    { to: '/admin/users', label: 'Users' },
    { to: '/admin/inventory', label: 'Inventory' },
    { to: '/admin/queue', label: 'Queue' },
  ];

  const mechanicLinks = [
    { to: '/mechanic', label: 'My Tasks' },
  ];

  const links = user?.role === 'admin' ? adminLinks : user?.role === 'mechanic' ? mechanicLinks : customerLinks;

  return (
    <nav className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-2xl">🔧</span>
            <span className="hidden sm:block">AutoService Pro</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {user && links.map(({ to, label }) => (
              <Link key={to} to={to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === to ? 'bg-blue-800' : 'hover:bg-blue-600'}`}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <span className="hidden sm:block text-sm text-blue-200">
                  {user.name} <span className="text-xs bg-blue-800 px-2 py-0.5 rounded-full ml-1 capitalize">{user.role}</span>
                </span>
                <button onClick={handleLogout} className="bg-blue-800 hover:bg-blue-900 px-3 py-1.5 rounded-lg text-sm transition-colors">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">
                Login
              </Link>
            )}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && user && (
          <div className="md:hidden pb-3 space-y-1">
            {links.map(({ to, label }) => (
              <Link key={to} to={to} onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm hover:bg-blue-600 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
