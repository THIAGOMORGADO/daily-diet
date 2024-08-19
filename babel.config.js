module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      'module.exports', {
        'root': ['./src'],
        // Configuration or aliases for plugins
        'alias': {
          '@assets': './src/assets',
          '@components': './src/components',
          '@dtos': './src/dtos',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@theme': './src/theme',
          '@utils': './src/utils',      
        }
      }
    ]
  };
};
