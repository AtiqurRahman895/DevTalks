import { Extension } from '@tiptap/core';

const CodeBlockIndentExtension = Extension.create({
  name: 'CodeBlockIndentExtension',

  addKeyboardShortcuts() {
    return {
      // Tab: Indent current line
      Tab: ({ editor }) => {
        if (editor.isActive('codeBlock')) {
          editor.commands.insertContent('\t');
          return true;
        }
        return false;
      },
      // Shift+Tab: Outdent current line
      'Shift-Tab': ({ editor }) => {
        if (editor.isActive('codeBlock')) {
          const { state, commands } = editor;
          const { $from } = state.selection;
          const start = $from.start(); // Start of current line
          const textBefore = state.doc.textBetween(start, $from.pos, '\n'); // Text from line start to cursor

          if (textBefore.endsWith('\t')) {
            commands.deleteRange({
              from: $from.pos - 1,
              to: $from.pos,
            });
          } else if (textBefore.endsWith('    ')) {
            commands.deleteRange({
              from: $from.pos - 4,
              to: $from.pos,
            });
          } else if (textBefore.endsWith('  ')) {
            commands.deleteRange({
              from: $from.pos - 2,
              to: $from.pos,
            });
          }
          return true;
        }
        return false;
      },
    };
  },
});

export default CodeBlockIndentExtension;