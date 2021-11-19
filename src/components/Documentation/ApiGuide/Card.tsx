import React from "react";
import styles from "./ApiGuideContent.module.scss";
import CopyButton from "../../common/CopyButton/CopyButton"

type CardProps = {
    url: string
}

const Card: React.FC<CardProps> = ({ url }) => {
    return (
        <div className={styles["card-light"]}>
            <div className={styles["card-light-content"]}>
                {url}
            </div>
            <CopyButton content_to_copy={url} className="copy_button--card"></CopyButton>
        </div>
    )
};

export default Card;
