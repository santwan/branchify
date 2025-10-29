import React from 'react';

const JsonTextArea = ({ jsonInput, onInputChange }) => (
  <>
    <label htmlFor="json-input" className="block text-lg font-semibold text-gray-700 dark:text-amber-50/80 mb-2">
      JSON Input Area
    </label>
    <textarea
      id="json-input"
      rows="15"
      className="w-full p-4 border border-gray-300 dark:border-amber-600 dark:focus:bg-gray-900 rounded-lg focus:ring-indigo-500 dark:focus:ring-amber-500 focus:border-indigo-500 dark:focus:border-amber-500 font-mono text-sm resize-none transition-all duration-800 ease-in-out"
      value={jsonInput}
      onChange={onInputChange}
      placeholder={`Paste your JSON here (e.g., \n{\n  "user": "Alice",\n  "id": 101,\n  "data": [1, 2, 3]\n})`}
    />
  </>
);

export default JsonTextArea;