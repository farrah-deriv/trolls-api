import React from "react";
import { render, screen } from "@testing-library/react";
import TextContent from "../components/Home/Sections/TextContent";
import data_comprehensive from "utils/data-comprehensive";
import data_deriv_api from "utils/data-deriv-api";

describe("TextContent", () => {
    it("TextContent component is rendered", () => {
        const result = render(<TextContent data={data_comprehensive || data_deriv_api} />);

        expect(result.container.querySelector("#textContent")).toBeInTheDocument();
    });
});