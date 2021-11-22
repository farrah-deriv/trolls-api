import React from "react";
import Input from "../Input";
import styles from "./InputList.module.scss";

type DataType = {
    id: string;
    label: string;
    maxLength: number;
    helperText: string;
}

type InputListPropsType = {
    inputsData: Array<DataType>;
};

export const InputList: React.FC<InputListPropsType> = ({inputsData}) => {

    const inputs = inputsData.map((item: { id: string; label: string; maxLength: number; helperText: string; }, idx ) => {
        const { ...itemProps } = item;
        const isFilled = item.helperText.length > 0; 
        const isLastChild = idx === inputsData.length - 1; 

        return (
            <div key={item.id} className={styles["input-wrapper"]} >
                <p className={styles["helper-label"]}>{item.label}</p>
                <Input 
                    {...itemProps}
                    isLastChild={isLastChild}
                />
                {isFilled ? (
                    <p className={styles["helper-text"]}>{item.helperText}</p>
                ): null}
            </div>
        );
    });

    return (
        <>
            {inputs}
        </>
    );
};