import React, { useContext } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Home.css";
import { moduleContext } from "../Context/ModuleContext";

const AnimatedCard = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export const Home = () => {
  const { filiere } = useContext(moduleContext);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Ecole Superieure de Technologie Guelmim</h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Button variant="danger" size="lg">
              Start search for course
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Filière Section */}
      <Container className="text-center">
        <h1 className="serviceMainTitle">Filière</h1>
        <div className="bottom"></div>
        <Row className="justify-content-center align-items-center">
          {filiere.map((f) => (
            <Col key={f.id} lg={4} md={6} sm={12}>
              <AnimatedCard>
                <div className="serviceCard text-center">
                  <img
                    src={f.url}
                    className="ServicesIcon"
                    alt="Service Icon"
                  />
                  <h4 className="serviceName">{f.nomFiliere}</h4>
                  <p>Description of the filière.</p>
                </div>
              </AnimatedCard>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modules Section */}
      <Container className="text-center">
        <h1 className="serviceMainTitle">Modules</h1>
        <div className="bottom"></div>
        <Row className="justify-content-center align-items-center">
          {filiere.map((f) =>
            f.modules.map((module) => (
              <Col key={module.id} lg={4} md={6} sm={12}>
                <AnimatedCard>
                  <div className="serviceCard text-center">
                    <img
                      src={module.url}
                      className="ServicesIcon"
                      alt="Module Icon"
                    />
                    <h4 className="serviceName">{module.name}</h4>
                    <p>Description of the module.</p>
                  </div>
                </AnimatedCard>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};
