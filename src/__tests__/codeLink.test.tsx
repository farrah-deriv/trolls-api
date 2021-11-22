import React from "react";
import { render } from "@testing-library/react";
import CodeLink from "../components/common/CodeLink";

describe("CodeLink", () => {
    it("renders the CodeLink component", () => {
        const result = render(<CodeLink href={""}/>);
        expect(result.container.querySelector(".code")).toBeInTheDocument();
    });
});
