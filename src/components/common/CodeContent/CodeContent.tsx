import { useEffect, useState } from "react";
import Prism from "prismjs";
import { useIsMounted } from "hooks/mounted"
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
    const [showdata, setshowdata] = useState(false)
    const isMounted = useIsMounted();
    useEffect(() => {
        if (isMounted()) {
            setshowdata(true)
            Prism.highlightAll()
        }
    }, [lang, data, isMounted])


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
            {showdata &&
                <pre className={styles.pre}>
                    <code className={`language-${lang}`}>{data}</code>
                </pre>
            }
        </>
    )
}

export default CodeContent;
