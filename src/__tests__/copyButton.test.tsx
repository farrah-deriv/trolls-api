import React from "react";
import { render } from "@testing-library/react";
import CopyButton from "../components/common/CopyButton/CopyButton";

describe("CopyButton", () => {
    it("renders the CopyButton component", () => {
        const result = render(<CopyButton content_to_copy="" />);
        expect(result.container.querySelector("")).toBeInTheDocument();
    });
});
