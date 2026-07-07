import React from 'react';

const StatusBadge = ({ status }) => {
  const styles = {
    'Booked': 'bg-blue-100 text-blue-800',
    'Vehicle Received': 'bg-indigo-100 text-indigo-800',
    'Inspection': 'bg-purple-100 text-purple-800',
    'Repair in Progress': 'bg-yellow-100 text-yellow-800',
    'Testing': 'bg-orange-100 text-orange-800',
    'Completed': 'bg-green-100 text-green-800',
    'Ready for Delivery': 'bg-teal-100 text-teal-800',
    'Cancelled': 'bg-red-100 text-red-800',
    'Paid': 'bg-green-100 text-green-800',
    'Pending': 'bg-yellow-100 text-yellow-800',
    'Partial': 'bg-orange-100 text-orange-800',
  };
  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${styles[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
