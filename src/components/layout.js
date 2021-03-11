/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"

import Footer from "./Footer/Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Main>
          {children}
          <Footer />
        </Main>
      </Container>
    </>
  )
}

const Main = styled.main`
  padding: 0.5rem 1rem;
`

export default Layout
