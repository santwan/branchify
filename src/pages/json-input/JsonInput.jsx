import React, { useState, useCallback } from 'react';
import { CheckCircle, XCircle, ChevronRight, CornerDownRight } from 'lucide-react';
import Header from '@/components/json-input/Header';
import JsonTextArea from '@/components/json-input/JsonTextArea';
import Instructions from '@/components/json-input/Instruction';
import { generateTree } from '@/utils/generateTree';

const JsonInput = () => {
  // State for the user's JSON input text
  const [jsonInput, setJsonInput] = useState('');
  // State to store the validation status message 
  const [validationMessage, setValidationMessage] = useState(null);
  // State to track if the JSON is valid, rendering two buttons simlultaneously
  const [isValid, setIsValid] = useState(false);
  // State to manage the loading status during validation
  const [isLoading, setIsLoading] = useState(false);

  // Function containing the basic JSON validation logic
  const validateJson = useCallback(() => {
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
      // Attempt to parse the JSON string ( taking the input from the user in the form of strinmg )
      const parsedData = JSON.parse(jsonInput);
      
      // Additional check to ensure it is a valid object or array, not just null/primitive
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

  // Handler for the main action button click
  const handleButtonClick = () => {
    if (isValid) {
      // If already valid, proceed to generate the tree and calling the function or component with the parsed data
      const data = JSON.parse(jsonInput);
      generateTree(data);
    } else {
      // If not valid, run the validation
      validateJson();
    }
  };

  // Determine the styling and icon for the status message
  const getStatusStyle = () => {
    if (!validationMessage) return '';
    if (validationMessage.type === 'success') return 'bg-green-100 text-green-800 border-green-400';
    if (validationMessage.type === 'error') return 'bg-red-100 text-red-800 border-red-400';
    if (validationMessage.type === 'info') return 'bg-blue-100 text-blue-800 border-blue-400';
    return '';
  };

  const StatusIcon = () => {
    if (!validationMessage) return null;
    if (validationMessage.type === 'success') return <CheckCircle className="w-5 h-5 mr-2" />;
    if (validationMessage.type === 'error') return <XCircle className="w-5 h-5 mr-2" />;
    if (validationMessage.type === 'info') return <ChevronRight className="w-5 h-5 mr-2" />;
    return null;
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto">

        <Header />

        {/* JSON Input Area Card */}
        <div className=" p-6 shadow-xl rounded-xl transition-all hover:shadow-2xl border border-gray-100">
          {/* Json text are where user will write his json */}
          <JsonTextArea
            jsonInput={jsonInput}
            setJsonInput={setJsonInput}
            setValidationMessage={setValidationMessage}
            setIsValid={setIsValid}
          />

          {/* Status Message Display */}
          {validationMessage && 
            (
              <div className={`mt-4 p-3 rounded-lg border flex items-start text-sm ${getStatusStyle()}`}>
                <StatusIcon />
                <p className="whitespace-pre-wrap">{validationMessage.text}</p>
              </div>
            )
          }

          {/* Action Button */}
          <div className="mt-6 flex justify-center">

            <button
              onClick={handleButtonClick}
              disabled={isLoading}
              className=
              {`
                w-full sm:w-auto px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center
                ${isValid
                  ? 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-300'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300'
                }
                ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95'}
              `}
            >
              {
                isLoading
                ? 
                  (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) 
                :
                  (
                    isValid 
                    ? 
                      (
                        <>
                          <CornerDownRight className="w-5 h-5 mr-2" />
                          Generate Tree
                        </>
                      ) 
                    : 
                      (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Validate JSON
                        </>
                      )
                  )
              }
            </button>

          </div>
        </div>
        
        {/* Example Instructions */}
        <Instructions/>
      </div>
    </div>
  );
};

export default JsonInput;
