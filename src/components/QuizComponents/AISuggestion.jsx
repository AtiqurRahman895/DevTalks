/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';

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

const AISuggestion = ({ suggestion }) => {
  const [displayedSummary, setDisplayedSummary] = useState('');
  const [displayedMainWeakPoint, setDisplayedMainWeakPoint] = useState('');
  const [displayedSuggestions, setDisplayedSuggestions] = useState([]);
  const [displayedTips, setDisplayedTips] = useState([]);
  const [currentSection, setCurrentSection] = useState('summary'); 
  const typingSpeed = 3; 

  // Full text for each section
  const fullSummary = suggestion.summary || '';
  const fullMainWeakPoint = suggestion.mainWeakPoint || '';
  const fullSuggestions = suggestion.suggestions || [];
  const fullTips = suggestion.tips || [];

  // Typewriter effect for summary
  useEffect(() => {
    if (currentSection !== 'summary') return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullSummary.length) {
        setDisplayedSummary(fullSummary.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setCurrentSection('mainWeakPoint');
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentSection, fullSummary]);

  // Typewriter effect for mainWeakPoint
  useEffect(() => {
    if (currentSection !== 'mainWeakPoint') return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullMainWeakPoint.length) {
        setDisplayedMainWeakPoint(fullMainWeakPoint.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setCurrentSection('suggestions');
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentSection, fullMainWeakPoint]);

  // Typewriter effect for suggestions (one item at a time)
  useEffect(() => {
    if (currentSection !== 'suggestions') return;

    let itemIndex = 0;
    let charIndex = 0;
    const interval = setInterval(() => {
      if (itemIndex < fullSuggestions.length) {
        const currentItem = fullSuggestions[itemIndex];
        if (charIndex < currentItem.length) {
          const newSuggestions = [...fullSuggestions.slice(0, itemIndex), currentItem.slice(0, charIndex + 1)];
          setDisplayedSuggestions(newSuggestions);
          charIndex++;
        } else {
          charIndex = 0;
          itemIndex++;
          setDisplayedSuggestions([...fullSuggestions.slice(0, itemIndex)]);
        }
      } else {
        clearInterval(interval);
        setCurrentSection('tips');
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentSection, fullSuggestions]);

  // Typewriter effect for tips (one item at a time)
  useEffect(() => {
    if (currentSection !== 'tips') return;

    let itemIndex = 0;
    let charIndex = 0;
    const interval = setInterval(() => {
      if (itemIndex < fullTips.length) {
        const currentItem = fullTips[itemIndex];
        if (charIndex < currentItem.length) {
          const newTips = [...fullTips.slice(0, itemIndex), currentItem.slice(0, charIndex + 1)];
          setDisplayedTips(newTips);
          charIndex++;
        } else {
          charIndex = 0;
          itemIndex++;
          setDisplayedTips([...fullTips.slice(0, itemIndex)]);
        }
      } else {
        clearInterval(interval);
        setCurrentSection('done');
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentSection, fullTips]);

  return (
    <div className="mt-6 flex items-start gap-3">
      {/* Inline CSS for blinking cursor */}
      <style>{cursorStyle}</style>

      {/* AI Icon */}
      <FaRobot className="text-3xl text-custom-primary mt-1" />

      {/* Chat Bubble */}
      <div className="flex-1 bg-custom-half-gray p-4 rounded-lg border border-gray-600 relative">
        {/* Chat Bubble Tail */}
        <div className="absolute left-0 top-4 -ml-2 w-4 h-4 bg-bg-custom-half-gray border-l border-b border-gray-600 transform rotate-45"></div>

        {/* Summary */}
        <h4 className="font-semibold text-white mb-2">Quibly Feedback</h4>
        <p className={`text-gray-200 mb-4 ${currentSection === 'summary' ? 'blinking-cursor' : ''}`}>
          {displayedSummary}
        </p>

        {/* Main Weak Point */}
        {currentSection !== 'summary' && (
          <div className="mb-4">
            <h5 className="font-semibold text-white">Main Weak Point</h5>
            <p className={`text-gray-300 ${currentSection === 'mainWeakPoint' ? 'blinking-cursor' : ''}`}>
              {displayedMainWeakPoint}
            </p>
          </div>
        )}

        {/* Suggestions */}
        {currentSection !== 'summary' && currentSection !== 'mainWeakPoint' && fullSuggestions.length > 0 && (
          <div className="mb-4">
            <h5 className="font-semibold text-white">Suggestions</h5>
            <ul className="list-disc list-inside text-gray-300">
              {displayedSuggestions.map((suggestionItem, index) => (
                <li
                  key={index}
                  className={index === displayedSuggestions.length - 1 && currentSection === 'suggestions' ? 'blinking-cursor' : ''}
                >
                  {suggestionItem}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tips */}
        {currentSection === 'tips' || currentSection === 'done' && fullTips.length > 0 && (
          <div>
            <h5 className="font-semibold text-white">Tips</h5>
            <ul className="list-disc list-inside text-gray-300">
              {displayedTips.map((tip, index) => (
                <li
                  key={index}
                  className={index === displayedTips.length - 1 && currentSection === 'tips' ? 'blinking-cursor' : ''}
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