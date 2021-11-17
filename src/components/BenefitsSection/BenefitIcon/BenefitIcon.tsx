import Image from "next/image";
import styles from "./BenefitIcon.module.scss";

export type BenefitPropsType = {
    title: string;
    imgPath: string;
};

export const BenefitIcon: React.FC<BenefitPropsType> = props => {
    const { title, imgPath } = props;

    return (
        <div className={`${styles["single-container"]}`}>
            <Image alt={title} src={imgPath} width="72" height="72" />
            <p>{title}</p>
        </div>
    );
};
