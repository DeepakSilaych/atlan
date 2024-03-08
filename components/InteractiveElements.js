import React, { useState } from 'react';

const InteractiveElement = () => {
  const [result, setResult] = useState('');

  const handleInteraction = async () => {
    // Handle user interaction (e.g., API request)
    setResult('Interaction result');
  };

  return (
    <div className="interactive-element">
      <button onClick={handleInteraction}>Interact</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default InteractiveElement;
