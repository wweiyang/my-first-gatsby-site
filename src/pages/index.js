// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://images.unsplash.com/photo-1605164284889-207ecaaacd26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2088&q=80"
        alt="A furry wombat"
      />
      <blockquote
        style={{
          borderLeft: "2px solid #d1d1d1",
          marginLeft: 0,
          paddingLeft: "16px",
        }}
      >
        <p>
          Photo by{" "}
          <a href="https://unsplash.com/@mappingmegantravel">Meg Jerrard</a> on{" "}
          <a href="https://unsplash.com/">Unsplash</a>
        </p>
      </blockquote>
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
