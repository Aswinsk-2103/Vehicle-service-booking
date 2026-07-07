const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true, unique: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  invoiceNumber: { type: String, unique: true },
  serviceCost: { type: Number, required: true, default: 0 },
  sparePartsCost: { type: Number, default: 0 },
  laborCost: { type: Number, default: 0 },
  gst: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Partial'], default: 'Pending' },
  paymentMethod: { type: String, enum: ['Cash', 'Card', 'UPI', 'Online'], default: 'Cash' },
  items: [{ description: String, quantity: Number, unitPrice: Number, total: Number }],
  paidAt: { type: Date },
}, { timestamps: true });

invoiceSchema.pre('save', function (next) {
  if (!this.invoiceNumber) {
    this.invoiceNumber = 'INV-' + Date.now();
  }
  next();
});

module.exports = mongoose.model('Invoice', invoiceSchema);
