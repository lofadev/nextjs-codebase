import { defineConfig } from 'oxfmt';

export default defineConfig({
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  sortTailwindcss: {
    stylesheet: './src/app/globals.css',
  },
  sortImports: {
    ignoreCase: false,
    newlinesBetween: true,
    internalPattern: ['@/'],
    customGroups: [
      {
        groupName: 'react',
        elementNamePattern: ['react'],
      },
      {
        groupName: 'next',
        elementNamePattern: ['next', 'next/**'],
      },
    ],
    groups: ['react', 'next', 'internal', 'external', ['parent', 'sibling', 'index'], 'unknown'],
  },
});
