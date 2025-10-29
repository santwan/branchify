import React from 'react';
import { CheckCircle, XCircle, ChevronRight } from 'lucide-react';

// Determine the styling and icon for the status message
const getStatusStyle = (type) => {
  if (type === 'success') return 'bg-green-100 text-green-800 border-green-400';
  if (type === 'error') return 'bg-red-100 text-red-800 border-red-400';
  if (type === 'info') return 'bg-blue-100 text-blue-800 border-blue-400';
  return '';
};

const StatusIcon = ({ type }) => {
  if (type === 'success') return <CheckCircle className="w-5 h-5 mr-2" />;
  if (type === 'error') return <XCircle className="w-5 h-5 mr-2" />;
  if (type === 'info') return <ChevronRight className="w-5 h-5 mr-2" />;
  return null;
};

const ValidationStatus = ({ validationMessage }) => {
  if (!validationMessage) return null;

  const { type, text } = validationMessage;
  
  return (
    <div className={`mt-4 p-3 rounded-lg border flex items-start text-sm ${getStatusStyle(type)}`}>
      <StatusIcon type={type} />
      <p className="whitespace-pre-wrap">{text}</p>
    </div>
  );
};

export default ValidationStatus;
