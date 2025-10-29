import React, { useState } from 'react';
import { useJsonValidator } from '@/utils/useJsonValidator';
import Header from '@/components/json-input/Header';
import JsonTextArea from '@/components/json-input/JsonTextArea';
import ValidationStatus from '@/components/json-input/ValidationStatus';
import ActionButton from '@/components/json-input/ActionButton';
import Instructions from '@/components/json-input/Instruction';

// The main component that assembles the UI and manages state.
const JsonInput = () => {
  // State for the user's JSON input text
  const [jsonInput, setJsonInput] = useState('');
  
  // Custom hook to manage all validation logic and state
  const {
    validationMessage,
    isValid,
    isLoading,
    validateJson,
    resetValidation,
    setValidationMessage
  } = useJsonValidator();

  // Handler for the main action button click
  const handleButtonClick = () => {
    if (isValid) {
      // Placeholder for the next feature: Generate Tree
      setValidationMessage({
        type: 'info',
        text: 'Tree Generation feature is coming soon! Validation is complete.'
      });
    } else {
      // If not valid, run the validation
      validateJson(jsonInput);
    }
  };

  // Handler for when the user types in the textarea
  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
    // Reset status when the user starts typing again
    resetValidation();
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <Header />

        {/* JSON Input Area Card */}
        <div className=" p-6 shadow-3xl dark:shadow-amber-500/60 rounded-xl transition-all hover:shadow-2xl dark:hover:shadow-2xl border dark:border-amber-500/10 border-gray-100">
          <JsonTextArea
            jsonInput={jsonInput}
            onInputChange={handleInputChange}
          />

          <ValidationStatus validationMessage={validationMessage} />
          
          <ActionButton
            isLoading={isLoading}
            isValid={isValid}
            onClick={handleButtonClick}
          />
        </div>
        
        <Instructions />
      </div>
    </div>
  );
};

export default JsonInput;