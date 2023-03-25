import React from "react";
import { render } from "@testing-library/react";
import { Spinner } from "./Spinner";

test("render spinner", () => {
  render(<Spinner />);
});
