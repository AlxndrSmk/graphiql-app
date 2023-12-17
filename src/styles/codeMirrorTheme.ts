import { EditorView } from '@uiw/react-codemirror';

export const codeMirrorTheme = EditorView.theme(
  {
    '&': {
      color: 'white',
    },
    '.cm-content': {
      caretColor: '#000000',
    },
    '&.cm-focused .cm-cursor': {
      borderLeftColor: '#0e9',
    },
    '&.cm-focused .cm-selectionBackground, ::selection': {},
    '.cm-gutters': {
      backgroundColor: 'rgb(33, 42, 59)',
      border: 'none',
      color: '#ddd',
    },
    '.cm-line': {
      fontFamily: 'monospace',
    },
  },
  { dark: true }
);
