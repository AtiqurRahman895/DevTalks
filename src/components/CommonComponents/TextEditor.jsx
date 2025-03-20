import { EditorContent, EditorProvider, generateHTML, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css'; // Import your preferred theme


// Menu bar with buttons
const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="control-group py-4 sticky top-0 bg-white z-20">
      <div className="button-group flex flex-wrap gap-2 justify-start">
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`btn btn-xs border-0 ${editor.isActive('paragraph') ? 'bg-custom-primary hover:bg-custom-primary !text-white' : 'bg-custom-gray/45 hover:bg-custom-gray/45 text-black'}`}
        >
          Paragraph
        </button>

        <button
            onClick={() => {
                const currentColor = editor.getAttributes('textStyle').color;
                if (currentColor === '#352cd4') {
                    editor.chain().focus().unsetColor().run(); // Remove color
                } else {
                    editor.chain().focus().setColor('#352cd4').run(); // Set color
                }
                }}
            className={`btn btn-xs border-0 ${editor.isActive('textStyle', { color: '#352cd4' }) ? 'bg-custom-primary hover:bg-custom-primary !text-white' : 'bg-custom-gray/45 hover:bg-custom-gray/45 text-black'}`}
        >
          Color
        </button>

        {[4, 5].map(level => (
          <button
            key={level}
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            className={`btn btn-xs border-0 ${editor.isActive('heading', { level }) ? 'bg-custom-primary hover:bg-custom-primary !text-white' : 'bg-custom-gray/45 hover:bg-custom-gray/45 text-black'}`}
          >
            H{level}
          </button>
        ))}

        {[
          { command: 'toggleBold', label: 'Bold' },
          { command: 'toggleItalic', label: 'Italic' },
          { command: 'toggleStrike', label: 'Strike' },
          { command: 'toggleBulletList', label: 'Bullet List' },
          { command: 'toggleOrderedList', label: 'Ordered List' },
          { command: 'toggleCode', label: 'Code' },
          { command: 'toggleCodeBlock', label: 'Code Block' },
          { command: 'toggleBlockquote', label: 'Blockquote' }
        ].map(({ command, label }) => (
          <button
            key={command}
            onClick={() => editor.chain().focus()[command]().run()}
            disabled={!editor.can().chain().focus()[command]().run()}
            className={`btn btn-xs border-0 disabled:text-opacity-100 ${editor.isActive(command.replace('toggle', '').toLowerCase()) ? 'bg-custom-primary hover:bg-custom-primary !text-white' : 'bg-custom-gray/45 hover:bg-custom-gray/45 text-black'}`}
          >
            {label}
          </button>
        ))}

        <button 
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="btn btn-xs border-0 hover:!bg-custom-primary !bg-custom-gray/45 hover:!text-white !text-black"
        >
          Horizontal Rule
        </button>

        <button 
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className="btn btn-xs border-0 hover:!bg-custom-primary !bg-custom-gray/45 hover:!text-white !text-black"
        >
          Hard Break
        </button>

        {[
          { command: 'unsetAllMarks', label: 'Clear Marks' },
          { command: 'clearNodes', label: 'Clear Nodes' },
          { command: 'undo', label: 'Undo' },
          { command: 'redo', label: 'Redo' }
        ].map(({ command, label }) => (
          <button
            key={command}
            onClick={() => editor.chain().focus()[command]().run()}
            disabled={!editor.can().chain().focus()[command]().run()}
            className={`btn btn-xs border-0 hover:!bg-custom-primary !bg-custom-gray/45 hover:!text-white !text-black ${!editor.can()[command]() ? "!cursor-not-allowed opacity-40" : "!cursor-pointer"}`}
          >
            {label}
          </button>
        ))}

      </div>
      
    </div>
  );
};

// Extensions setup
const extensions = [
    StarterKit.configure({
      bulletList: { keepMarks: true, keepAttributes: false },
      orderedList: { keepMarks: true, keepAttributes: false },
    }),
    TextStyle.configure({ types: [ListItem.name] }),
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    Placeholder.configure({
        placeholder: 'Type your question...',
        showOnlyWhenEditable: true, 
      }),
    
  ];
  
  // Initial content for the editor
  
  const TextEditor = ({label, setEditorContents }) => {

    const handleUpdate=(editor)=>{
        let content = editor.getJSON();
        let mainContent= generateHTML(content, [StarterKit]);
        
        setEditorContents((prev) => ({
            ...prev,
            [label]: mainContent,
        }));

        const codeBlocks = editor.view.dom.querySelectorAll('pre code');
        codeBlocks.forEach((block) => {
          hljs.highlightElement(block);
        })
    }

    return (
      <div className="bg-black dark:bg-white text-white dark:text-black p-4 pt-0 rounded-md max-h-80 overflow-y-auto overflow-x-hidden relative">
        <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content=""
            onUpdate={ ({editor})=> handleUpdate(editor) }
        >
          <EditorContent className="tiptap"/>
        </EditorProvider>
      </div>
    );
  };
  
  export default TextEditor;

