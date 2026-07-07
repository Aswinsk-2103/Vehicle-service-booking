const mongoose = require('mongoose');

const sparePartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  partNumber: { type: String, unique: true },
  category: { type: String },
  quantity: { type: Number, required: true, default: 0 },
  minStockLevel: { type: Number, default: 5 },
  unitPrice: { type: Number, required: true },
  supplier: { type: String },
}, { timestamps: true });

sparePartSchema.virtual('isLowStock').get(function () {
  return this.quantity <= this.minStockLevel;
});

module.exports = mongoose.model('SparePart', sparePartSchema);
