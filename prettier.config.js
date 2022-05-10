module.exports = {
  overrides: [
    {
      files: '*.js',
      options: {
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxSingleQuote: false,
        bracketSameLine: false,
        endOfLine: 'auto',
        printWidth: 128,
      },
    },
    {
      files: '*.sol',
      options: {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
        explicitTypes: 'always',
      },
    },
  ],
};
