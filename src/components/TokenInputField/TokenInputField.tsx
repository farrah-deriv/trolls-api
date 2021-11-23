import style from "./TokenInputField.module.scss";
import Button from "../common/Button/Button";

type TokenInputFieldPropsType = {
    isAppRegistration?: boolean;
    label?: string;
};

const TokenInputField: React.FC<TokenInputFieldPropsType> = ({ isAppRegistration, label }) => {
    return (
        <fieldset id="api-token-fieldset" className={style["api-token-fieldset"]}>
            <div className={style["api-token-wrapper"]}>
                {isAppRegistration ? <p className={style["helper-label"]}>{label}</p> : null}
                <input
                    type="text"
                    id="api-token"
                    className={isAppRegistration ? style["api-token-input-registration"] : style["api-token-input"]}
                    placeholder="API Token"
                />
                <Button
                    id="send-auth-manually-btn"
                    className={`${style["btn-authenticate"]} ${style.bold}`}
                    text="Authenticate"
                />
            </div>
        </fieldset>
    );
};

export default TokenInputField;
