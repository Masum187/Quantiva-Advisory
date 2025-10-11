const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add rule for .mdx and .md files
      webpackConfig.module.rules.push({
        test: /\.mdx?$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                require.resolve('@babel/preset-env'),
                [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
              ],
            },
          },
          {
            loader: require.resolve('@mdx-js/loader'),
            options: {
              providerImportSource: '@mdx-js/react',
            },
          },
        ],
      });

      return webpackConfig;
    },
  },
};


