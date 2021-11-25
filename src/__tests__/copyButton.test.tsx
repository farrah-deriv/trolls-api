import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CopyButton from "../components/common/CopyButton/CopyButton";

Object.defineProperty(navigator, "clipboard", {
    value: {
        writeText: () => {
            // This is intentionaly left blank for test
        },
    },
});

describe("Render CopyButton", () => {
    it("renders the component", () => {
        const { container, getByRole } = render(<CopyButton content_to_copy="hello world!" />);
        expect(container.querySelector(".copy_button")).toBeInTheDocument();
        expect(getByRole("img")).toHaveClass("copy_button_image");
        expect(container.querySelector(".copy_button_text")).toBeInTheDocument();
    });
})

describe("copytoClipboard", () => {
    jest.spyOn(navigator.clipboard, "writeText");
    it("should call navigator.clipboard on click", () => {
        const mock_on_click = jest.fn();
        const { getByTestId } = render(<CopyButton content_to_copy="hello world!" />);
        const click_indicator = getByTestId("copyButton");
        click_indicator.onclick = mock_on_click;
        fireEvent.click(click_indicator);
        expect(mock_on_click).toHaveBeenCalledTimes(1);
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith("hello world!");
    });
})