const express = require('express');
const router = express.Router();
const { createInvoice, getInvoices, getInvoiceById, updatePayment } = require('../controllers/invoiceController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.post('/', authorize('admin'), createInvoice);
router.get('/', getInvoices);
router.get('/:id', getInvoiceById);
router.put('/:id/payment', authorize('admin'), updatePayment);

module.exports = router;
