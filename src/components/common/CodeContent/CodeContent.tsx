
import { useState, useEffect } from "react";
import Prism from "prismjs"
import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-php";
import styles from "./CodeContent.module.scss";

type CodeContentProps = {
    lang: string,
    data: string
}

const CodeContent: React.FC<CodeContentProps> = ({ lang, data }) => {
    const [show_data, setShowData] = useState(false)

    useEffect(() => {
        setShowData(true)
        Prism.highlightAll()
    }, [lang, data])

    return (
        <>
            {show_data && (
                <div id="codeContent">
                    <pre className={styles.pre}><code className={`language-${lang}`}>{data}</code></pre>
                </div>
            )}
        </>
    )
}

export default CodeContent;