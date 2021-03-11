import React from "react"

const FooterBottom = () => {
  return (
    <section className="footer-bottom">
      <article>
        <p className="footer-bottom__copy-rights">
          &copy; Company Name {new Date().getFullYear()} All rights reserved.
        </p>
      </article>
    </section>
  )
}

export default FooterBottom
