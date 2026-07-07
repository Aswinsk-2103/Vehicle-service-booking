const express = require('express');
const router = express.Router();
const { getVehicles, addVehicle, updateVehicle, deleteVehicle, getServiceRecommendation } = require('../controllers/vehicleController');
const { protect } = require('../middleware/auth');

router.use(protect);
router.get('/', getVehicles);
router.post('/', addVehicle);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);
router.get('/:id/recommendation', getServiceRecommendation);

module.exports = router;
