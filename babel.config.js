module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "Components": ["./src/components/index"],
          "Screens": ["./src/screens/index"],
          "Styles": ["./src/styles/index"],
          "Assets": ["./src/assets/*"]
        }
      }
    ]
  ]
};
