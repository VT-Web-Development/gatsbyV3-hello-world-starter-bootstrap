import React from "react"
import { Row, Col } from "react-bootstrap"

import { Layout } from "../components"
// import SEO from "../components/seo"
// import Navbar from "../components/Navbar"

const HomePage = ({ page, data }) => {
  // const {
  //   allAirtable: { nodes: projects },
  // } = data
  // // console.log(data)
  return (
    <Layout>
      <>
        {/* <SEO
          title="Home"
          description="We’re a Vermont web development start-up studio. Get a competitive edge over your competitors with fast, secure, and SEO-friendly websites, and you’ll rank higher for crucial keywords."
        />
        {!page && (
          <>
            <div className="u-no-padding">
              <Navbar />
            </div>
            <Hero />
          </>
        )} */}
        <Row>
          <Col>Hello</Col>
        </Row>
      </>
    </Layout>
  )
}

export default HomePage
