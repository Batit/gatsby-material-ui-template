import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ContainerDiv } from "./LayoutPublic.styled";

const LayoutPublic: React.FC = ({ children }) => {
  return (
    <Container>
      <ContainerDiv display="flex" textAlign="center">
        <Grid container direction="row" justify="center" alignItems="center">
          {children}
        </Grid>
      </ContainerDiv>
    </Container>
  );
};
export default LayoutPublic;
