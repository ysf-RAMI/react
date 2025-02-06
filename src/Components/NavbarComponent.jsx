import { useContext, useEffect, useState } from "react";
import { moduleContext } from "../Context/ModuleContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import classNames from "classnames";
import logo from "../assets/logo_0.png";
import { Outlet } from "react-router-dom";
import "../styles/Navbar.css";

const NavbarComponent = () => {
  const { filiere } = useContext(moduleContext);
  const [navbarSolid, setNavbarSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarSolid(true);
      } else {
        setNavbarSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        className={classNames("custom-navbar", { "solid-navbar": navbarSolid })}
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <motion.img
              src={logo}
              alt="Logo"
              width="200"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* User details (Login button, etc.) */}

              {/* Menu items */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <NavDropdown title="Module" id="module-dropdown">
                  {filiere.length > 0 ? (
                    filiere.map((f) =>
                      f.modules.map((module) => (
                        <NavDropdown.Item
                          key={`${f.id}-${module.id}`}
                          href={`/home/coursedetail/${f.id}`} // Correct route
                        >
                          {module.name}
                        </NavDropdown.Item>
                      ))
                    )
                  ) : (
                    <NavDropdown.Item disabled>
                      Aucune filière disponible
                    </NavDropdown.Item>
                  )}
                </NavDropdown>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <NavDropdown title="Filière" id="filiere-dropdown">
                  {filiere.length > 0 ? (
                    filiere.map((f) => (
                      <NavDropdown.Item key={f.id} href="#action/3.1">
                        {f.nomFiliere}
                      </NavDropdown.Item>
                    ))
                  ) : (
                    <NavDropdown.Item disabled>
                      Aucune filière disponible
                    </NavDropdown.Item>
                  )}
                </NavDropdown>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Button variant="primary" className="nav-btn">
                  Login
                </Button>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavbarComponent;
