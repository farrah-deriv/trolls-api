import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Accordion from "../components/common/Accordion/Accordion";
import AccordionItem from "../components/common/Accordion/AccordionItem";
describe("Accordion", () => {
    it("renders the component", () => {
        const { container } = render(<Accordion />);

        expect(container.querySelector(".accordion")).toBeInTheDocument();
    });
    it("renders the child component", () => {
        const { container } = render(
            <Accordion>
                <AccordionItem title=""></AccordionItem>
            </Accordion>
        );

        expect(container.querySelector(".accordion-wrapper")).toBeInTheDocument();
    });
    it("renders the accordion title", () => {
        const { getByText } = render(
            <AccordionItem title="What is the easiest way to get started with Deriv API?"></AccordionItem>
        );

        expect(getByText(/What is the easiest way to get started with Deriv API?/i));
    });
    it("should not display the accordion item content initially", () => {
        const { container } = render(
            <AccordionItem title="">
                <p>Yes! Follow these steps:</p>
            </AccordionItem>
        );

        expect(container.querySelector(".accordion-panel")).not.toBeInTheDocument();
    });
    it("should contain accordion-button--plus class initially", () => {
        const { getByRole } = render(<AccordionItem title=""></AccordionItem>);

        expect(getByRole("img")).toHaveClass("accordion-button--plus");
    });
    it("toggles accordion on click", () => {
        const mock_on_click = jest.fn();
        const { container, getByRole, getByTestId } = render(<AccordionItem title=""></AccordionItem>);
        const click_indicator = getByTestId("accordion-header");

        click_indicator.onclick = mock_on_click;
        fireEvent.click(click_indicator);
        expect(mock_on_click).toHaveBeenCalledTimes(1);
        expect(container.querySelector(".accordion-panel")).toBeInTheDocument();
        expect(getByRole("img")).toHaveClass("accordion-button--minus");
    });
});
