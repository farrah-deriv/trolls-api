import React from "react";
import { render } from "@testing-library/react";
import CodeContent from "../components/common/CodeContent/CodeContent";

describe("CodeContent", () => {
    it("renders the CodeContent component", () => {
        const result = render(<CodeContent />);
        expect(result.container.querySelector("#codeContent")).toBeInTheDocument();
    });
});


