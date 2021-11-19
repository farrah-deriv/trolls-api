import { useEffect } from "react";
import Prism from "prismjs"
import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-php";
import styles from "./CodeContent.module.scss";

type Props = {
    lang?: string,
    data?: string
}

const CodeContent = ({ lang, data }: Props) => {

    useEffect(() => {
        Prism.highlightAll()
    }, [lang, data])

    return (
        <div>
            <pre className={styles.pre}><code className={`language-${lang}`}>{data}</code></pre>
        </div>

    )
}

export default CodeContent;

