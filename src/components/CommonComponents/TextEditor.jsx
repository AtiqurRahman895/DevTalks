
import {
  EditorContent,
  EditorProvider,
  generateHTML,
  useCurrentEditor,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';
import 'highlight.js/styles/a11y-dark.css';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight, common } from 'lowlight';
import CodeBlockIndentExtension from '../../extentions/CodeBlockIndentExtension';
import Indent from '@weiruo/tiptap-extension-indent';

import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineCode,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiOutlineFontColors,
  AiOutlineClear,
} from 'react-icons/ai';
import { BsCodeSlash, BsBlockquoteLeft, BsHr } from 'react-icons/bs';
import { LuHeading1, LuHeading2, LuHeading3 } from 'react-icons/lu';
import { RiParagraph } from 'react-icons/ri';
import { MdFormatClear, MdFormatColorText, MdKeyboardReturn } from 'react-icons/md';
import { TbArrowBackUp, TbArrowForwardUp } from 'react-icons/tb';

const lowlight = createLowlight(common);

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

        <button
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
          className={`btn btn-xs border-0 hover:!bg-custom-primary !bg-custom-gray/45 hover:!text-white !text-black`}
        >
          Clear Formatting
        </button>

        {[
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

// Bubble menu bar with buttons
const BubbleMenuBar = () => {
  const { editor } = useCurrentEditor();
  if (!editor) return null;

  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} className="bg-white p-2 rounded shadow z-50 flex flex-wrap gap-2 max-w-xl">
      <button
        title="Paragraph"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`btn btn-xs text-[14px] border-0 ${editor.isActive('paragraph') && 'bg-custom-primary hover:bg-custom-primary'}`}
      >
        <RiParagraph />
      </button>

      {[4, 5, 6].map(level => {
        const headings = {
          4: <LuHeading1 />,
          5: <LuHeading2 />,
          6: <LuHeading3 />,
        };
        return (
          <button
            key={level}
            title={`Heading ${level}`}
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            className={`btn btn-xs text-[14px] border-0 ${editor.isActive('heading', { level }) && 'bg-custom-primary hover:bg-custom-primary'}`}
          >
            {headings[level]}
          </button>
        );
      })}

      <button
        title="Highlight Text"
        onClick={() => {
          const currentColor = editor.getAttributes('textStyle').color;
          if (currentColor === '#352cd4') {
            editor.chain().focus().unsetColor().run();
          } else {
            editor.chain().focus().setColor('#352cd4').run();
          }
        }}
        className={`btn btn-xs text-[14px] border-0 ${editor.isActive('textStyle', { color: '#352cd4' }) && 'bg-custom-primary hover:bg-custom-primary'}`}
      >
        <MdFormatColorText />
      </button>

      {[ 
        { command: 'toggleBold', icon: <AiOutlineBold />, title: 'Bold' },
        { command: 'toggleItalic', icon: <AiOutlineItalic />, title: 'Italic' },
        { command: 'toggleStrike', icon: <AiOutlineStrikethrough />, title: 'Strike' },
        { command: 'toggleCode', icon: <AiOutlineCode />, title: 'Inline Code' },
        { command: 'toggleBulletList', icon: <AiOutlineUnorderedList />, title: 'Bullet List' },
        { command: 'toggleOrderedList', icon: <AiOutlineOrderedList />, title: 'Ordered List' },
        { command: 'toggleCodeBlock', icon: <BsCodeSlash />, title: 'Code Block' },
        { command: 'toggleBlockquote', icon: <BsBlockquoteLeft />, title: 'Blockquote' },
      ].map(({ command, icon, title }) => (
        <button
          key={command}
          title={title}
          onClick={() => editor.chain().focus()[command]().run()}
          disabled={!editor.can().chain().focus()[command]().run()}
          className={`btn btn-xs text-[14px] border-0 ${editor.isActive(command.replace('toggle', '').toLowerCase()) && 'bg-custom-primary hover:bg-custom-primary'} ${!editor.can()[command]() && '!text-black opacity-55 !cursor-not-allowed'}`}
        >
          {icon}
        </button>
      ))}

      <button
        title="Horizontal Rule"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="btn btn-xs text-[14px] border-0 hover:bg-custom-primary"
      >
        <BsHr />
      </button>

      <button
        title="Hard Break"
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="btn btn-xs text-[14px] border-0 hover:bg-custom-primary"
      >
        <MdKeyboardReturn />
      </button>

      <button
        title="Clear Formatting"
        onClick={() =>
          editor.chain().focus().unsetAllMarks().clearNodes().run()
        }
        className="btn btn-xs text-[14px] border-0 hover:bg-custom-primary"
      >
        <MdFormatClear />
      </button>

      {[
        { command: 'undo', icon: <TbArrowBackUp />, title: 'Undo' },
        { command: 'redo', icon: <TbArrowForwardUp />, title: 'Redo' },
      ].map(({ command, icon, title }) => (
        <button
          key={command}
          title={title}
          onClick={() => editor.chain().focus()[command]().run()}
          disabled={!editor.can().chain().focus()[command]().run()}
          className={`btn btn-xs text-[14px] border-0 hover:bg-custom-primary ${!editor.can()[command]() && '!text-black opacity-55 !cursor-not-allowed'}`}
        >
          {icon}
        </button>
      ))}
    </BubbleMenu>
  );
};

