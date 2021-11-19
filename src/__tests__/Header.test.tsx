import React from "react";
import { render } from "@testing-library/react";
import Header from "components/common/Header/Header";

describe("Header", () => {
    it("Header component is rendered", () => {
        const result = render(<Header is_canvas_menu_shown={false} toggleCanvasMenu={() => {}} />);

        expect(result.container.querySelector("#main-nav")).toBeInTheDocument();
        expect(result.container.querySelector(".top-nav")).toBeInTheDocument();
        expect(result.container.querySelector(".header-container")).toBeInTheDocument();
    });
    it("Header contains hamburger icon", () => {
        const result = render(<Header is_canvas_menu_shown={false} toggleCanvasMenu={() => {}} />);

        expect(result.getByAltText("Hamburger menu")).toBeInTheDocument();
    });
    it("Header contains Deriv Logo", () => {
        const result = render(<Header is_canvas_menu_shown toggleCanvasMenu={() => {}} />);

        expect(result.getByAltText("Deriv Logo")).toBeInTheDocument();
        expect(result.queryByAltText("Fake Logo")).toBeNull();
    });
});
