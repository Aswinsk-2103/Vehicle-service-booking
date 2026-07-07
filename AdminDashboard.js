import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const features = [
  { icon: '📅', title: 'Easy Booking', desc: 'Book service slots online in minutes with our calendar-based system' },
  { icon: '🔍', title: 'Real-time Tracking', desc: 'Track your vehicle repair status from Booked to Ready for Delivery' },
  { icon: '🧾', title: 'Digital Invoices', desc: 'Get detailed invoices with GST breakdown, downloadable as PDF' },
  { icon: '🔔', title: 'Notifications', desc: 'Receive email and SMS updates at every stage of your service' },
  { icon: '💡', title: 'Smart Recommendations', desc: 'AI-powered service suggestions based on your vehicle history' },
  { icon: '🚐', title: 'Pickup & Drop', desc: 'Request doorstep vehicle pickup and delivery service' },
];

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🔧</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AutoService Pro</h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Professional vehicle service management. Book, track, and manage your car service online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link to={user.role === 'admin' ? '/admin' : user.role === 'mechanic' ? '/mechanic' : '/dashboard'}
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-xl transition-colors">
                Go to Dashboard →
              </Link>
            ) : (
              <>
                <Link to="/register" className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-xl transition-colors">
                  Get Started Free
                </Link>
                <Link to="/login" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-8 rounded-xl transition-colors">
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 px-4 border-b">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[['10,000+', 'Happy Customers'], ['50,000+', 'Services Done'], ['99%', 'Satisfaction Rate'], ['24/7', 'Support']].map(([val, label]) => (
            <div key={label}>
              <p className="text-3xl font-bold text-blue-700">{val}</p>
              <p className="text-gray-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Everything You Need</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="card hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-500 mb-10">Comprehensive vehicle care for all makes and models</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: '🛢️', name: 'Oil Change' },
              { icon: '⚙️', name: 'Engine Service' },
              { icon: '🛑', name: 'Brake Check' },
              { icon: '🔧', name: 'General Service' },
              { icon: '🚗', name: 'Full Service' },
            ].map(({ icon, name }) => (
              <div key={name} className="p-4 bg-blue-50 rounded-xl text-center hover:bg-blue-100 transition-colors">
                <div className="text-3xl mb-2">{icon}</div>
                <p className="text-sm font-medium text-blue-800">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {!user && (
        <section className="bg-blue-700 text-white py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 mb-8">Join thousands of satisfied customers</p>
          <Link to="/register" className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-10 rounded-xl transition-colors inline-block">
            Create Free Account
          </Link>
        </section>
      )}

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p>© 2024 AutoService Pro. Built with MERN Stack.</p>
      </footer>
    </div>
  );
};

export default Home;
