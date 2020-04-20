/* eslint-disable react/jsx-filename-extension */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const wrapRootElement = ({ element }) => (
  <div style={{ display: "flex" }}>
    <CssBaseline />
    {element}
  </div>
);
