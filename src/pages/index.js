import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Space from "../components/space"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Space/>
  </Layout>
)

export default IndexPage
