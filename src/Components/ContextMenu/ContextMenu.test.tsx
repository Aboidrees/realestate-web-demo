import React from "react";
import { render } from "@testing-library/react";
import { ContextMenu } from "./ContextMenu";

test("render map loader", () => {
  render(<ContextMenu position={new google.maps.LatLng({ lat: 0, lng: 0 })} screenPoint={{ x: 0, y: 0 }} />);
});
