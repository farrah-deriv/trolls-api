import React from "react";
import { render, screen } from "@testing-library/react";
import { BenefitSection } from "../../components/BenefitsSection/BenefitSection";

describe("BenefitSection", () => {
    test("BenefitSection component is rendered", () => {
        const result = render(<BenefitSection />);
        expect(result.container.querySelector(".main-page-row")).toBeInTheDocument();
    });

    test("BenefitSection component has 'Personalisation' text", () => {
        render(<BenefitSection />);
        expect(screen.getByText("Personalisation")).toBeInTheDocument();
    });

    test("BenefitSection component has 'build business icon' altText", () => {
        render(<BenefitSection />);
        expect(screen.getByAltText("build business icon")).toBeInTheDocument();
    });
});
