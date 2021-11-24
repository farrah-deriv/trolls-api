import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-php";
import "prismjs/components/prism-json";
import "prismjs/plugins/custom-class/prism-custom-class.js";
import styles from "./CodeContent.module.scss";

type CodeContentProps = {
    lang: string;
    data: string;
}

type plugin = {
    content: string;
    language: string;
}


const CodeContent: React.FC<CodeContentProps> = ({ lang, data }) => {
    const [show_data, setShowData] = useState(false)
    const getCodeHighlight = () => Prism.highlightAll()
    useEffect(() => {
        setShowData(true)
        getCodeHighlight();
    }, [lang, data, getCodeHighlight])


    Prism.plugins.customClass.add(({ content, language }: plugin) => {
        if (content === "function") {
            return "storage-function";
        }
        if (content === "&lt;?php") {
            return "operator-php";
        }
        if (language === "json") {
            return "json";
        }

    });

    return (
        <>
            {show_data && (
                <>
                    <pre className={styles.pre}>
                        <code className={`language-${lang}`}>{data}</code>
                    </pre>
                </>
            )}
        </>
    )
}

export default CodeContent;
