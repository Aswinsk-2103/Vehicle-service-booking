const User = require('../models/User');
const Booking = require('../models/Booking');
const Vehicle = require('../models/Vehicle');
const Invoice = require('../models/Invoice');
const ServiceSlot = require('../models/ServiceSlot');
const SparePart = require('../models/SparePart');

// @desc  Admin dashboard analytics
// @route GET /api/admin/dashboard
const getDashboard = async (req, res) => {
  try {
    const [totalBookings, completedServices, pendingServices, customers, mechanics, vehicles] = await Promise.all([
      Booking.countDocuments(),
      Booking.countDocuments({ status: 'Completed' }),
      Booking.countDocuments({ status: { $in: ['Booked', 'Vehicle Received', 'Inspection', 'Repair in Progress', 'Testing'] } }),
      User.countDocuments({ role: 'customer' }),
      User.countDocuments({ role: 'mechanic' }),
      Vehicle.countDocuments(),
    ]);

    const revenueData = await Invoice.aggregate([
      { $match: { paymentStatus: 'Paid' } },
      { $group: { _id: null, total: { $sum: '$totalAmount' } } },
    ]);

    // Last 7 days bookings chart data
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const count = await Booking.countDocuments({
        createdAt: { $gte: new Date(dateStr), $lt: new Date(new Date(dateStr).getTime() + 86400000) },
      });
      last7Days.push({ date: dateStr, bookings: count });
    }

    // Service type distribution
    const serviceDistribution = await Booking.aggregate([
      { $group: { _id: '$serviceType', count: { $sum: 1 } } },
    ]);

    const lowStockParts = await SparePart.find({ $expr: { $lte: ['$quantity', '$minStockLevel'] } });

    res.json({
      stats: {
        totalBookings, completedServices, pendingServices,
        customers, mechanics, vehicles,
        revenue: revenueData[0]?.total || 0,
      },
      chartData: last7Days,
      serviceDistribution,
      lowStockAlerts: lowStockParts.length,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Create service slot
// @route POST /api/admin/slots
const createSlot = async (req, res) => {
  try {
    const { date, time, serviceType, maxBookings } = req.body;
    const slot = await ServiceSlot.create({ date, time, serviceType, maxBookings: maxBookings || 1 });
    res.status(201).json(slot);
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ message: 'Slot already exists for this date, time and service type' });
    res.status(500).json({ message: err.message });
  }
};

// @desc  Get all slots (admin)
// @route GET /api/admin/slots
const getAllSlots = async (req, res) => {
  try {
    const slots = await ServiceSlot.find().sort({ date: 1, time: 1 });
    res.json(slots);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Delete slot
// @route DELETE /api/admin/slots/:id
const deleteSlot = async (req, res) => {
  try {
    await ServiceSlot.findByIdAndDelete(req.params.id);
    res.json({ message: 'Slot deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Get all users
// @route GET /api/admin/users
const getUsers = async (req, res) => {
  try {
    const { role } = req.query;
    const filter = role ? { role } : {};
    const users = await User.find(filter).select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Toggle user active status
// @route PUT /api/admin/users/:id/toggle
const toggleUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.isActive = !user.isActive;
    await user.save();
    res.json({ message: `User ${user.isActive ? 'activated' : 'deactivated'}`, isActive: user.isActive });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Garage queue - active bookings with estimated wait
// @route GET /api/admin/queue
const getGarageQueue = async (req, res) => {
  try {
    const activeBookings = await Booking.find({
      status: { $in: ['Vehicle Received', 'Inspection', 'Repair in Progress', 'Testing'] },
    })
      .populate('vehicleId', 'vehicleNumber model brand')
      .populate('customerId', 'name phone')
      .populate('mechanicId', 'name')
      .sort({ updatedAt: 1 });

    const queue = activeBookings.map((b, index) => ({
      ...b.toObject(),
      position: index + 1,
      estimatedWaitMinutes: (index + 1) * 45,
    }));
    res.json(queue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Spare parts CRUD
const getSpareParts = async (req, res) => {
  try {
    const parts = await SparePart.find().sort({ name: 1 });
    res.json(parts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createSparePart = async (req, res) => {
  try {
    const part = await SparePart.create(req.body);
    res.status(201).json(part);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateSparePart = async (req, res) => {
  try {
    const part = await SparePart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(part);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getDashboard, createSlot, getAllSlots, deleteSlot, getUsers, toggleUserStatus, getGarageQueue, getSpareParts, createSparePart, updateSparePart };
