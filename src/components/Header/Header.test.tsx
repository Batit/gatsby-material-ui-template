import React from "react";
import { render, cleanup } from "@testing-library/react";

import Wrapper from "../../theme";
import Header from "./Header.component";

afterEach(cleanup);

describe("Header", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <Wrapper element={<Header siteTitle="Default Starter" />} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
