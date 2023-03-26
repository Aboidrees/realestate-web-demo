import React from "react";
import { render } from "@testing-library/react";
import { ContextMenuItem } from "./ContextMenuItem";

test("render map loader", () => {
  render(<ContextMenuItem text="item" />);
});
