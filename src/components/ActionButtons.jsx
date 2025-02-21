import React from 'react';

const ActionButtons = ({ selectedLanguage, setSelectedLanguage, handleTranslate, handleSummarize, showSummarize }) => {
  const languages = [
    { code: 'English', name: 'English' },
    { code: 'Spanish', name: 'Spanish' },
    { code: 'French', name: 'French' },
    { code: 'Portuguese', name: 'Portuguese' },
    { code: 'Russian', name: 'Russian' },
    { code: 'Turkish', name: 'Turkish' },
  ];

  return (
    <div className="action-buttons">
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        aria-label="Select language for translation"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <button onClick={handleTranslate} aria-label="Translate text">
        Translate
      </button>
      {showSummarize && ( // Conditionally render the Summarize button
        <button onClick={handleSummarize} aria-label="Summarize text">
          Summarize
        </button>
      )}
    </div>
  );
};

export default ActionButtons;