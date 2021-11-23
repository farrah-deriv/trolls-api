import React from "react";
import styles from "./Input.module.scss";

type InputPropsType = {
    id: string;
    label: string;
    maxLength: number;
    isLastChild?: boolean;
};

export const Input: React.FC<InputPropsType>  = ({ id, label, maxLength, isLastChild }) => {

    return (
        <>
            <input 
                id={id} 
                type="text" 
                name="input"
                placeholder={label} 
                maxLength={maxLength}
                className={isLastChild ? styles.lastChild : ""}
            />
        </>
    );
};