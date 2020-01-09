module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyKBWbd9yBAhZWU1`, // may instead specify via env, see below
        tables: [
          {
            baseId: `appV1MrfO94pzja85`,
            tableName: `Showcase`,
          }
        ]
      }
    }
  ]
}