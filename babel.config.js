module.exports = function (api) {
  api.cache(true);
  return {
      presets: ['babel-preset-expo'],
      plugins: [
          ["module-resolver",
          {
              root: ["./src"],
              extensions: [

                '.ios.ts',
                '.android.ts',
                '.ts',
                '.ios.tsx',
                '.android.tsx',
                '.tsx',
                '.jsx',
                '.js',
                '.json',
              ],
              alias: {
                    '@': './src',
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@config': './src/config',
                    '@hooks': './src/hooks',
                    '@routes': './src/routes',
                    '@screens': './src/screens',
                    '@services': './src/services',
                    '@styles': './src/styles',
                    '@utils': './src/utils',
                    '@layout': './src/layout',
                    '@types': './src/types',
                    '@data': './src/data',
                    '@navigation': './src/navigation',
              },
          },
      ]
      ],
  };
};
