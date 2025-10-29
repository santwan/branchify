import { useCallback } from "react";
    // Function containing the core JSON validation logic
  export  const validateJson = useCallback((jsonInput, setIsLoading, setIsValid, setValidationMessage) => {
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
        
        // Additional check to ensure it's a valid object or array, not just null/primitive
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
    }, [jsonInput]);
