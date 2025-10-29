import React from 'react';

const Instructions = () => (
  <div className="mt-8 p-6 rounded-xl shadow-md border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-700 dark:text-white hover:underline mb-3">How to Use:</h2>
    <ol className="list-decimal list-inside text-gray-600 dark:text-white space-y-2">
      <li>Paste your raw JSON text into the input area.</li>
      <li>Click the <strong>Validate JSON</strong> button.</li>
      <li>If validation succeeds, the button will change to <strong>Generate Tree</strong>.</li>
      <li>If validation fails, an error message will guide you to fix the syntax.</li>
    </ol>
  </div>
);

export default Instructions;