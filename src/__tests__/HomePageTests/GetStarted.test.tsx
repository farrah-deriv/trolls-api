import React from "react";
import { render, screen } from "@testing-library/react";
import GetStarted from "../../components/Home/Sections/GetStarted/GetStarted";

describe("GetStarted component test", () => {
    test("GetStarted component is rendered", () => {
        const result = render(<GetStarted />);
        expect(result.container.querySelector(".card-container")).toBeInTheDocument();
        expect(result.container.querySelector(".term-conditions")).toBeInTheDocument();
    });

    test("GetStarted component has 'Get started with our API in 3 simple steps:' text", () => {
        render(<GetStarted />);
        expect(screen.getByText("Get started with our API in 3 simple steps:")).toBeInTheDocument();
    });
});
