const express = require('express');
const router = express.Router();
const { getDashboard, createSlot, getAllSlots, deleteSlot, getUsers, toggleUserStatus, getGarageQueue, getSpareParts, createSparePart, updateSparePart } = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect, authorize('admin'));
router.get('/dashboard', getDashboard);
router.get('/slots', getAllSlots);
router.post('/slots', createSlot);
router.delete('/slots/:id', deleteSlot);
router.get('/users', getUsers);
router.put('/users/:id/toggle', toggleUserStatus);
router.get('/queue', getGarageQueue);
router.get('/spare-parts', getSpareParts);
router.post('/spare-parts', createSparePart);
router.put('/spare-parts/:id', updateSparePart);

module.exports = router;
