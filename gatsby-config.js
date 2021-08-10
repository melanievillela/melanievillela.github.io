module.exports = {
  siteMetadata: {
    siteUrl: "https://melanievillela.github.io/",
    title: "Melanie Villela Portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Pacifico", "Lato:wght@300;700", "Cormorant Garamond:ital,wght@1,300,600"]
        }
      }
    },
    {
      resolve: "gatsby-plugin-styled-components",
    },
  ],
};
