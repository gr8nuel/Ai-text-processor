// Check if Chrome AI APIs are available
const isChromeAIAvailable = typeof chrome !== "undefined" && chrome?.ai;

// Mock translations for development
const mockTranslations = {
  en: {
    es: (text) => `Translated to Spanish: ${text}`,
    fr: (text) => `Translated to French: ${text}`,
    pt: (text) => `Translated to Portuguese: ${text}`,
    ru: (text) => `Translated to Russian: ${text}`,
    tr: (text) => `Translated to Turkish: ${text}`,
  },
  es: {
    en: (text) => `Translated to English: ${text}`,
  },
  fr: {
    en: (text) => `Translated to English: ${text}`,
  },
  pt: {
    en: (text) => `Translated to English: ${text}`,
  },
  ru: {
    en: (text) => `Translated to English: ${text}`,
  },
  tr: {
    en: (text) => `Translated to English: ${text}`,
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
      return "en"; // Default to English if detection fails
    }
  } else {
    console.log("Chrome AI Language Detection API not available. Using mock detection.");
    return "en"; // Default to English
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
