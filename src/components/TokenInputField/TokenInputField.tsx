import style from "./TokenInputField.module.scss";
import Button from "../common/Button/Button";

const TokenInputField = () => {
    return (
        <fieldset id="api-token-fieldset">
            <input type="text" id="api-token" className={style["api-token-input"]} placeholder="API Token" />
            <Button
                id="send-auth-manually-btn"
                className={`${style["btn-authenticate"]} ${style.bold}`}
                text={"Authenticate"}
            />
        </fieldset>
    );
};

export default TokenInputField;
