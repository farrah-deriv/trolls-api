import styles from "./RequestJSONBox.module.scss";
import data_request_json_box from "utils/data-request-json-box";
import Title from "components/common/Title";

type RequestJSONBoxPropsType = {
    isAppRegistration?: boolean;
}

const RequestJSONBox: React.FC<RequestJSONBoxPropsType> = ({ isAppRegistration }) => {
    const{ title, buttonReset, buttonSend } = data_request_json_box;  
    return (
        <>
            <div className={isAppRegistration ? styles["form-content"] : styles["playground-box"]}>
                {isAppRegistration ? 
                    ( <Title className={styles["app-registration-subheader"]} headerSize="h3">{title}</Title> ) :
                    ( <label className={styles["inline-label"]}>{ title }</label> )}
                <textarea 
                    id="playground-request" 
                    className={isAppRegistration ? `${styles["textarea-request"]} ${styles["registration-request"]}` 
                        : `${styles["textarea-request"]} ${styles["playground-request"]}`} 
                    placeholder={title.toString()} 
                    spellCheck={isAppRegistration ? false : undefined}
                />
                <div className={styles["json-btn-wrapper"]}>
                    <div className={isAppRegistration ? `${styles["btn-reset"]} ${styles["gray-btn-submit"]}` 
                        : `${styles["btn-reset"]} ${styles["btn-reset-playground"]}`}>
                        {buttonReset}
                    </div>
                    <div className={styles["btn-submit"]}>
                        {buttonSend}
                    </div>
                </div>
                <div id="playground-console"></div>
            </div>
        </>
    )
};

export default RequestJSONBox;
