import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../components/common/Title";

describe("Title", () => {
    it("Title component is rendered", () => {
        const result = render(<Title headerSize={"h1" || "h2" || "h3"}/>);

        expect(result.container.querySelector("#title")).toBeInTheDocument();
    });
});