import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CopyButton.module.scss";

type CopyButtonProps = {
    size?: string,
    content_to_copy: string
    className?: string
}

const CopyButton: React.FC<CopyButtonProps> = ({ size = "16", content_to_copy, className = "copy_button" }) => {
    const fallbackCopyTextToClipboard = () => {
        const dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = content_to_copy;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }
    const handleCopyButtonClick = () => {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard();
            return;
        }
        navigator.clipboard.writeText(content_to_copy);
    }
    return (
        <div className={styles[`${className}`]} onClick={handleCopyButtonClick} >
            <Image className={styles.copy_button_image} src="/copy.svg" width={size} height={size} alt="copy code icon" />
            <div className={styles.copy_button_text}> Copy </div>
        </div >
    )
};

export default CopyButton;