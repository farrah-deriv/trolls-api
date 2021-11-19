import React from "react";
import { render } from "@testing-library/react";
import CanvasMenu from "components/common/CanvasMenu/CanvasMenu";

describe("CanvasMenu", () => {
    it("CanvasMenu component is rendered with hidden dropdown of Documentation links", () => {
        const result = render(<CanvasMenu is_canvas_menu_shown toggleCanvasMenu={() => {}} />);

        expect(result.container.querySelector("#canvas-menu")).toHaveClass("off-canvas-menu show-canvas");
        expect(result.container.querySelector("#doc-menu-header")).toBeInTheDocument();
    });
    it("CanvasMenu component is hidden", () => {
        const result = render(<CanvasMenu is_canvas_menu_shown={false} toggleCanvasMenu={() => {}} />);

        expect(result.container.querySelector("#canvas-menu")).not.toHaveClass("off-canvas-menu show-canvas");
        expect(result.container.querySelector(".menu-panel")).not.toHaveClass("menu-panel show-dropdown");
    });
});
