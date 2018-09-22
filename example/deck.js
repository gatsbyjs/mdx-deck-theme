import intro from './topics/intro.mdx'
import gatsbyOverview from './topics/gatsby-overview.mdx'
import newFeatures from './topics/new-features.mdx'
import demo from './topics/demo.mdx'
import qAndA from './topics/q-and-a.mdx'
import conclusion from './topics/conclusion.mdx'

// import './fonts/Webfonts/futurapt_book_macroman/stylesheet.css'
// import './fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css'
// import './fonts/Webfonts/futurapt_demi_macroman/stylesheet.css'
// import './fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css'
// import 'typeface-space-mono'
// import 'typeface-spectral'

export { default as theme } from 'gatsby-mdx-theme'
export default [
  ...intro,
  ...gatsbyOverview,
  ...newFeatures,
  ...demo,
  ...qAndA,
  ...conclusion
]
