// Check if Chrome AI APIs are available
const isChromeAIAvailable = typeof chrome !== "undefined" && chrome?.ai;

// Mock translations for development
const mockTranslations = {
  English: {
    Spanish: (text) => `Translated to Spanish: ${text}`,
    French: (text) => `Translated to French: ${text}`,
    Portuguese: (text) => `Translated to Portuguese: ${text}`,
    Russian: (text) => `Translated to Russian: ${text}`,
    Turkish: (text) => `Translated to Turkish: ${text}`,
  },
  Spanish: {
    English: (text) => `Translated to English: ${text}`,
  },
  French: {
    English: (text) => `Translated to English: ${text}`,
  },
  Portuguese: {
    English: (text) => `Translated to English: ${text}`,
  },
  Russian: {
    English: (text) => `Translated to English: ${text}`,
  },
  Turkish: {
    English: (text) => `Translated to English: ${text}`,
  },
};

// Translate text using Chrome AI Translator API or mock implementation
export const translateText = async (text, sourceLanguage, targetLanguage) => {
  if (isChromeAIAvailable && chrome.ai.translator) {
    try {
      const response = await chrome.ai.translator.translate({
        text,
        sourceLanguage,
        targetLanguage,
      });
      return response.translatedText;
    } catch (error) {
      console.error("Error using Chrome AI Translator API:", error);
      return "Translation failed. Please try again.";
    }
  } else {
    console.log("Chrome AI Translator API not available. Using mock translation.");
    const translateFn = mockTranslations[sourceLanguage]?.[targetLanguage];
    return translateFn ? translateFn(text) : text;
  }
};

// Detect language using Chrome AI Language Detection API or mock implementation
export const detectLanguage = async (text) => {
  if (isChromeAIAvailable && chrome.ai.languageDetection) {
    try {
      const response = await chrome.ai.languageDetection.detect(text);
      return response.language;
    } catch (error) {
      console.error("Error using Chrome AI Language Detection API:", error);
      return "English"; // Default to English if detection fails
    }
  } else {
    console.log("Chrome AI Language Detection API not available. Using mock detection.");
    return "English"; // Default to English
  }
};

// Summarize text using Chrome AI Summarizer API or mock implementation
export const summarizeText = async (text) => {
  if (isChromeAIAvailable && chrome.ai.summarizer) {
    try {
      const response = await chrome.ai.summarizer.summarize(text);
      return response.summary;
    } catch (error) {
      console.error("Error using Chrome AI Summarizer API:", error);
      return "Summary failed. Please try again.";
    }
  } else {
    console.log("Chrome AI Summarizer API not available. Using mock summary.");
    return text.split(" ").slice(0, 20).join(" ") + "..."; // Mock summary: first 20 words
  }
};
