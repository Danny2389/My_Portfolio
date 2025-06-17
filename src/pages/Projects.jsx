import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import flight from "../assets/projects/flight.png";
// import healthcare from "../assets/projects/healthcare.png";
import heart from "../assets/projects/heart.png";
import insurance from "../assets/projects/insurance.png";
// import certf from "../assets/projects/certf.png";
import pg from "../assets/projects/pg.png";

const fadeTiltVariant = {
  hidden: { opacity: 0, y: 30, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const Projects = () => {
  const projects = [
    // {
    //   imgPath: healthcare,
    //   title: "🏥 Health Care App",
    //   description:"Healthcare(Accessible, Simple, Healthcare Assistance) A healthcare solution designed to overcome geographic barriers and appointment scheduling challenges. It simplifies appointment booking and enables virtual consultations, ensuring 24/7 medical assistance. Designed a revolutionary healthcare solution that enhances patient care and accessibility. Leveraged React.js, Machine Learning, Neural Networks, AI Chatbot, and MySQL to develop an intelligent, responsive system. Enhanced patient care through a user-friendly mobile application, reducing delays and ensuring seamless healthcare access. With intuitive mobile consultations and the message “CARE IS ON THE WAY”.",
    //   ghLink: "https://github.com/Danny2389/Health_Care_App.git"
    // },
    {
      imgPath: flight,
      title: "✈️ Flight Fare Prediction",
      description: "A machine learning project that predicts flight ticket prices based on various parameters like airline, source, destination, departure/arrival times, duration, and more. Built using Python, Pandas, and Scikit-learn, this project involves data preprocessing, feature engineering, and model training with algorithms like Random Forest and XGBoost. Ideal for exploring regression techniques and deployment-ready ML solutions.",
      ghLink: "https://github.com/Danny2389/Flight_Fare_Prediction.git"
    },
    {
      imgPath: heart,
      title: "🫀 Heart Disease Prediction",
      description: "This project uses machine learning models to predict the likelihood of heart disease based on various health parameters such as age, cholesterol, blood pressure, and more. Built with Python, it includes data preprocessing, model training (Logistic Regression, Random Forest, etc.), and evaluation. Ideal for educational or healthcare-related applications.",
      ghLink: "https://github.com/Danny2389/Heart_Prediction.git"
    },
    {
      imgPath: insurance,
      title: "💰 Insurance Cost Prediction",
      description: "A machine learning project that predicts medical insurance costs based on user features like age, BMI, gender, smoking status, and region. It uses algorithms like Linear Regression, Random Forest, and XGBoost to deliver accurate predictions. Ideal for learning regression models and cost analysis.",
      ghLink: "https://github.com/Danny2389/Insurance_Cost_Prediction.git"
    },
    // {
    //   imgPath: certf,
    //   title: "Certificate Generator",
    //   description: "The Certificate Generator is a web application built using React, TypeScript, Tailwind CSS, and React-PDF. It allows users to easily generate internship certificates. This project serves as both a fun learning exercise and a useful tool for certificate creation. The app is designed to be user-friendly, leveraging modern web technologies for a seamless experience.",
    //   ghLink: "https://github.com/Danny2389/Certificate_Generator.git"
    // },
    {
      imgPath: pg,
      title: "Bike Rental with Machine Learning",
      description: "A Bike Rental is an intelligent platform that leverages machine learning models to predict bike demand, optimize rental pricing, and enhance user experience. The system can analyze historical data, including weather conditions, location, time of day, and user preferences, to make data-driven predictions about bike availability and demand trends.",
      ghLink: "https://github.com/Danny2389/BikeRentalPrediction.git"
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.h1
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
         👨‍💻 Recent Top |<strong className="yellow"> Works </strong>
        </motion.h1>

        <motion.p
          className="section-heading"
          style={{ fontSize: "18px",color:'#e0e0e05e' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Here are a few projects I've worked on recently.
        </motion.p>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <motion.div
                  variants={fadeTiltVariant}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  <ProjectCard
                    imgPath={project.imgPath}
                    isBlog={false}
                    title={project.title}
                    description={project.description}
                    ghLink={project.ghLink}
                  />
                </motion.div>

              </Col>
            ))}
          </Row>
        </motion.div>

      </Container>
    </Container>
  );
};

export default Projects;
