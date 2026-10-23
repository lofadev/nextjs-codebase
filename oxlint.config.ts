import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['import', 'typescript', 'promise', 'react', 'nextjs'],
  jsPlugins: ['eslint-plugin-tailwind-canonical-classes'],
  ignorePatterns: ['.next/**', 'next-env.d.ts'],
  rules: {
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        fix: {
          imports: 'safe-fix',
        },
      },
    ],
    'import/no-duplicates': 'warn',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/export': 'off',
    'react/rules-of-hooks': 'error',
    'react/exhaustive-deps': 'off',
    'react/jsx-key': 'error',
    'promise/param-names': 'error',
    'nextjs/no-sync-scripts': 'error',
    'tailwind-canonical-classes/tailwind-canonical-classes': [
      'warn',
      {
        cssPath: './src/app/globals.css',
      },
    ],

    // ! TO COMPILE SHADCN EXAMPLES, PLEASE REMOVE AS NEEDED
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': 'off',
    'no-unused-expressions': 'off',
    'typescript/no-explicit-any': 'off',
    'typescript/no-empty-object-type': 'off',
    'typescript/ban-ts-comment': 'off',
    'import/no-named-as-default': 'off',
    'import/named': 'off',
    'import/no-named-as-default-member': 'off',
    'nextjs/no-img-element': 'off',
    'nextjs/no-html-link-for-pages': 'off',
  },
});
