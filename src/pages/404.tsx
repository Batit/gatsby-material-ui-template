import React from "react";

import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ImageNotFound from "../images/404.png";

import Layout from "../components/Layout/Layout.component";
import SEO from "../components/Seo/Seo.component";

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Grid container direction="column" justify="center" alignItems="center">
        <img src={ImageNotFound} alt="page not found" />
        <Box m={5} textAlign="center">
          <Typography variant="h3">Page not found </Typography>
          <Typography variant="h6">
            Sorry but the page you are looking for does not exist
          </Typography>
        </Box>
        <Button
          component={Link}
          to="/"
          size="large"
          variant="contained"
          color="primary"
        >
          Volver al inicio
        </Button>
      </Grid>
    </Layout>
  );
};

export default NotFoundPage;
