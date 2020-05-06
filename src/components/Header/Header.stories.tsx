import React from "react";

import Wrapper from "../../theme";
import Header from "./Header.component";

export default {
  title: "Header",
};

export const Default = () => (
  <Wrapper element={<Header siteTitle="StoryBook" />} />
);
