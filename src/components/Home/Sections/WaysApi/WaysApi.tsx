import React from "react";
import style from "./WaysApi.module.scss"
import Way from "./Way"

const WaysApi: React.FC = () => (
    <div className={style["main-page-row"] + " " + style["gray"]}>
        <div className={style["column-container"]}>
            <div className={style["ways-container"]}>
                <div className={style["title"]}>
                    <h2 >Ways to earn with Deriv API</h2>
                </div>
                <div>
                    <Way image={"checklist-icon.svg"} way_text="Register your app with Deriv, and add a percentage markup to the contract prices to profit from every contract payout." />
                    <Way image={"checklist-icon.svg"} way_text="Sign up as an affiliate, build your app, and get commission on every signup and trade completed via your app." />
                    <Way image={"checklist-icon.svg"} way_text="Sign up as a payment agent , and use our API to build your own custom payment website to earn commission on every payment you process for Deriv’s clients." />
                </div>
            </div>
        </div>
    </div >
)

export default WaysApi
