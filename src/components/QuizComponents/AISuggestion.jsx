import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import { useTypewriter, useTypewriterList } from './useTypewriter';

// Blinking cursor CSS
const cursorStyle = `
  .blinking-cursor::after {
    content: '|';
    display: inline-block;
    animation: blink 0.7s infinite;
  }
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const SECTIONS = {
  SUMMARY: 'summary',
  MAIN_WEAK_POINT: 'mainWeakPoint',
  SUGGESTIONS: 'suggestions',
  TIPS: 'tips',
  DONE: 'done',
};

const AISuggestion = ({ suggestion }) => {
  const typingSpeed = 3; 

  const fullSummary = suggestion?.summary || '';
  const fullMainWeakPoint = suggestion?.mainWeakPoint || '';
  const fullSuggestions = suggestion?.suggestions || [];
  const fullTips = suggestion?.tips || [];

  const [currentSection, setCurrentSection] = useState(SECTIONS.SUMMARY);

  // Typewriter effects for each section
  const { displayedText: displayedSummary, isComplete: isSummaryComplete } = useTypewriter(
    fullSummary,
    typingSpeed,
    currentSection === SECTIONS.SUMMARY
  );

  const { displayedText: displayedMainWeakPoint, isComplete: isMainWeakPointComplete } = useTypewriter(
    fullMainWeakPoint,
    typingSpeed,
    currentSection === SECTIONS.MAIN_WEAK_POINT
  );

  const { displayedItems: displayedSuggestions, isComplete: isSuggestionsComplete } = useTypewriterList(
    fullSuggestions,
    typingSpeed,
    currentSection === SECTIONS.SUGGESTIONS
  );

  const { displayedItems: displayedTips, isComplete: isTipsComplete } = useTypewriterList(
    fullTips,
    typingSpeed,
    currentSection === SECTIONS.TIPS
  );

  // Transition between sections
  useEffect(() => {
    if (currentSection === SECTIONS.SUMMARY && isSummaryComplete) {
      setCurrentSection(SECTIONS.MAIN_WEAK_POINT);
    } else if (currentSection === SECTIONS.MAIN_WEAK_POINT && isMainWeakPointComplete) {
      setCurrentSection(SECTIONS.SUGGESTIONS);
    } else if (currentSection === SECTIONS.SUGGESTIONS && isSuggestionsComplete) {
      setCurrentSection(SECTIONS.TIPS);
    } else if (currentSection === SECTIONS.TIPS && isTipsComplete) {
      setCurrentSection(SECTIONS.DONE);
    }
  }, [isSummaryComplete, isMainWeakPointComplete, isSuggestionsComplete, isTipsComplete, currentSection]);

  return (
    <div className="mt-6 flex items-start gap-3">
      <style>{cursorStyle}</style>

      <FaRobot className="text-3xl text-custom-primary mt-1" />

      <div className="flex-1 bg-custom-half-gray p-4 rounded-lg border border-gray-600 relative">
        <div className="absolute left-0 top-4 -ml-2 w-4 h-4 bg-custom-half-gray border-l border-b border-gray-600 transform rotate-45" />

        <h4 className="font-semibold text-white mb-2">Quibly Feedback</h4>
        <p
          className={`text-gray-200 mb-4 ${
            currentSection === SECTIONS.SUMMARY ? 'blinking-cursor' : ''
          }`}
        >
          {displayedSummary}
        </p>

        {currentSection !== SECTIONS.SUMMARY && (
          <div className="mb-4">
            <h5 className="font-semibold text-white">Main Weak Point</h5>
            <p
              className={`text-gray-300 ${
                currentSection === SECTIONS.MAIN_WEAK_POINT ? 'blinking-cursor' : ''
              }`}
            >
              {displayedMainWeakPoint}
            </p>
          </div>
        )}

        {currentSection !== SECTIONS.SUMMARY &&
          currentSection !== SECTIONS.MAIN_WEAK_POINT &&
          fullSuggestions.length > 0 && (
            <div className="mb-4">
              <h5 className="font-semibold text-white">Suggestions</h5>
              <ul className="list-disc list-inside text-gray-300">
                {displayedSuggestions.map((suggestionItem, index) => (
                  <li
                    key={index}
                    className={
                      index === displayedSuggestions.length - 1 &&
                      currentSection === SECTIONS.SUGGESTIONS
                        ? 'blinking-cursor'
                        : ''
                    }
                  >
                    {suggestionItem}
                  </li>
                ))}
              </ul>
            </div>
          )}

        {(currentSection === SECTIONS.TIPS || currentSection === SECTIONS.DONE) &&
          fullTips.length > 0 && (
            <div>
              <h5 className="font-semibold text-white">Tips</h5>
              <ul className="list-disc list-inside text-gray-300">
                {displayedTips.map((tip, index) => (
                  <li
                    key={index}
                    className={
                      index === displayedTips.length - 1 && currentSection === SECTIONS.TIPS
                        ? 'blinking-cursor'
                        : ''
                    }
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </div>
  );
};

export default AISuggestion;