import React from 'react';

const InputArea = ({ inputText, setInputText, handleSend }) => {
  return (
    <div className="input-area">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type or paste your text here..."
        aria-label="Input text for processing"
      />
      <button onClick={handleSend} aria-label="Send text">
        Send
      </button>
    </div>
  );
};

export default InputArea;