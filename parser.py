require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Vehicle = require('./models/Vehicle');
const ServiceSlot = require('./models/ServiceSlot');
const SparePart = require('./models/SparePart');

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');

  // Clear existing data
  await Promise.all([User.deleteMany(), Vehicle.deleteMany(), ServiceSlot.deleteMany(), SparePart.deleteMany()]);
  console.log('Cleared existing data');

  // Create users (hash passwords manually since insertMany skips pre-save hook)
  const hash = (p) => bcrypt.hash(p, 12);
  const users = await User.insertMany([
    { name: 'Admin User', email: 'admin@demo.com', password: await hash('admin123'), role: 'admin', phone: '9876543210', address: 'Service Center, Mumbai' },
    { name: 'John Customer', email: 'customer@demo.com', password: await hash('customer123'), role: 'customer', phone: '9876543211', address: '123 Main St, Mumbai' },
    { name: 'Raj Mechanic', email: 'mechanic@demo.com', password: await hash('mechanic123'), role: 'mechanic', phone: '9876543212', address: 'Workshop Area, Mumbai' },
    { name: 'Priya Mechanic', email: 'mechanic2@demo.com', password: await hash('mechanic123'), role: 'mechanic', phone: '9876543213', address: 'Workshop Area, Mumbai' },
    { name: 'Amit Customer', email: 'amit@demo.com', password: await hash('customer123'), role: 'customer', phone: '9876543214', address: '456 Park Ave, Delhi' },
  ]);
  console.log(`Created ${users.length} users`);

  const customer = users.find(u => u.email === 'customer@demo.com');
  const customer2 = users.find(u => u.email === 'amit@demo.com');

  // Create vehicles
  const vehicles = await Vehicle.create([
    { vehicleNumber: 'MH12AB1234', model: 'Swift', brand: 'Maruti Suzuki', year: 2020, fuelType: 'Petrol', ownerId: customer._id, kmDriven: 25000, lastServiceDate: new Date('2024-01-15') },
    { vehicleNumber: 'MH12CD5678', model: 'Baleno', brand: 'Maruti Suzuki', year: 2021, fuelType: 'Petrol', ownerId: customer._id, kmDriven: 15000 },
    { vehicleNumber: 'MH14GH3456', model: 'Innova', brand: 'Toyota', year: 2019, fuelType: 'Diesel', ownerId: customer._id, kmDriven: 45000, lastServiceDate: new Date('2024-03-10') },
    { vehicleNumber: 'MH14IJ7890', model: 'City', brand: 'Honda', year: 2022, fuelType: 'Petrol', ownerId: customer._id, kmDriven: 12000 },
    { vehicleNumber: 'MH14KL2345', model: 'Nexon', brand: 'Tata', year: 2023, fuelType: 'Electric', ownerId: customer._id, kmDriven: 8000, lastServiceDate: new Date('2024-06-01') },
    { vehicleNumber: 'MH20MN6789', model: 'Fortuner', brand: 'Toyota', year: 2021, fuelType: 'Diesel', ownerId: customer._id, kmDriven: 35000, lastServiceDate: new Date('2024-02-20') },
    { vehicleNumber: 'MH20OP1234', model: 'XUV700', brand: 'Mahindra', year: 2022, fuelType: 'Diesel', ownerId: customer._id, kmDriven: 20000 },
    { vehicleNumber: 'MH20QR5678', model: 'Verna', brand: 'Hyundai', year: 2020, fuelType: 'Petrol', ownerId: customer._id, kmDriven: 28000, lastServiceDate: new Date('2023-11-15') },
    { vehicleNumber: 'MH20ST9012', model: 'Punch', brand: 'Tata', year: 2023, fuelType: 'Petrol', ownerId: customer._id, kmDriven: 5000 },
    { vehicleNumber: 'MH20UV3456', model: 'Dzire', brand: 'Maruti Suzuki', year: 2019, fuelType: 'CNG', ownerId: customer._id, kmDriven: 60000, lastServiceDate: new Date('2024-04-10') },
    { vehicleNumber: 'MH20WX7890', model: 'Seltos', brand: 'Kia', year: 2022, fuelType: 'Petrol', ownerId: customer._id, kmDriven: 18000, lastServiceDate: new Date('2024-05-05') },
    { vehicleNumber: 'DL01EF9012', model: 'Creta', brand: 'Hyundai', year: 2022, fuelType: 'Diesel', ownerId: customer2._id, kmDriven: 30000, lastServiceDate: new Date('2023-12-01') },
  ]);
  console.log(`Created ${vehicles.length} vehicles`);

  // Create service slots for next 7 days
  const serviceTypes = ['Oil Change', 'Engine Service', 'Brake Check', 'General Service', 'Full Service'];
  const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
  const slotData = [];

  for (let day = 1; day <= 7; day++) {
    const date = new Date();
    date.setDate(date.getDate() + day);
    const dateStr = date.toISOString().split('T')[0];

    for (const time of times) {
      for (const serviceType of serviceTypes) {
        slotData.push({ date: dateStr, time, serviceType, maxBookings: 2 });
      }
    }
  }

  await ServiceSlot.insertMany(slotData);
  console.log(`Created ${slotData.length} service slots`);

  // Create spare parts
  await SparePart.create([
    { name: 'Engine Oil Filter', partNumber: 'EOF-001', category: 'Filters', quantity: 50, minStockLevel: 10, unitPrice: 250, supplier: 'AutoParts India' },
    { name: 'Air Filter', partNumber: 'AF-002', category: 'Filters', quantity: 30, minStockLevel: 8, unitPrice: 350, supplier: 'AutoParts India' },
    { name: 'Brake Pads (Front)', partNumber: 'BP-003', category: 'Brakes', quantity: 4, minStockLevel: 5, unitPrice: 1200, supplier: 'Brake Masters' },
    { name: 'Spark Plugs (Set of 4)', partNumber: 'SP-004', category: 'Ignition', quantity: 20, minStockLevel: 5, unitPrice: 800, supplier: 'Spark Tech' },
    { name: 'Engine Oil 5W-30 (1L)', partNumber: 'EO-005', category: 'Lubricants', quantity: 100, minStockLevel: 20, unitPrice: 450, supplier: 'Castrol India' },
    { name: 'Coolant (1L)', partNumber: 'CL-006', category: 'Fluids', quantity: 3, minStockLevel: 10, unitPrice: 300, supplier: 'AutoFluids Co' },
    { name: 'Wiper Blades', partNumber: 'WB-007', category: 'Accessories', quantity: 15, minStockLevel: 5, unitPrice: 400, supplier: 'Bosch India' },
  ]);
  console.log('Created spare parts inventory');

  console.log('\n✅ Seed completed successfully!');
  console.log('\nDemo Login Credentials:');
  console.log('Admin:    admin@demo.com    / admin123');
  console.log('Customer: customer@demo.com / customer123');
  console.log('Mechanic: mechanic@demo.com / mechanic123');

  await mongoose.disconnect();
};

seed().catch(err => { console.error(err); process.exit(1); });
