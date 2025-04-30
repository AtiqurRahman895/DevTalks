import { useState, useEffect } from 'react';

const useTypewriter = (text, typingSpeed = 4, shouldStart = false) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [shouldStart, text, typingSpeed]);

  return { displayedText, isComplete };
};

const useTypewriterList = (items, typingSpeed = 4, shouldStart = false) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!shouldStart || items.length === 0) return;

    let itemIndex = 0;
    let charIndex = 0;
    const interval = setInterval(() => {
      if (itemIndex < items.length) {
        const currentItem = items[itemIndex];
        if (charIndex < currentItem.length) {
          const newItems = [...items.slice(0, itemIndex), currentItem.slice(0, charIndex + 1)];
          setDisplayedItems(newItems);
          charIndex++;
        } else {
          charIndex = 0;
          itemIndex++;
          setDisplayedItems([...items.slice(0, itemIndex)]);
        }
      } else {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [shouldStart, items, typingSpeed]);

  return { displayedItems, isComplete };
};

export { useTypewriter, useTypewriterList };