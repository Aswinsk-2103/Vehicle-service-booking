import React, { useEffect, useState } from 'react';
import { getVehicles, addVehicle, updateVehicle, deleteVehicle, getRecommendation } from '../services/api';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';

const FUEL_TYPES = ['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid'];
const EMPTY_FORM = { vehicleNumber: '', model: '', brand: '', year: '', fuelType: 'Petrol', kmDriven: '' };

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editId, setEditId] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchVehicles = () => getVehicles().then(r => setVehicles(r.data)).finally(() => setLoading(false));
  useEffect(() => { fetchVehicles(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editId) {
        await updateVehicle(editId, form);
        toast.success('Vehicle updated!');
      } else {
        await addVehicle(form);
        toast.success('Vehicle added!');
      }
      setShowForm(false);
      setForm(EMPTY_FORM);
      setEditId(null);
      fetchVehicles();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to save vehicle');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (v) => {
    setForm({ vehicleNumber: v.vehicleNumber, model: v.model, brand: v.brand, year: v.year, fuelType: v.fuelType, kmDriven: v.kmDriven });
    setEditId(v._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this vehicle?')) return;
    try {
      await deleteVehicle(id);
      toast.success('Vehicle deleted');
      fetchVehicles();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to delete');
    }
  };

  const handleRecommendation = async (id) => {
    try {
      const { data } = await getRecommendation(id);
      setRecommendation(data);
    } catch {
      toast.error('Failed to get recommendation');
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Vehicles</h1>
        <button onClick={() => { setShowForm(true); setEditId(null); setForm(EMPTY_FORM); }} className="btn-primary">
          + Add Vehicle
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="card mb-6">
          <h2 className="text-lg font-semibold mb-4">{editId ? 'Edit Vehicle' : 'Add New Vehicle'}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { key: 'vehicleNumber', label: 'Vehicle Number', placeholder: 'MH12AB1234' },
              { key: 'brand', label: 'Brand', placeholder: 'Maruti Suzuki' },
              { key: 'model', label: 'Model', placeholder: 'Swift' },
              { key: 'year', label: 'Year', placeholder: '2020', type: 'number' },
              { key: 'kmDriven', label: 'KM Driven', placeholder: '15000', type: 'number' },
            ].map(({ key, label, placeholder, type }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <input type={type || 'text'} className="input-field" placeholder={placeholder}
                  required value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
              <select className="input-field" value={form.fuelType} onChange={(e) => setForm({ ...form, fuelType: e.target.value })}>
                {FUEL_TYPES.map(f => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2 flex gap-3">
              <button type="submit" disabled={submitting} className="btn-primary">{submitting ? 'Saving...' : 'Save Vehicle'}</button>
              <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Recommendation Modal */}
      {recommendation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-3">🔍 Service Recommendations</h3>
            <p className="text-sm text-gray-500 mb-4">{recommendation.vehicle.brand} {recommendation.vehicle.model} - {recommendation.vehicle.vehicleNumber}</p>
            {recommendation.recommendations.length === 0 ? (
              <p className="text-green-600">✅ Your vehicle is up to date!</p>
            ) : (
              <div className="space-y-3">
                {recommendation.recommendations.map((r, i) => (
                  <div key={i} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="font-medium text-yellow-800">{r.type}</p>
                    <p className="text-sm text-yellow-600">{r.reason}</p>
                  </div>
                ))}
              </div>
            )}
            <button onClick={() => setRecommendation(null)} className="btn-primary mt-4 w-full">Close</button>
          </div>
        </div>
      )}

      {/* Vehicle Cards */}
      {vehicles.length === 0 ? (
        <div className="card text-center py-12 text-gray-400">
          <p className="text-5xl mb-3">🚗</p>
          <p className="text-lg">No vehicles added yet</p>
          <button onClick={() => setShowForm(true)} className="btn-primary mt-4">Add Your First Vehicle</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map(v => (
            <div key={v._id} className="card hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg">{v.brand} {v.model}</h3>
                  <p className="text-blue-600 font-mono font-medium">{v.vehicleNumber}</p>
                </div>
                <span className="text-3xl">🚗</span>
              </div>
              <div className="space-y-1 text-sm text-gray-600 mb-4">
                <p>📅 Year: {v.year}</p>
                <p>⛽ Fuel: {v.fuelType}</p>
                <p>🛣️ KM: {v.kmDriven?.toLocaleString() || 0}</p>
                {v.lastServiceDate && <p>🔧 Last Service: {new Date(v.lastServiceDate).toLocaleDateString()}</p>}
              </div>
              <div className="flex gap-2 flex-wrap">
                <button onClick={() => handleRecommendation(v._id)} className="btn-secondary text-xs py-1 px-2">💡 Recommend</button>
                <button onClick={() => handleEdit(v)} className="btn-secondary text-xs py-1 px-2">✏️ Edit</button>
                <button onClick={() => handleDelete(v._id)} className="btn-danger text-xs py-1 px-2">🗑️ Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vehicles;
