import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SEO from "../components/Seo/Seo.component";
import Login from "../components/Login/Login.component";
import LayoutPublic from "../components/Layout/LayoutPublic.component";

const LoginPage: React.FC = () => {
  return (
    <>
      <SEO title="Login" />
      <LayoutPublic>
        <Paper elevation={3}>
          <Box display="flex" justifyContent="center" mt={4} mb={4}>
            <Avatar>
              <LockOpenIcon />
            </Avatar>
          </Box>
          <Box mb={4}>
            <Typography variant="h3">Welcome</Typography>
            <Typography variant="body1">Enter your data</Typography>
          </Box>
          <Login />
          <Box display="flex" m={5}>
            <Box flexGrow={1}>
              <Button href="#text-buttons" color="primary">
                Sign up
              </Button>
            </Box>
            <Button href="#text-buttons" color="primary">
              Forgot your password?
            </Button>
          </Box>
        </Paper>
      </LayoutPublic>
    </>
  );
};
export default LoginPage;
