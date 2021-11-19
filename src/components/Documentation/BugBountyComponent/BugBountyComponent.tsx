import React from "react";
import FeedbackSection from "../../FeedbackSection/FeedbackSection";
import common from "../DocsCommon.module.scss";

const BugBountyComponent: React.FC = () => {

    return (
        <div className={common["page-content"]}>
            <h1 className={common["doc-main-title"]}>Bug bounty</h1>
            <div className={common["text-block"]}>
                <h3 className={common["mb-8p bb-m-sub-title"]}>Want to help us enhance our security?</h3>
                <p>
                    Test our products and services for security vulnerabilities and earn a
                    monetary reward for any verifiable issues that you find, courtesy of our
                    bug bounty programme.
                </p>
            </div>

            <FeedbackSection id="bugBounty" />
        </div>
    )



}

export default BugBountyComponent;