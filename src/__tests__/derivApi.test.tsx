import React from "react";
import { render, screen } from "@testing-library/react";
import DerivApi from "../components/Home/Sections/DerivApi";

describe("DerivApi", () => {
    it("DerivApi section is rendered", () => {
        const result = render(<DerivApi />);

        expect(result.container.querySelector("#derivApi")).toBeInTheDocument();
    });
});