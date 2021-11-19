import React from "react";
import { render } from "@testing-library/react";
import Footer from "components/common/Footer";

describe("Footer", () => {
    it("Footer component is rendered", () => {
        const result = render(<Footer />);
        const fake_className = result.container.querySelector(".header-container");

        expect(result.container.querySelector("footer")).toBeInTheDocument();
        expect(result.container.querySelector(".footer-container")).toBeInTheDocument();
        expect(fake_className).not.toBeInTheDocument();
    });
    it("Footer contains the text: © 2021 Deriv | All rights reserved", () => {
        const result = render(<Footer />);
        const fake_text = result.queryByText(/Personalisation/i);

        expect(result.getByText("© 2021 Deriv | All rights reserved")).toBeInTheDocument();
        expect(fake_text).toBeNull();
    });
});
