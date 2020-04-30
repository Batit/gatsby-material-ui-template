import React from "react";
import { render, cleanup } from "@testing-library/react";

import Drawer from "./Drawer.component";

afterEach(cleanup);

describe("Drawer", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Drawer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
