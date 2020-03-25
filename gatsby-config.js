/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Olutunmbi`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://delog-w3layouts.netlify.com/`,
    home: {
      title: `Hi! I'm Olutunmbi Banto`,
      role: `Fullstack Javascript and UX Developer`,
      description: `Experienced in software engineering and development skills.
      A developer-entrepreneur building large scale applications, implementing visual and interactive elements, APIs integration and ensuring seamless user experience using industry standard semantics.\r\n
      Proficient in HTML5/CSS3, Angular, React/Redux, Ionic, Node JS, Jest, Cypress, AWS, Codeigniter, Laravel, Mobile apps development and Cloud services. :)`
    },
    /* W3Layouts domain verification key for contact forms https://my.w3layouts.com/Forms/ */
    w3l_dom_key: `5e609f7a2d23fCF_Domain_verify`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },
          {
            resolve: "gatsby-remark-emojis"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-161841924-1",
        head: true
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`
  ]
};
