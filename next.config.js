const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
      "/index": { page: "/index" },
      "/personal": { page: "/personal" },
      "/professional": { page: "/professional" },
    }
  },
  assetPrefix: !debug ? '/melanievillela.github.io' : '',
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  }
}