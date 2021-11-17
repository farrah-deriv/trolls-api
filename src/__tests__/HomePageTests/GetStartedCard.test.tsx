import React from "react";
import { render, screen } from "@testing-library/react";
import GetStartedCard from "../../components/Home/Sections/GetStarted/GetStartedCard";

describe("GetStartedCard component test", () => {
    test("GetStartedCard component is rendered", () => {
        const result = render(<GetStartedCard number='1' href='https://deriv.com/' icon='test.svg' title='test title' content='test content' />);
        expect(result.container.querySelector(".header")).toBeInTheDocument();
        expect(result.container.querySelector(".hide-on-mobile")).toBeInTheDocument();
        expect(result.container.querySelector(".hide-on-desktop")).toBeInTheDocument();
    });

    test("GetStartedCard component has '1. test title' text", () => {
        render(<GetStartedCard number='1' href='https://deriv.com/' icon='test.svg' title='test title' content='test content' />);
        expect(screen.getByText("1. test title")).toBeInTheDocument();
    });

    test("GetStartedCard component has 'test icon' altText", () => {
        render(<GetStartedCard number='1' href='https://deriv.com/' icon='test.svg' title='test title' content='test content' />);
        expect(screen.getByAltText("test icon")).toBeInTheDocument();
    });
});
