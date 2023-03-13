import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../Styles/footer.css";
import { IconButton } from "@mui/material";
import logo from "../../img/logo.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img className="logo__img" src={logo} />
        </div>

        <div className="contact">
          <p className="contact__title">Contactanos</p>
          <div className="contact__redes">
            <IconButton sx={{ color: "#0FF21E" }}>
              <WhatsAppIcon />
            </IconButton>
            <a href="https://web.whatsapp.com/" className="footer__link">
              <p className="footer__text">223 570 8665</p>
            </a>
          </div>

          <div className="contact__redes">
            <IconButton sx={{ color: "#0FF21E" }}>
              <InstagramIcon />
            </IconButton>
            <a
              href="https://www.instagram.com/_escabio24.7_/?next=%2F"
              className="footer__link"
            >
              <p className="footer__text">_escabio24.7_</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
