import React, { useState } from "react";
import logo from "../../../img/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import MenuToggle from "./menuToggle";

const NavbarMobile = () => {
  const [openLink, openLinkToggle] = useState(false);

  const handleNavLinksToggle = () => {
    openLinkToggle(!openLink);
  };

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  return (
    <>
      <nav className="navbarMobile">
        <div className="navbarMobile__logo">
          <img src={logo}></img>
        </div>
        <AnimatePresence>
          {openLink && (
            <motion.div
              className="menu_container"
              variants={item}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit="exit"
            >
              <motion.a
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                }}
                href="#"
              >
                Inicio
              </motion.a>
              <motion.a
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.6,
                  },
                }}
                href="#"
              >
                Contacto
              </motion.a>
              <motion.a
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.4,
                  },
                }}
                href="#"
              >
                Ofertas
              </motion.a>
              <motion.a
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                }}
                href="#"
              >
                Productos
              </motion.a>
              <motion.a
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                }}
                href="#"
              >
                Zonas
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        <MenuToggle funcion={handleNavLinksToggle} variable={openLink} />
      </nav>
    </>
  );
};

export default NavbarMobile;
