import { useState, useCallback } from 'react';

export const useJsonValidator = () => {
  // State to store the validation status message
  const [validationMessage, setValidationMessage] = useState(null);
  // State to track if the JSON is valid, controlling the button text
  const [isValid, setIsValid] = useState(false);
  // State to manage the loading status during validation
  const [isLoading, setIsLoading] = useState(false);

  // Function containing the core JSON validation logic
  const validateJson = useCallback((jsonInput) => {
    setIsLoading(true);
    setIsValid(false);
    setValidationMessage(null);

    // Basic input check
    if (!jsonInput.trim()) {
      setValidationMessage({ type: 'error', text: 'Input field is empty. Please paste your JSON data.' });
      setIsLoading(false);
      return;
    }

    try {
      // Attempt to parse the JSON string
      const parsedData = JSON.parse(jsonInput);
      
      // Additional check to ensure it's an object or array, not just null/primitive
      if (typeof parsedData !== 'object' || parsedData === null) {
        setValidationMessage({ type: 'error', text: 'JSON is valid, but it is not an object or array (e.g., it is just a string or number).' });
        setIsLoading(false);
        return;
      }

      setIsValid(true);
      setValidationMessage({ type: 'success', text: 'Validation Successful! JSON is well-formed and ready for tree generation.' });
    } catch (error) {
      setIsValid(false);
      // Display the specific error message from the JSON.parse failure
      setValidationMessage({ type: 'error', text: `JSON Syntax Error: ${error.message}` });
    } finally {
      setIsLoading(false);
    }
  }, []); // No dependencies, as jsonInput is now passed as an argument

  // Function to reset the validation state (e.g., when the user types)
  const resetValidation = useCallback(() => {
    setIsValid(false);
    setValidationMessage(null);
  }, []);

  return {
    validationMessage,
    isValid,
    isLoading,
    validateJson,
    resetValidation,
    setValidationMessage // Expose this for the "coming soon" message
  };
};