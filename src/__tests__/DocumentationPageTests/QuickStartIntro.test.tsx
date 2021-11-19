import React from "react";
import { render } from "@testing-library/react";
import QuickStartIntro from "components/Documentation/QuickStartIntro/QuickStartIntro";

describe("QuickStartIntro", () => {
    it("QuickStartIntro component is rendered", () => {
        const result = render(<QuickStartIntro />);

        expect(result.container.querySelector(".doc-main-title")).toBeInTheDocument();
        expect(result.container.querySelector(".quick-start-intro")).toBeInTheDocument();
        expect(result.container.querySelector(".api-sub-title")).toBeInTheDocument();
        expect(result.container.querySelector(".header-container")).not.toBeInTheDocument();
    });
    it("QuickStartIntro contains correct text lines", () => {
        const result = render(<QuickStartIntro />);
        const fake_text = result.queryByText(/Personalisation/i);

        expect(result.getByText(/Create a new token/i)).toBeInTheDocument();
        expect(result.getByText(/Register your app/i)).toBeInTheDocument();
        expect(result.getByText(/Instructions for setting up your environment/i)).toBeInTheDocument();
        expect(fake_text).toBeNull();
    });
});
