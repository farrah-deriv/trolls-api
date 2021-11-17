import React from "react";
import { render, screen } from "@testing-library/react";
import { BenefitIcon } from "../../components/BenefitsSection/BenefitIcon/BenefitIcon";

describe("BenefitIcon", () => {
    const props = {
        title: "Automation",
        imgPath: "/automation.svg",
    };

    test("BenefitIcon component is rendered", () => {
        const result = render(<BenefitIcon {...props} />);
        expect(result.container.querySelector(".single-container")).toBeInTheDocument();
    });

    test("BenefitIcon component has Automation text", () => {
        render(<BenefitIcon {...props} />);
        expect(screen.getByText("Automation")).toBeInTheDocument();
    });

    test("BenefitSection component has 'Automation' altText", () => {
        render(<BenefitIcon {...props} />);
        expect(screen.getByAltText("Automation")).toBeInTheDocument();
    });
});
