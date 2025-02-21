import React, { useState } from 'react';
import InputArea from './components/InputArea';
import OutputArea from './components/OutputArea';
import ActionButtons from './components/ActionButtons';
import { detectLanguage, summarizeText, translateText } from './utils/api';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');
  const [summary, setSummary] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('es'); // Default to Spanish

  const handleSend = async () => {
    console.log("Handling send..."); // Debugging log
    if (!inputText.trim()) {
      alert('Please enter some text.');
      return;
    }

    setOutputText(inputText);

    // Detect language
    try {
      const language = await detectLanguage(inputText);
      setDetectedLanguage(language);
    } catch (error) {
      console.error("Error detecting language:", error);
    }

    // Summarize if text is > 150 characters and in English
    if (inputText.length > 150 && detectedLanguage === 'en') {
      try {
        const summary = await summarizeText(inputText);
        setSummary(summary);
      } catch (error) {
        console.error("Error summarizing text:", error);
      }
    } else {
      setSummary('');
    }
  };

  const handleTranslate = async () => {
    console.log("Handling translate..."); // Debugging log
    if (!outputText.trim()) {
      alert('No text to translate.');
      return;
    }

    try {
      const translatedText = await translateText(outputText, detectedLanguage, selectedLanguage);
      setTranslatedText(translatedText); // Update the translated text state
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  const handleSummarize = async () => {
    console.log("Handling summarize..."); // Debugging log
    if (!outputText.trim()) {
      alert('No text to summarize.');
      return;
    }

    try {
      const summary = await summarizeText(outputText);
      setSummary(summary); // Update the summary state
    } catch (error) {
      console.error("Error summarizing text:", error);
    }
  };

  return (
    <div className="chat-container">
      <OutputArea
        outputText={outputText}
        detectedLanguage={detectedLanguage}
        summary={summary}
        translatedText={translatedText}
      />
      <InputArea
        inputText={inputText}
        setInputText={setInputText}
        handleSend={handleSend}
      />
      <ActionButtons
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        handleTranslate={handleTranslate}
        handleSummarize={handleSummarize} // Pass the handleSummarize function
        showSummarize={inputText.length > 150 && detectedLanguage === 'en'} // Show summarize button conditionally
      />
    </div>
  );
};

export default App;