import React from "react";

import Wrapper from "../../theme";
import Drawer from "./Drawer.component";

export default {
  title: "Drawer",
};

export const Closed = () => <Wrapper element={<Drawer />} />;

export const Opened = () => <Wrapper element={<Drawer open />} />;
