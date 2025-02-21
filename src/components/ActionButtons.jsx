import React from 'react';

const ActionButtons = ({ selectedLanguage, setSelectedLanguage, handleTranslate, handleSummarize, showSummarize }) => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'es', name: 'Spanish' },
    { code: 'ru', name: 'Russian' },
    { code: 'tr', name: 'Turkish' },
    { code: 'fr', name: 'French' },
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