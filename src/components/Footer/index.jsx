import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import logo from "../../img/logo.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img className="footer__img" src={logo} />

        <div className="footer__contacto">
          <p className="footer__contacto__tituloFooter">CONTACTANOS</p>

          <div className="footer__contacto__redes">
            <IconButton sx={{ color: "#0FF21E" }}>
              <WhatsAppIcon />
            </IconButton>
            <a
              href="https://web.whatsapp.com/"
              className="footer__contacto__redes__link"
            >
              <p className="footer__contacto__redes__texto">223 570 8665</p>
            </a>
          </div>

          <div className="footer__contacto__redes">
            <IconButton sx={{ color: "#0FF21E" }}>
              <InstagramIcon />
            </IconButton>
            <a
              href="https://www.instagram.com/_escabio24.7_/?next=%2F"
              className="footer__contacto__redes__link"
            >
              <p className="footer__contacto__redes__texto">_escabio24.7_</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
