import React from "react";
import s from "./GetStarted.module.scss"
import GetStartedCard from "./GetStartedCard"

const GetStarted: React.FC = () => {
    return (
        <div className={s["main-page-row"] + " " + s["with-pattern"]}>
            <div className={s["column-container"]}>
                <h2>Get started with our API in 3 simple steps:</h2>
                <div className={s["card-container"]}>
                    <GetStartedCard number={"1"} href='https://deriv.com/signup/' icon='sign-up.svg' title='Sign up' content='Create a free Deriv account to access our API (or use your Binary.com login details).' />
                    <GetStartedCard number={"2"} href='/docs/app-registration' icon='register-your-app.svg' title='Register your app' content='Fill out the registration form to start using Deriv API.' />
                    <GetStartedCard number={"3"} href='/docs/api-guide/' icon='guide.svg' title='Read our guide' content='Our API quick start guide covers the essentials you need to start building your app right away.' />
                </div>
                <span className={s["term-conditions"]}>
          By using our API, you confirm that you have read and agreed to our
                    <a href="https://deriv.com/tnc/business-partners-api-user.pdf" target="_blank" rel="noopener noreferrer"> terms and conditions.</a>
                </span>
            </div>
        </div>
    )
}

export default GetStarted
