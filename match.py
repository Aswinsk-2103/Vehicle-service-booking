const express = require('express');
const router = express.Router();
const { getSlots, createBooking, getBookings, getBookingById, updateStatus, assignMechanic, cancelBooking, estimateCost } = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.get('/slots', getSlots);
router.post('/estimate', estimateCost);
router.post('/', authorize('customer'), createBooking);
router.get('/', getBookings);
router.get('/:id', getBookingById);
router.put('/:id/status', authorize('admin', 'mechanic'), updateStatus);
router.put('/:id/assign', authorize('admin'), assignMechanic);
router.put('/:id/cancel', cancelBooking);

module.exports = router;
