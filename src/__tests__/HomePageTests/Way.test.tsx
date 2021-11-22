import React from "react";
import { render, screen } from "@testing-library/react";
import Way from "../../components/Home/Sections/WaysApi/Way";

describe("Way component test", () => {
    test("Way component is rendered", () => {
        const result = render(<Way way_text='test text' image='test.svg' />);
        expect(result.container.querySelector(".main-page-card")).toBeInTheDocument();
    });

    test("Way component has 'test text' text", () => {
        render(<Way way_text='test text' image='test.svg' />);
        expect(screen.getByText("test text")).toBeInTheDocument();
    });

    test("Way component has 'test icon' altText", () => {
        render(<Way way_text='test text' image='test.svg' />);
        expect(screen.getByAltText("test icon")).toBeInTheDocument();
    });
});
