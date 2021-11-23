import { AppAuthentificationRegistrationPropsType, RegisterYourAppPropsType } from "../components/Documentation/AppAuthentificationRegistration/AppAuthentificationRegistration";
import Link from "next/link";
import Button from "components/common/Button/Button";

const data_get_api_token: AppAuthentificationRegistrationPropsType = {
    title: [ "App registration" ],
    textFirstPart: [ "Authenticate your API token before using it in your app." ],
    textSecondPart: [ "" ],
    textFocus: [ "Looking for your API token?" ], 
    button: [ <Link href={"https://app.deriv.com/account/api-token"} key="getApiToken">
        <a target="tokeninput">
            <Button text={"Get your API token"} className="cta-button" />
        </a>
    </Link>],
    textFieldset: [ "API Token" ],
    labelButton: [ "Authenticate" ],
    titleRegister: [ "Register your app" ],
};

export const data_register_your_app: Array<RegisterYourAppPropsType> = [
    { id: "application-name", label: "Name (Required)", maxLength: 48, helperText: "" },
    { id: "application-redirect_uri", label: "Redirect URL (Required)", maxLength: 255, helperText: "" },
    { id: "application-verification_uri", label: "Verification URL", maxLength: 255, helperText: "" },
    { id: "aplication-homepage", label: "Homepage URL", maxLength: 255, helperText: "" },
    { id: "application-github", label: "Github URL", maxLength: 255, helperText: "" },
    { id: "application-appstore", label: "Appstore URL", maxLength: 255, helperText: "" },
    { id: "application-googleplay", label: "Google Play URL", maxLength: 255, helperText: "" },
    { id: "application-app_markup_percentage", label: "Markup Percentage", maxLength: 255, helperText: "minimum 0.00 and maximum 5.00" },
];

export default data_get_api_token;