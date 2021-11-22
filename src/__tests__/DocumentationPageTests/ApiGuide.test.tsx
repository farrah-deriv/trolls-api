import React from "react";
import { render } from "@testing-library/react";
import ApiGuide from "components/Documentation/ApiGuide/ApiGuideContent";

describe("ApiGuide", () => {
    it("ApiGuide component is rendered", () => {
        const result = render(<ApiGuide />);

        expect(result.container.querySelector(".doc-main-title")).toBeInTheDocument();
        expect(result.container.querySelectorAll(".text-block").length).toBe(9);
        expect(result.container.querySelectorAll(".card-light").length).toBe(2);
    });

    it("ApiGuide contains correct text lines", () => {
        const result = render(<ApiGuide />);
        const section_names = [
            'Token scopes',
            'Opening Deriv accounts',
            'Accounting functionalites',
            'Option prices', 'Utility calls'
        ];

        expect(result.getByText(/Register your app before using our API/i)).toBeInTheDocument()
        section_names.forEach(title => expect(result.getByText(new RegExp(title, "i"))).toBeInTheDocument())
    });
});
