import React from 'react';

const JsonTextArea = ({ jsonInput, setJsonInput , setValidationMessage , setIsValid }) => (
  <>
    <label htmlFor="json-input" className="block text-lg font-semibold text-gray-700 dark:text-amber-50/80 mb-2">
      JSON Input Area
    </label>
    <textarea
      id="json-input"
      rows="15"
      className="w-full p-4 border dark:bg-gray-900 border-gray-300 dark:border-amber-600 dark:focus:bg-gray-900 focus:bg-gray-300/20 rounded-lg  dark:focus:ring-amber-500 focus:border-indigo-500 dark:focus:border-amber-500 placeholder-gray-900/60 dark:placeholder-amber-500/70  dark:focus:placeholder-gray-100 font-mono text-sm resize-none transition-all duration-800 ease-in-out"
      value={jsonInput}
      onChange={(e) => {
        setJsonInput(e.target.value);
        // Reset status when the user starts typing again
        setIsValid(false);
        setValidationMessage(null);
      }}
      placeholder={`Paste your JSON here (e.g., \n{\n  "user": "Alice",\n  "id": 101,\n  "data": [1, 2, 3]\n})`}
    />
  </>
);

export default JsonTextArea;