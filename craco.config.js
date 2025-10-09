module.exports = {
  webpack: {
    configure: (config) => {
      // MDX-Lader hinzufügen
      config.module.rules.push({
        test: /\.mdx?$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                require.resolve('@babel/preset-react'),
                require.resolve('@babel/preset-env')
              ]
            }
          },
          {
            loader: require.resolve('@mdx-js/loader'),
            options: {
              providerImportSource: '@mdx-js/react'
            }
          }
        ]
      });
      
      // .md/.mdx als resolvable Extensions
      if (!config.resolve.extensions.includes('.mdx')) {
        config.resolve.extensions.push('.mdx');
      }
      if (!config.resolve.extensions.includes('.md')) {
        config.resolve.extensions.push('.md');
      }
      
      return config;
    }
  }
};

