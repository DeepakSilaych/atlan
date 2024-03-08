import React from 'react';

const CodeSnippet = ({ code }) => {
  return (
    <div className="code-snippet">
      <pre>{code}</pre>
    </div>
  );
};

export default CodeSnippet;
