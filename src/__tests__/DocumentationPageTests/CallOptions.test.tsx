import React from "react";
import { render } from "@testing-library/react";
import CallOptions from "components/Documentation/ApiGuide/CallOptions";

describe("CallOptions", () => {
    it("CallOptions component is rendered", () => {
        const result = render(<CallOptions category={0} title={"h2"}/>);

        expect(result.container.querySelector(".text-block")).toBeInTheDocument();
    });
    it("shows correct category", () => {
        const result = render(<CallOptions category={0} title="Payment agents" />);

        expect(result.getByText(/Payment agents/i));
    })
});