const FloatingMenuBar = () => {
  const { editor } = useCurrentEditor();
  if (!editor) return null;

  return (
    <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }} className="bg-white p-2 rounded shadow z-50 flex flex-wrap gap-2 max-w-xl">
      <button
        title="Paragraph"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`btn btn-xs text-[14px] border-0 ${editor.isActive('paragraph') && 'bg-custom-primary hover:bg-custom-primary'}`}
      >
        <RiParagraph />
      </button>

      {[4, 5, 6].map(level => {
        const headings = {
          4: <LuHeading1 />,
          5: <LuHeading2 />,
          6: <LuHeading3 />,
        };
        return (
          <button
            key={level}
            title={`Heading ${level}`}
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            className={`btn btn-xs text-[14px] border-0 ${editor.isActive('heading', { level }) && 'bg-custom-primary hover:bg-custom-primary'}`}
          >
            {headings[level]}
          </button>
        );
      })}

      <button
        title="Highlight Text"
        onClick={() => {
          const currentColor = editor.getAttributes('textStyle').color;
          if (currentColor === '#352cd4') {
            editor.chain().focus().unsetColor().run();
          } else {
            editor.chain().focus().setColor('#352cd4').run();
          }
        }}
        className={`btn btn-xs text-[14px] border-0 ${editor.isActive('textStyle', { color: '#352cd4' }) && 'bg-custom-primary hover:bg-custom-primary'}`}
      >
        <MdFormatColorText />
      </button>

      {[ 
        { command: 'toggleBold', icon: <AiOutlineBold />, title: 'Bold' },
        { command: 'toggleItalic', icon: <AiOutlineItalic />, title: 'Italic' },
        { command: 'toggleStrike', icon: <AiOutlineStrikethrough />, title: 'Strike' },
        { command: 'toggleCode', icon: <AiOutlineCode />, title: 'Inline Code' },
        { command: 'toggleBulletList', icon: <AiOutlineUnorderedList />, title: 'Bullet List' },
        { command: 'toggleOrderedList', icon: <AiOutlineOrderedList />, title: 'Ordered List' },
        { command: 'toggleCodeBlock', icon: <BsCodeSlash />, title: 'Code Block' },
        { command: 'toggleBlockquote', icon: <BsBlockquoteLeft />, title: 'Blockquote' },
      ].map(({ command, icon, title }) => (
        <button
          key={command}
          title={title}
          onClick={() => editor.chain().focus()[command]().run()}
          disabled={!editor.can().chain().focus()[command]().run()}
          className={`btn btn-xs text-[14px] border-0 ${editor.isActive(command.replace('toggle', '').toLowerCase()) && 'bg-custom-primary hover:bg-custom-primary'} ${!editor.can()[command]() && '!text-black opacity-55 !cursor-not-allowed'}`}
        >
          {icon}
        </button>
      ))}

      <button
        title="Horizontal Rule"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="btn btn-xs text-[14px] border-0 hover:bg-custom-primary"
      >
        <BsHr />
      </button>

      <button
        title="Hard Break"
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="btn btn-xs text-[14px] border-0 hover:bg-custom-primary"
      >
        <MdKeyboardReturn />
      </button>

      <button
        title="Clear Formatting"
        onClick={() =>
          editor.chain().focus().unsetAllMarks().clearNodes().run()
        }
        className="btn btn-xs text-[14px] border-0 hover:bg-custom-primary"
      >
        <MdFormatClear />
      </button>

      {[
        { command: 'undo', icon: <TbArrowBackUp />, title: 'Undo' },
        { command: 'redo', icon: <TbArrowForwardUp />, title: 'Redo' },
      ].map(({ command, icon, title }) => (
        <button
          key={command}
          title={title}
          onClick={() => editor.chain().focus()[command]().run()}
          disabled={!editor.can().chain().focus()[command]().run()}
          className={`btn btn-xs text-[14px] border-0 hover:bg-custom-primary ${!editor.can()[command]() && '!text-black opacity-55 !cursor-not-allowed'}`}
        >
          {icon}
        </button>
      ))}
    </FloatingMenu>
  );
};

const extensions = [
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
    codeBlock: false,
  }),
  TextStyle.configure({ types: [ListItem.name] }),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  Placeholder.configure({
    placeholder: 'Type here...',
    showOnlyWhenEditable: true,
  }),
  CodeBlockLowlight.configure({
    lowlight,
    HTMLAttributes: { class: 'code-block' },
  }),
  Indent.configure({
    types: ['paragraph', 'listItem', 'codeBlock', 'heading'],
    minLevel: 0,
    maxLevel: 8,
  }),
  CodeBlockIndentExtension,
];

const TextEditor = ({ label, editorContents, setEditorContents }) => {

  const handleUpdate = (editor) => {
    const content = editor.getJSON();
    const mainContent = generateHTML(content, extensions);
    setEditorContents((prev) => ({
      ...prev,
      [label]: mainContent,
    }));
  };

  return (
    <div className="bg-white text-black p-4 pt-0 rounded-md relative z-10">
      <EditorProvider
        extensions={extensions}
        content={editorContents}
        onUpdate={({ editor }) => handleUpdate(editor)}
        slotBefore={<MenuBar />}
        slotAfter={<BubbleMenuBar />}
      >
        <EditorContent className="tiptap"/>
        {/* <FloatingMenuBar/> */}
      </EditorProvider>
    </div>
  );
};

export default TextEditor;
