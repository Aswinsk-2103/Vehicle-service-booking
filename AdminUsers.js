import React, { useEffect, useState, useRef } from 'react';
import { getInvoices } from '../services/api';
import StatusBadge from '../components/StatusBadge';
import Loader from '../components/Loader';
import { useReactToPrint } from 'react-to-print';

const InvoicePrint = React.forwardRef(({ invoice }, ref) => (
  <div ref={ref} className="p-8 max-w-2xl mx-auto font-sans">
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-2xl font-bold text-blue-700">🔧 AutoService Pro</h1>
        <p className="text-gray-500 text-sm">Vehicle Service Center</p>
        <p className="text-gray-500 text-sm">support@autoservicepro.com</p>
      </div>
      <div className="text-right">
        <h2 className="text-xl font-bold">INVOICE</h2>
        <p className="text-gray-600 text-sm">{invoice.invoiceNumber}</p>
        <p className="text-gray-600 text-sm">{new Date(invoice.createdAt).toLocaleDateString()}</p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6 mb-8">
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Bill To:</h3>
        <p className="font-medium">{invoice.customerId?.name}</p>
        <p className="text-sm text-gray-600">{invoice.customerId?.email}</p>
        <p className="text-sm text-gray-600">{invoice.customerId?.phone}</p>
        {invoice.customerId?.address && <p className="text-sm text-gray-600">{invoice.customerId.address}</p>}
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Vehicle Details:</h3>
        <p className="font-medium">{invoice.bookingId?.vehicleId?.brand} {invoice.bookingId?.vehicleId?.model}</p>
        <p className="text-sm text-gray-600">{invoice.bookingId?.vehicleId?.vehicleNumber}</p>
        <p className="text-sm text-gray-600">Service: {invoice.bookingId?.serviceType}</p>
        <p className="text-sm text-gray-600">Date: {invoice.bookingId?.slotId?.date}</p>
      </div>
    </div>

    <table className="w-full mb-6 border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="text-left p-3 text-sm font-semibold">Description</th>
          <th className="text-right p-3 text-sm font-semibold">Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b"><td className="p-3 text-sm">Service Cost</td><td className="p-3 text-sm text-right">₹{invoice.serviceCost}</td></tr>
        <tr className="border-b"><td className="p-3 text-sm">Spare Parts</td><td className="p-3 text-sm text-right">₹{invoice.sparePartsCost}</td></tr>
        <tr className="border-b"><td className="p-3 text-sm">Labor Cost</td><td className="p-3 text-sm text-right">₹{invoice.laborCost}</td></tr>
        <tr className="border-b"><td className="p-3 text-sm">GST (18%)</td><td className="p-3 text-sm text-right">₹{invoice.gst}</td></tr>
        {invoice.discount > 0 && <tr className="border-b"><td className="p-3 text-sm text-green-600">Discount</td><td className="p-3 text-sm text-right text-green-600">-₹{invoice.discount}</td></tr>}
        <tr className="bg-blue-50">
          <td className="p-3 font-bold">Total Amount</td>
          <td className="p-3 font-bold text-right text-blue-700">₹{invoice.serviceCost + invoice.sparePartsCost + invoice.laborCost + invoice.gst - (invoice.discount || 0)}</td>
        </tr>
      </tbody>
    </table>

    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-600">Payment Method: {invoice.paymentMethod}</p>
        {invoice.paidAt && <p className="text-sm text-gray-600">Paid on: {new Date(invoice.paidAt).toLocaleDateString()}</p>}
      </div>
      <div className={`px-4 py-2 rounded-full text-sm font-bold ${invoice.paymentStatus === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
        {invoice.paymentStatus}
      </div>
    </div>

    <div className="mt-8 pt-4 border-t text-center text-xs text-gray-400">
      Thank you for choosing AutoService Pro! | support@autoservicepro.com
    </div>
  </div>
));

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const printRef = useRef();

  useEffect(() => { getInvoices().then(r => setInvoices(r.data)).finally(() => setLoading(false)); }, []);

  const handlePrint = useReactToPrint({ content: () => printRef.current });

  if (loading) return <Loader />;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Invoices</h1>

      {invoices.length === 0 ? (
        <div className="card text-center py-12 text-gray-400">
          <p className="text-5xl mb-3">🧾</p>
          <p>No invoices yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {invoices.map(inv => (
            <div key={inv._id} className="card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{inv.invoiceNumber}</h3>
                    <StatusBadge status={inv.paymentStatus} />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {inv.bookingId?.vehicleId?.brand} {inv.bookingId?.vehicleId?.model} •
                    {inv.bookingId?.serviceType} •
                    {new Date(inv.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-blue-700">₹{inv.totalAmount}</span>
                  <button onClick={() => setSelected(inv)} className="btn-secondary text-sm">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Invoice Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white">
              <h3 className="font-semibold">Invoice Details</h3>
              <div className="flex gap-2">
                <button onClick={handlePrint} className="btn-primary text-sm">🖨️ Print / Download</button>
                <button onClick={() => setSelected(null)} className="btn-secondary text-sm">Close</button>
              </div>
            </div>
            <InvoicePrint ref={printRef} invoice={selected} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoices;
