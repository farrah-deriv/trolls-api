import React from "react";
import style from "./WaysApi.module.scss"
import Image from "next/image"

const Way: React.FC<WapPropType> = ({ way_text, image }) => {
    const img_alt = image.split(".")[0]

    return (
        <div className={style["main-page-card"] + " " + style["ways"]}>
            <div className={style["image"]}>
                <Image src={"/" + image} alt={`${img_alt} icon`} width={32} height={32} />
            </div>
            <p>{way_text}</p>
        </div>
    )
}

type WapPropType = {
    way_text: string,
    image: string,
}

export default Way
