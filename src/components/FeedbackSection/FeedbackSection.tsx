import React from "react";
import SingleFeedbackSection from "../FeedbackSection/SingleFeedbackSection/SingleFeedbackSection";
import styles from "./FeedbackSection.module.scss";
import Link from "next/link";

const homeFeedbackSection = {
    description: {
        left: ["Discuss ideas and share solutions with developers worldwide."],
        right: [
            "Email us at ",
            <Link href={"mailto: api-support@deriv.com"} key="email-link">
                <a>api-support@deriv.com</a>
            </Link>,
            " if you have any questions.",
        ],
    },
};

const bugBountyFeedbackSection = {
    description: {
        right: [
            "Email us at ",
            <Link href={"mailto:security@deriv.com"} key="email-link">
                <a>security@deriv.com</a>
            </Link>,
            " for more information.",
        ],
    },
};

type FeedbackSectionPropsType = {
    id: string;
};

const FeedbackSection: React.FC<FeedbackSectionPropsType> = ({ id }) => {
    switch (id) {
    case "home":
        return (
            <div className={`${styles.container} ${styles.dark}`}>
                <div className={`${styles["row-container"]}`}>
                    <SingleFeedbackSection
                        title={"Get connected"}
                        headerSize={2}
                        description={homeFeedbackSection.description.left}
                        buttonLinkPath={"https://binary.vanillacommunity.com/"}
                        titleButton={"Join our community"}
                        background={"black"}
                        showButton
                    />
                    <SingleFeedbackSection
                        title={"We’re here to help"}
                        headerSize={2}
                        description={homeFeedbackSection.description.right}
                        background={"black"}
                        showButton={false}
                    />
                </div>
            </div>
        );
    case "bugBounty":
        return (
            <div className={`${styles.cta} ${styles.ctaPx}`}>
                <div className={`${styles["row-container"]}`}>
                    <SingleFeedbackSection
                        background={"gray"}
                        title={"Explore our bounty programme"}
                        headerSize={2}
                        buttonLinkPath={"https://hackerone.com/binary"}
                        titleButton={"Go to Hackerone"}
                        showButton
                    />
                    <SingleFeedbackSection
                        background={"gray"}
                        title={"Got questions?"}
                        headerSize={2}
                        description={bugBountyFeedbackSection.description.right}
                        showButton={false}
                    />
                </div>
            </div>
        );
    case "appRegistration":
        return (
            <div className={`${styles.cta}`}>
                <div className={`${styles["row-container"]}`}>
                    <SingleFeedbackSection
                        background={"gray"}
                        title={"Looking for your API token?"}
                        headerSize={3}
                        buttonLinkPath={"https://app.deriv.com/account/api-token"}
                        titleButton={"Get your API token"}
                        showButton
                    />
                </div>
            </div>
        );
    default:
        return <></>;
    }
};

export default FeedbackSection;
