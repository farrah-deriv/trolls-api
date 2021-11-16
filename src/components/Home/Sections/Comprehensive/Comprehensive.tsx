import React from "react";
import data_comprehensive from "utils/data-comprehensive";
import styles from "./Comprehensive.module.scss";
import Image from "next/image";
import styleSections from "../Sections.module.scss";
import TextContent from "../TextContent/TextContent";

const Comprehensive: React.FC = () => (
    <section className={styleSections["main-page-row"]}>
        <div className={styles.rowContainer}>
            <div className={styles.singleContainer}>
                <div className={styles.libraryIcon}>
                    <Image
                        src={data_comprehensive.icon}
                        width={64}
                        height={64}
                        alt="preview"
                    />
                </div>
                <TextContent data={data_comprehensive}/>
                {data_comprehensive.link}
            </div>
        </div>
    </section>
)

export default Comprehensive;
