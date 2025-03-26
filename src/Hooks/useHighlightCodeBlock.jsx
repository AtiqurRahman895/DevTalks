import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/a11y-dark.css';

// Use the common language set from lowlight (matches TextEditor)
import { common } from 'lowlight';
Object.keys(common).forEach((lang) => {
  hljs.registerLanguage(lang, common[lang]);
});

const useHighlightCodeBlock = (showPreview,highlightRef) => {
    useEffect(() => {
        if (showPreview && highlightRef?.current) {
          const codeBlocks = highlightRef.current.querySelectorAll('pre code');
          codeBlocks.forEach((block) => {
            const text = block.textContent;
            const result = hljs.highlightAuto(text); // Auto-detect language
            block.innerHTML = result.value; // Apply highlighted HTML
            block.classList.add('hljs', `language-${result.language || 'plaintext'}`); // Add classes
          });
        }
    }, [showPreview, highlightRef]);
};

export default useHighlightCodeBlock;