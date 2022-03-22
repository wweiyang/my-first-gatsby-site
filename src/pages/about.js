// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! Here is a catloaf.</p>
      <StaticImage
        src="../images/cat.jpg"
        alt="a cat loaf viewed from the top"
      />
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
