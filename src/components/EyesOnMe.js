// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
  // Event handler for the focus event
  const handleFocus = () => {
    console.log('Good!');
  };

  // Event handler for the blur event
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <button
      onFocus={handleFocus} // Attach the focus event handler
      onBlur={handleBlur}   // Attach the blur event handler
    >
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
