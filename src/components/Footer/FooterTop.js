import React from "react"
import { Link } from "gatsby"
import { BsFillEnvelopeFill } from "react-icons/bs"
import { IoCall } from "react-icons/io5"
// import styled from "styled-components"
import { Row, Col } from "react-bootstrap"

const FooterTop = () => {
  return (
    <section id="footer-top" className="footer-top u-margin-top-big u-padding">
      <Row>
        <Col md="auto">
          <article>
            <nav>
              <h3 className="heading-secondary--small u-margin-bottom-small">
                Company
              </h3>
              <nav className="navigation">
                <ul className="footer-top__links"></ul>
              </nav>
            </nav>
          </article>

          <article>
            <h3 className="heading-secondary--small u-margin-bottom-small">
              Contact
            </h3>
            <p className="footer-top__text">
              <a
                href="mailto:contact@vtwebdevelopment.com"
                target="_blank"
                className="footer-top__icon paragraph"
              >
                <BsFillEnvelopeFill /> contact@vtwebdevelopment.com
              </a>
            </p>
            <p className="footer-top__text">
              <a
                href="tel:802.391.9574"
                target="_blank"
                className="footer-top__icon"
              >
                <IoCall /> 802.391.9574
              </a>
            </p>
          </article>

          <article>
            <div className="footer-top__logo">
              <Link to="/"></Link>
            </div>

            <nav className="footer__socials"></nav>
          </article>
        </Col>
      </Row>
    </section>
  )
}

// const Wrapper = styled.section`

// `

export default FooterTop
