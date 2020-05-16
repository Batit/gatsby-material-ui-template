import React from "react";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/Layout/Layout.component";
import SEO from "../components/Seo/Seo.component";
import Login from "../components/Login/Login.component";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Typography variant="h1" component="h1" gutterBottom>
      Hi people
    </Typography>
    <Typography variant="h2" gutterBottom>
      Welcome to your new Gatsby site.
    </Typography>
    <Typography>Now go build something great.</Typography>
    <Login />
  </Layout>
);

export default IndexPage;
