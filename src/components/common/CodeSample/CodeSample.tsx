import React, { useState, useEffect } from "react";
import Image from "next/image";
import CodeContent from "../CodeContent/CodeContent";
import CopyButton from "../CopyButton/CopyButton";
import styles from "./CodeSample.module.scss";

type Props = {
    id?: string,
    title?: string,
    desc?: string,
    subdesc?: string
}

const CodeSample = ({ id, title, desc, subdesc }: Props) => {

    const [fileContent, setFileContent] = useState(" ");
    const [lang, setLang] = useState("javascript");

    useEffect(() => {
        const fileExtension: any = { javascript: "js", csharp: "cs", php: "php", python: "py" }
        const fileExt = fileExtension[`${lang}`];
        const filePath = `/demoCode/${id}-${lang}.${fileExt}`;

        fetch(filePath).then((response) => response.text()).then(data => {
            const formattedCode = data.replaceAll("&lt;", "<").replaceAll("&gt;", ">")
            setFileContent(formattedCode)
        })

    }, [id, lang])

    return (
        <div className={styles.codeBlock}>
            <h2 className={styles.codeBlockTitle}>{title}</h2>
            <p className={styles.codeBlockDesc}>{desc}</p>
            {subdesc && <p className={styles.codeBlockDesc}>{subdesc}</p>}
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <p className={styles.card_header_title}>
                        <select id="demo-buy-contract" value={lang} onChange={(event) => setLang(event.target.value)} >
                            <option value="javascript">JavaScript</option>
                            <option value="csharp">C#</option>
                            <option value="php">PHP</option>
                            <option value="python">Python</option>
                        </select>
                    </p>
                    <CopyButton size="16" contentToCopy={fileContent} />
                </div>
                <CodeContent lang={lang} data={fileContent} />
            </div>
        </div>
    )
}

export default CodeSample;
