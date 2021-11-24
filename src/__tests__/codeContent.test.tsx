import React from "react";
import { render } from "@testing-library/react";
import CodeContent from "../components/common/CodeContent/CodeContent";

describe("CodeContent", () => {
    it("renders the CodeContent component", () => {
        const result = render(<CodeContent lang="javascript" data="sample" />);
        expect(result.container.querySelector(".pre")).toBeInTheDocument();
    });
});


