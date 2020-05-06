import React from "react";
import { render, cleanup } from "@testing-library/react";

import Wrapper from "../../theme";
import Drawer from "./Drawer.component";

afterEach(cleanup);

describe("Drawer", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <Wrapper element={<Drawer open={false} />} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
