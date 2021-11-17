import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
    it("Home page is rendered", () => {
        const result = render(<Home />);

        expect(result.container.querySelector("#home-page")).toBeInTheDocument();
    });
});
