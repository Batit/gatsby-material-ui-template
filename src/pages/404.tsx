import React from "react";

import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Layout from "../components/Layout/Layout.component";
import SEO from "../components/Seo/Seo.component";

const NotFoundPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "404.png" }) {
        childImageSharp {
          fixed(width: 500) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Grid container direction="column" justify="center" alignItems="center">
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        <Box m={5} textAlign="center">
          <Typography variant="h3">Página no encontrada</Typography>
          <Typography variant="h6">
            Lo sentimos pero no podemos encontrar la página que buscas
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
