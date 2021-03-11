import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import styled from "styled-components"

const Navigationbar = () => {
  return (
    <Wrapper>
      <Container>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: var(--clr-black);
  width: 100%;

  .navbar-dark .navbar-nav .nav-link {
    color: var(--clr-grey-8);
  }
`

export default Navigationbar
