import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

interface AppProviderProps {
  element: React.ReactElement;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Wrapper = ({ element }: AppProviderProps) => (
  <StyledThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </MuiThemeProvider>
  </StyledThemeProvider>
);

export default Wrapper;
