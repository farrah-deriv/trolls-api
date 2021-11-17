import React from "react";
import { render, screen } from "@testing-library/react";
import Comprehensive from "../components/Home/Sections/Comprehensive";

describe("Comprehensive", () => {
    it("Comprehensive section is rendered", () => {
        const result = render(<Comprehensive />);

        expect(result.container.querySelector("#comprehensive")).toBeInTheDocument();
    });
});