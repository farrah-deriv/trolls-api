import Section from "../../components/Home/Section/Section";
import FeedbackSection from "../../components/FeedbackSection/FeedbackSection";
import DocsLayout from "../../components/Documentation/Layout/DocsLayout";

const BugBounty = () => {
    return (
        <Section>
            <div className="page-content">
                <h1 className="doc-main-title">Bug bounty</h1>
    <div className="text-block">
    <h3 className="mb-8p bb-m-sub-title">Want to help us enhance our security?</h3>
    <p>
      Test our products and services for security vulnerabilities and earn a
      monetary reward for any verifiable issues that you find, courtesy of our
      bug bounty programme.
    </p>
    </div>
            <FeedbackSection id="bugBounty" />
            </div>
        </Section>
    );
};

BugBounty.Layout = DocsLayout;

export default BugBounty;
