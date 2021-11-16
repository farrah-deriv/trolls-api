import React from "react";
import styles from "./DerivApi.module.scss";
import data_deriv_api from "utils/data-deriv-api";
import TextContent from "../TextContent";

const DerivApi: React.FC = () => (

    <div className={styles["hero-image"]}>
        <div className={styles["hero-container"]}>
            <TextContent data={data_deriv_api}/>
        </div>
    </div>
)

export default DerivApi;