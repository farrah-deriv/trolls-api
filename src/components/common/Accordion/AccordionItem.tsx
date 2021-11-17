import React from "react";
import Image from "next/image";
import styles from "./Accordion.module.scss";

type AccordionItemProps = {
    title: string;
};
const AccordionItem: React.FC<AccordionItemProps> = ({ children, title }) => {
    const [is_content_visible, setContentVisible] = React.useState(false);
    const togglePanel = () => {
        setContentVisible(!is_content_visible);
    };
    return (
        <div className={styles["accordion-wrapper"]}>
            <div className={styles["accordion-header"]} onClick={togglePanel}>
                <div className={styles["accordion-text bold"]}>{title}</div>
                <Image
                    className={
                        is_content_visible ? styles["accordion-button--minus"] : styles["accordion-button--plus"]
                    }
                    src={is_content_visible ? "/minus.svg" : "/plus.svg"}
                    width="16"
                    height="16"
                    alt="expand"
                />
            </div>
            {is_content_visible && <div className={styles["accordion-panel"]}>{children}</div>}
        </div>
    );
};

export default AccordionItem;
