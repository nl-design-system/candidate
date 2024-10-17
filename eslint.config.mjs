import globals from 'globals';
import json from '@eslint/json';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';

export default tseslint.config(
  {
    ignores: ['**/dist/', '**/node_modules/'],
  },
  {
    languageOptions: {
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      globals: { ...globals.node },
    },
    ...js.configs.recommended,
  },
  {
    files: ['**/*.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
  {
    files: ['**/tsconfig.json', '**/tsconfig.*.json'],
    language: 'json/jsonc',
    ...json.configs.recommended,
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.tsx'],
    ...eslintPluginReact.configs.flat.recommended,
    ...eslintPluginReact.configs.flat['jsx-runtime'],
    ...eslintPluginJsxA11y.flatConfigs.strict,
  },
  {
    files: ['**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  eslintConfigPrettier,
);
