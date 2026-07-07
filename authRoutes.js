const Vehicle = require('../models/Vehicle');

// @desc  Get all vehicles for logged-in customer
// @route GET /api/vehicles
const getVehicles = async (req, res) => {
  try {
    const filter = req.user.role === 'customer' ? { ownerId: req.user._id } : {};
    const vehicles = await Vehicle.find(filter).populate('ownerId', 'name email phone');
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Add vehicle
// @route POST /api/vehicles
const addVehicle = async (req, res) => {
  try {
    const { vehicleNumber, model, brand, year, fuelType, kmDriven } = req.body;
    const vehicle = await Vehicle.create({
      vehicleNumber, model, brand, year, fuelType,
      kmDriven: kmDriven || 0,
      ownerId: req.user._id,
    });
    res.status(201).json(vehicle);
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ message: 'Vehicle number already registered' });
    res.status(500).json({ message: err.message });
  }
};

// @desc  Update vehicle
// @route PUT /api/vehicles/:id
const updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
    if (vehicle.ownerId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }
    const updated = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Delete vehicle
// @route DELETE /api/vehicles/:id
const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
    if (vehicle.ownerId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }
    await vehicle.deleteOne();
    res.json({ message: 'Vehicle removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Smart service recommendation
// @route GET /api/vehicles/:id/recommendation
const getServiceRecommendation = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

    const recommendations = [];
    const now = new Date();

    if (vehicle.lastServiceDate) {
      const monthsSince = (now - new Date(vehicle.lastServiceDate)) / (1000 * 60 * 60 * 24 * 30);
      if (monthsSince >= 6) recommendations.push({ type: 'General Service', reason: `Last service was ${Math.floor(monthsSince)} months ago` });
      if (monthsSince >= 12) recommendations.push({ type: 'Full Service', reason: 'Annual full service recommended' });
    } else {
      recommendations.push({ type: 'General Service', reason: 'No service history found' });
    }

    if (vehicle.kmDriven >= 10000) recommendations.push({ type: 'Oil Change', reason: `${vehicle.kmDriven} km driven - oil change needed` });
    if (vehicle.kmDriven >= 20000) recommendations.push({ type: 'Brake Check', reason: 'Brake inspection recommended at 20,000+ km' });

    res.json({ vehicle, recommendations });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getVehicles, addVehicle, updateVehicle, deleteVehicle, getServiceRecommendation };
