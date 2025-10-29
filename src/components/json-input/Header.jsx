import React from 'react';

const Header = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-amber-50 mb-6 text-center">
      JSON Data Interface
    </h1>
    <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
      Paste your JSON data below for validation. Upon success, you can generate a visual tree structure.
    </p>
  </>
);

export default Header;