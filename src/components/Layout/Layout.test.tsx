import React from "react";
import { render, cleanup } from "@testing-library/react";

import Layout from "./Layout.component";

afterEach(cleanup);

describe("Layout", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Layout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
