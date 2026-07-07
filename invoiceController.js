import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api' });

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

// Auth
export const register = (data) => API.post('/auth/register', data);
export const login = (data) => API.post('/auth/login', data);
export const getMe = () => API.get('/auth/me');

// Vehicles
export const getVehicles = () => API.get('/vehicles');
export const addVehicle = (data) => API.post('/vehicles', data);
export const updateVehicle = (id, data) => API.put(`/vehicles/${id}`, data);
export const deleteVehicle = (id) => API.delete(`/vehicles/${id}`);
export const getRecommendation = (id) => API.get(`/vehicles/${id}/recommendation`);

// Bookings
export const getSlots = (params) => API.get('/bookings/slots', { params });
export const createBooking = (data) => API.post('/bookings', data);
export const getBookings = () => API.get('/bookings');
export const getBookingById = (id) => API.get(`/bookings/${id}`);
export const updateStatus = (id, data) => API.put(`/bookings/${id}/status`, data);
export const assignMechanic = (id, data) => API.put(`/bookings/${id}/assign`, data);
export const cancelBooking = (id) => API.put(`/bookings/${id}/cancel`);
export const estimateCost = (data) => API.post('/bookings/estimate', data);

// Invoices
export const createInvoice = (data) => API.post('/invoices', data);
export const getInvoices = () => API.get('/invoices');
export const getInvoiceById = (id) => API.get(`/invoices/${id}`);
export const updatePayment = (id, data) => API.put(`/invoices/${id}/payment`, data);

// Admin
export const getDashboard = () => API.get('/admin/dashboard');
export const createSlot = (data) => API.post('/admin/slots', data);
export const getAllSlots = () => API.get('/admin/slots');
export const deleteSlot = (id) => API.delete(`/admin/slots/${id}`);
export const getUsers = (role) => API.get('/admin/users', { params: { role } });
export const toggleUserStatus = (id) => API.put(`/admin/users/${id}/toggle`);
export const getGarageQueue = () => API.get('/admin/queue');
export const getSpareParts = () => API.get('/admin/spare-parts');
export const createSparePart = (data) => API.post('/admin/spare-parts', data);
export const updateSparePart = (id, data) => API.put(`/admin/spare-parts/${id}`, data);

export default API;
