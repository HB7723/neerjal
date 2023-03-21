import React from "react";

import "./Footer.css";

import logo from "../../assets/logo__footer.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <section className="container">
          <div className="footer">
            <div className="footer-left">
              <img src={logo} alt="Logo" />
              <p>
                <strong>Head Quarters:</strong> 62/63, The Pavilion, church
                street,
                <br /> Bangalore 560001
              </p>
            </div>
            <div footer-right>
              <table>
                <tr>
                  <td>Terms of service</td>
                  <td>Work with us</td>
                  <td>Blogs</td>
                </tr>
                <tr>
                  <td>Privacy policy</td>
                  <td>FAQs</td>
                  <td>Contact us</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="tnc">
            © {new Date().getFullYear()} Neerjal. All rights reserved.
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
