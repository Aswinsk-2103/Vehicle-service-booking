const Invoice = require('../models/Invoice');
const Booking = require('../models/Booking');
const { sendEmail, emailTemplates } = require('../utils/notifications');

// @desc  Create invoice
// @route POST /api/invoices
const createInvoice = async (req, res) => {
  try {
    const { bookingId, serviceCost, sparePartsCost, laborCost, discount, items, paymentMethod } = req.body;

    const booking = await Booking.findById(bookingId).populate('customerId', 'name email');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    const existing = await Invoice.findOne({ bookingId });
    if (existing) return res.status(400).json({ message: 'Invoice already exists for this booking' });

    const subtotal = (serviceCost || 0) + (sparePartsCost || 0) + (laborCost || 0);
    const gst = Math.round(subtotal * 0.18);
    const totalAmount = subtotal + gst - (discount || 0);

    const invoice = await Invoice.create({
      bookingId, customerId: booking.customerId._id,
      serviceCost: serviceCost || 0,
      sparePartsCost: sparePartsCost || 0,
      laborCost: laborCost || 0,
      gst, discount: discount || 0,
      totalAmount, items: items || [],
      paymentMethod: paymentMethod || 'Cash',
    });

    // Notify customer
    const { subject, html } = emailTemplates.invoiceGenerated(
      booking.customerId.name, invoice.invoiceNumber, totalAmount
    );
    sendEmail({ to: booking.customerId.email, subject, html });

    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Get invoices
// @route GET /api/invoices
const getInvoices = async (req, res) => {
  try {
    const filter = req.user.role === 'customer' ? { customerId: req.user._id } : {};
    const invoices = await Invoice.find(filter)
      .populate({ path: 'bookingId', populate: [{ path: 'vehicleId', select: 'vehicleNumber model brand' }, { path: 'slotId', select: 'date time serviceType' }] })
      .populate('customerId', 'name email phone address')
      .sort({ createdAt: -1 });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Get single invoice
// @route GET /api/invoices/:id
const getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id)
      .populate({ path: 'bookingId', populate: [{ path: 'vehicleId' }, { path: 'slotId' }, { path: 'mechanicId', select: 'name' }] })
      .populate('customerId', 'name email phone address');
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });
    res.json(invoice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Update payment status
// @route PUT /api/invoices/:id/payment
const updatePayment = async (req, res) => {
  try {
    const { paymentStatus, paymentMethod } = req.body;
    const invoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      { paymentStatus, paymentMethod, paidAt: paymentStatus === 'Paid' ? new Date() : null },
      { new: true }
    );
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });
    res.json(invoice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createInvoice, getInvoices, getInvoiceById, updatePayment };
