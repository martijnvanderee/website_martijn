const withPWA = require('next-pwa')


module.exports = withPWA({
  future: {
    webpack5: true,
  },
  pwa: { dest: 'public' },
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    return cfg;
  }
})



