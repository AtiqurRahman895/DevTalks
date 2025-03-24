import { EditorContent, EditorProvider, generateHTML, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';
import 'highlight.js/styles/a11y-dark.css'; // Import your preferred theme
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight,common } from 'lowlight'; // Correct import
import CodeBlockIndentExtension from '../../extentions/CodeBlockIndentExtension';
import Indent from '@weiruo/tiptap-extension-indent';

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

        {[4, 5, 6].map(level => (
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

// Create lowlight instance with common languages for auto-detection
const lowlight = createLowlight(common);

// Extensions setup
const extensions = [
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
    codeBlock: false, // Disable default codeBlock
  }),
  TextStyle.configure({ types: [ListItem.name] }),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  Placeholder.configure({
    placeholder: 'Type here...',
    showOnlyWhenEditable: true,
  }),
  CodeBlockLowlight.configure({
    lowlight,
    HTMLAttributes: {
      class: 'code-block',
    },
  }),
  Indent.configure({
    types: ['paragraph', 'listItem', 'codeBlock', 'heading'],
    minLevel: 0,
    maxLevel: 8,
  }),
  CodeBlockIndentExtension,
];
  
  // Initial content for the editor
  
  const TextEditor = ({label, editorContents , setEditorContents }) => {

    const handleUpdate=(editor)=>{
        let content = editor.getJSON();
        const mainContent = generateHTML(content, extensions);
        setEditorContents((prev) => ({
            ...prev,
            [label]: mainContent,
        }));
    }

    return (
      <div className="bg-white text-black p-4 pt-0 rounded-md max-h-96 overflow-y-auto overflow-x-hidden relative !z-10">
        <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={editorContents}
            onUpdate={ ({editor})=> handleUpdate(editor) }
        >
          <EditorContent className="tiptap"/>
        </EditorProvider>
      </div>
    );
  };
  
  export default TextEditor;

