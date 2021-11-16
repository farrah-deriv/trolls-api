import React from "react";
import styles from "./Accordion.module.scss";

const Accordion: React.FC = ({ children }) => {
    return <div className={styles["accordion"]}>{children}</div>;
};

export default Accordion;
