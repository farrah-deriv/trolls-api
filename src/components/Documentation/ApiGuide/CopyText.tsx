import React from "react";
import styles from "./ApiGuideContent.module.scss";
import Image from "next/image";

type  CopyTextProps = {
    oauth: string
}

const CopyText: React.FC<CopyTextProps> = ({ oauth }) => {
    return (
        <div className={styles["card-light"]}>
            <text className={styles["card-light-content"]}>
                {oauth}
            </text>
            <div className={styles["copy-button"]}>
                <Image
                    className={styles["copy-button-image"]}
                    src="/copy.svg"
                    width="22"
                    height="22"
                    alt="copy code icon"
                />
                <text onClick={() => {navigator.clipboard.writeText(oauth)}}>Copy</text>
            </div>
        </div>
    )
};

export default CopyText;
