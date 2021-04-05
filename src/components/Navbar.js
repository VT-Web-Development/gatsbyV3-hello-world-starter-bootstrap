import React, { useContext } from "react"
import { Container, Navbar, Nav, Row, Col, Media } from "react-bootstrap"
import styled from "styled-components"
import { FaPhoneAlt } from "react-icons/fa"

import { GatsbyContext } from "../context/context"
import NavLink from "./NavLink"

const Navigationbar = () => {
  const { links, headerUpperLinks } = useContext(GatsbyContext)

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
              {headerUpperLinks.map((item, index) => {
                return (
                  <>
                    <Col sm>
                      <InfoBox>
                        <div className="header-upper__icon">{item.icon}</div>

                        <div className="header-upper__info">
                          <p className="header-upper__title">{item.title}</p>
                          <p>{item.info}</p>
                        </div>
                      </InfoBox>
                    </Col>
                  </>
                )
              })}
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
  .header-top {
    position: relative;
    padding: 10px 0px;
    color: #c9c9c9;
    font-size: 1rem;

    a {
      color: var(--clr-grey-3);

      :hover {
        color: var(--clr-primary-1);
        font-weight: 900;
        transition: var(--transition);
      }
    }

    span {
      color: var(--clr-red-dark);
      padding-left: 1rem;
    }
  }

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

const InfoBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  position: relative;
  padding: 25px 0;
  background: var(--clr-white);

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;

    .header-upper__info {
      text-align: center;
    }
  }

  .header-upper__title {
    font-size: 1.5rem;
  }

  .header-upper__icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }

  .header-upper__icon svg {
    font-size: 3rem;
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
