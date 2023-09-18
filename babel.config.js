module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          app: './app',
          '@assets': './app/assets',
          '@components': './app/components',
          '@screens': './app/screens',
          '@services': './app/services',
          '@utils': './app/utils',
        },
      },
    ],
  ],
};
