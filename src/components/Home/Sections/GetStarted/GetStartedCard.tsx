import React from "react";
import style from "./GetStarted.module.scss"
import Image from "next/image"

const GetStartedCard: React.FC<cardPropsType> = ({ number, href, icon, title, content }) => {
    return (
        <a className={style["main-page-card"]} href={href} rel="noopener noreferrer">
            <div className={style["header"]}>
                <h3>{number}. {title}</h3>
                <div className={style["image"]}>
                    <Image src={"/" + icon} alt={icon + " " + "icon"} width={32} height={32} />
                </div>
            </div>
            <div className={style["content"] + " " + style["hide-on-mobile"]} >
                {content}
            </div>
            <div className={style["content"] + " " + style["hide-on-desktop"]}>
                {content}
            </div>
        </a >
    )
}
type cardPropsType = {
    number: string,
    href: string,
    icon: string,
    title: string,
    content: string,
}

export default GetStartedCard
