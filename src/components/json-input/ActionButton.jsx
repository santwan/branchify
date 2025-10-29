import React from 'react';
import { CheckCircle, CornerDownRight } from 'lucide-react';

const LoadingSpinner = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const ActionButton = ({ isLoading, isValid, onClick }) => {
  const baseStyle = "w-full sm:w-auto px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center";
  const validStyle = "bg-purple-600 text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-300";
  const invalidStyle = "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300";
  const loadingStyle = "opacity-70 cursor-not-allowed";
  const activeStyle = "hover:scale-[1.02] active:scale-95";

  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={onClick}
        disabled={isLoading}
        className={`
          ${baseStyle}
          ${isValid ? validStyle : invalidStyle}
          ${isLoading ? loadingStyle : activeStyle}
        `}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : isValid ? (
          <>
            <CornerDownRight className="w-5 h-5 mr-2" />
            Generate Tree
          </>
        ) : (
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            Validate JSON
          </>
        )}
      </button>
    </div>
  );
};

export default ActionButton;