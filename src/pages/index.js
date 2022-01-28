import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>index page</p>
      <StaticImage alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair" src="../images/clifford.jpg"/>
    </Layout>
  )
}

export default IndexPage