import React, { useContext } from "react"
import { Container, Navbar, Nav, Row, Col, Media } from "react-bootstrap"
import styled from "styled-components"
import { FaPhoneAlt } from "react-icons/fa"

import { GatsbyContext } from "../context/context"
import NavLink from "./NavLink"

const Navigationbar = () => {
  const { links } = useContext(GatsbyContext)

  return (
    <>
      <Wrapper>
        <div className="header-top">
          <Container>
            <Row>
              <Col sm className="text-center">
                <a href="tel:802-524-9546" target="_blank">
                  <FaPhoneAlt /> 802-524-9546
                </a>
                <span>
                  No fee for initial consultation on personal injury and
                  wrongful death claims, go to extension 15
                </span>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="header-upper">
          <Container>
            <Row>
              <Col>
                <Media>
                  <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="holder.js/64x64"
                    alt="Generic placeholder"
                  />
                </Media>
              </Col>
              <Col sm>1 of 1</Col>
              <Col sm>1 of 1</Col>
              <Col sm>1 of 1</Col>
            </Row>
          </Container>
        </div>
        <div className="header-lower">
          <Container>
            <Navbar collapseOnSelect expand="lg" variant="dark">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="ml-auto"
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  {links &&
                    links.map((item, index) => {
                      return <NavLink item={item} key={index} />
                    })}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  .header-lower {
    background: var(--clr-black);
    width: 100%;
  }

  .header-top {
    background: var(--clr-grey-8);
  }

  .navbar-dark .navbar-nav .nav-link {
    color: var(--clr-grey-8);
  }
`

const LinkUL = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;

  li {
    position: static;
  }
`

export default Navigationbar

// export const query = graphql`
//   {
//     wpgraphql {
//       menu(id: "dGVybToxNA==") {
//         menuItems {
//           nodes {
//             id
//             url
//             label
//           }
//         }
//       }
//     }
//   }
// `
