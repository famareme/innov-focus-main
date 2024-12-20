module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.(mp4)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/videos/[name].[hash].[ext]',
          outputPath: 'dist/assets/videos/',
          limit: 10000000000, // Increase the limit to 10GB (example)
        }
      }
    ]
  });

  return config;
};
