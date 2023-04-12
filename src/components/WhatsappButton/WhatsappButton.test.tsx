import React from "react";
import { render } from "@testing-library/react";

import WhatsappButton from "./WhatsappButton";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<WhatsappButton whatsappNumber="8281828578" />);
  });
});