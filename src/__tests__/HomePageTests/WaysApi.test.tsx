import React from "react";
import { render, screen } from "@testing-library/react";
import WaysApi from "../../components/Home/Sections/WaysApi/WaysApi";

describe("WaysApi component test", () => {
    test("WaysApi component is rendered", () => {
        const result = render(<WaysApi />);
        expect(result.container.querySelector(".ways-container")).toBeInTheDocument();
    });

    test("WaysApi component has 'Ways to earn with Deriv API' text", () => {
        render(<WaysApi />);
        expect(screen.getByText("Ways to earn with Deriv API")).toBeInTheDocument();
    });
});
