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
              // CRA hat Babel schon konfiguriert; keine extra Plugins nötig
            }
          },
          {
            loader: require.resolve('@mdx-js/loader'),
            options: {
              // hier später optional remark/rehype-Plugins einbauen
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

