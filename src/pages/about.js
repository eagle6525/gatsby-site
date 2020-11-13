import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" />
    <h1>Hi from the about page</h1>
    <p>
      Flannel next level pork belly, venmo pickled slow-carb yuccie blog cray
      try-hard man bun post-ironic art party synth lomo. Taxidermy blog YOLO
      salvia food truck typewriter vape mlkshk master cleanse. Listicle meh
      schlitz blue bottle direct trade, godard intelligentsia you probably
      haven't heard of them. Selvage gochujang enamel pin, bespoke four dollar
      toast kale chips church-key messenger bag salvia celiac. Pabst succulents
      schlitz cloud bread.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
