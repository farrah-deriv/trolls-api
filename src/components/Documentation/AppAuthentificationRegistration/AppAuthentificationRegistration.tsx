import Title from "components/common/Title";
import TextContent from "components/Home/Sections/TextContent";
import React from "react";
import data_get_api_token, { data_register_your_app }  from "utils/data-app-registration";
import styles from "./AppAuthentificationRegistration.module.scss";
import Input from "components/common/InputList";
import TokenInputField from "components/TokenInputField/TokenInputField";
import RequestJSONBox from "components/RequestJSONBox";
import Table from "components/common/Table";
import { data_table_app_registration } from "utils/data-table-app-registration";
import Scopes from "../Scopes";
import { data_scopes } from "utils/data-scopes";
import Button from "components/common/Button/Button";

export type AppAuthentificationRegistrationPropsType = {
    title: Array<string>;
    textFirstPart: Array<string>;
    textSecondPart: Array<string>;
    textFocus: Array<string>;
    button: Array<JSX.Element>;
    textFieldset: Array<string>;
    labelButton: Array<string>;
    titleRegister: Array<string>;
}

export type RegisterYourAppPropsType = {
    id: string;
    label: string;
    maxLength: number;
    helperText: string;
}

const AppAuthentificationRegistration: React.FC = () => {

    const { 
        textFocus, 
        button, 
        textFieldset, 
        titleRegister 
    } = data_get_api_token;

    return (
        <>
            <div className={styles.registrationTitle}>
                <TextContent data={data_get_api_token}/>
            </div>
            <div className={styles.cta}>
                <Title headerSize="h3" className={styles.textFocus}>{textFocus}</Title>
                <div className={styles["cta-button"]}>
                    {button}
                </div>
            </div>
            <TokenInputField
                isAppRegistration={true}
                label={textFieldset.toString()}
            />
            <div className={styles["horizontal-separator-grey"]}></div>
            <form id={styles.frmNewApplication}>
                <div className={styles["form-content"]}>
                    <fieldset>
                        <Title headerSize="h2" className={styles.titleRegister}>{titleRegister}</Title>
                        <Input inputsData={data_register_your_app} />
                    </fieldset>
                    <Scopes dataScopes={data_scopes}/>
                    <Button id="btnRegister" className={styles["primary-btn-submit"]} text={"Register"} />
                </div>
            </form>
            <div className={styles["horizontal-separator-grey"]}></div>
            <div className={styles["request-container"]}>
                <Table data_table={data_table_app_registration} />
                <fieldset className={styles["mb-0"]}>
                    <RequestJSONBox
                        isAppRegistration={true}
                    />
                </fieldset>
            </div>
        </>
    )
};

export default AppAuthentificationRegistration;

