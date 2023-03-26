import React from "react";
import { render } from "@testing-library/react";
import { Error } from "./Error";

test("render spinner", () => {
  render(<Error />);
});
