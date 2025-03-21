const useWordCount = () => {
    // Function to convert HTML to plain text
    const htmlToPlainText = (html) => {
        if (!html) return "";
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || "";
    };

    // Function to count words and characters
    const countWordsAndChars = (text) => {
        const trimmedText = text.trim();
        const words = trimmedText.length > 0 ? trimmedText.split(/\s+/) : [];
        return {
            wordCount: words.length,
            charCount: trimmedText.length,
        };
    };
    return {htmlToPlainText, countWordsAndChars};
};

export default useWordCount;
