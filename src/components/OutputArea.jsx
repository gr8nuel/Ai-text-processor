import React from 'react';

const OutputArea = ({ outputText, detectedLanguage, summary, translatedText }) => {
  return (
    <div className="output-area">
      {outputText && <p>{outputText}</p>}
      {detectedLanguage && <p>Detected Language: {detectedLanguage}</p>}
      {summary && <p>Summary: {summary}</p>}
      {translatedText && <p>Translated Text: {translatedText}</p>}
    </div>
  );
};

export default OutputArea;