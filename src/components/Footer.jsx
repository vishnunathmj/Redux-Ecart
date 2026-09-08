import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEnvelope, faPhone, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <footer className="footer bg-primary text-light pt-3">

      <div className="container">
        <div className="footer-row d-flex flex-wrap">

          {/* Brand */}
          <div className="footer-brand col-lg-5 col-md-6">
            <h3>
              <FontAwesomeIcon icon={faTruck} className="truck-icon" />
              E Cart
            </h3>

            <p>
              Designed and built with all the love in the world by the
              <br />
              Luminar team with the help of our contributors.
            </p>

            <p>Code licensed Luminar, docs CC BY 3.0.</p>
            <p>Currently v5.3.2.</p>
          </div>

          {/* Links */}
          <div className="footer-links col-lg-2 col-md-3 col-sm-6">
            <h4>Links</h4>

            <a href="/">Home</a><br />
            <a href="/">Wishlist</a><br />
            <a href="/">Cart</a><br />
          </div>

          {/* Guides */}
          <div className="footer-links col-lg-2 col-md-3 col-sm-6">
            <h4>Guides</h4>

            <a href="/">Bootstrap</a><br />
            <a href="/">Redux</a><br />
            <a href="/">React</a><br />
          </div>

          {/* Contact */}
          <div className="footer-contact col-lg-3 col-md-6">
            <h4>Contact Us</h4>

            <form className="subscribe-form d-flex">
              <input
                type="email"
                placeholder="Email Here!!"
                className="form-control"
              />

              <button type="submit" className="btn">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>

            <div className="social-icons d-flex">
              <a href="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a href="/">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="/">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>

              <a href="/">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer