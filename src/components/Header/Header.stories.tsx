import React from "react";

import Wrapper from "../../theme";
import Header from "./Header.component";

export default {
  title: "Header",
};

export const Closed = () => (
  <Wrapper element={<Header siteTitle="StoryBook" />} />
);

export const Opened = () => (
  <Wrapper element={<Header siteTitle="StoryBook" open />} />
);
