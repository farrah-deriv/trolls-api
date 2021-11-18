import React, { useEffect, useState } from "react";
import styles from "./CopyButton.module.scss";
import Image from "next/image";


type CopyTextProps = {
    size: string,
    contentToCopy: string
}


const CopyText: React.FC<CopyTextProps> = ({ size = "16", contentToCopy }) => {

    const [data, setData] = useState("");

    useEffect(() => {
        setData(contentToCopy)
    }, [contentToCopy])


    const fallbackCopyTextToClipboard = () => {
        const dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = data;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    const handleCopyButtonClick = () => {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard();
            return;
        }
        navigator.clipboard.writeText(data);
    }

    return (
        <div className={styles.copy_button} onClick={handleCopyButtonClick}>
            <Image className={styles.copy_button_image} src="/copy.svg" width={`${size}`} height={`${size}`} alt="copy code icon" />
            <span className={styles.copy_button_text}> Copy </span>
        </div>
    )

};

export default CopyText;