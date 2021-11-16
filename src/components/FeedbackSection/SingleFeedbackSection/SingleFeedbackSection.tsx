import React from "react";
import Link from "next/link";
import styles from "./SingleFeedbackSection.module.scss";

type SingleFeedbackSectionPropsType = {
    headerSize: number;
    title: string;
    description?: Array<string | JSX.Element>;
    buttonLinkPath?: string;
    titleButton?: string;
    showButton: boolean;
    background: "black" | "gray";
};

const SingleFeedbackSection: React.FC<SingleFeedbackSectionPropsType> = props => {
    const { title, headerSize, description, buttonLinkPath, titleButton, showButton, background } = props;

    const CustomHeaderTitleTag = `h${headerSize}` as keyof JSX.IntrinsicElements;

    const titleButtonTextColor = background === "black" ? styles.whiteColor : styles.blackColor;
    const paragraphColor = background === "black" ? styles.grayColor : styles.blackColor;

    return (
        <div className={`${styles["single-container"]}`}>
            <CustomHeaderTitleTag className={titleButtonTextColor}>{title}</CustomHeaderTitleTag>
            {description && <p className={paragraphColor}>{description}</p>}
            {showButton && buttonLinkPath && (
                <Link href={buttonLinkPath}>
                    <a
                        className={`${styles["community-btn"]} ${titleButtonTextColor}`}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {titleButton}
                    </a>
                </Link>
            )}
        </div>
    );
};

export default SingleFeedbackSection;
