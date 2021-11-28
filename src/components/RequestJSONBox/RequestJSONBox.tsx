import { APIType } from "appid";
import Title from "components/common/Title";
import ConsoleMessage from "components/ConsoleMessage/ConsoleMessage";
import { InputListTextPropTypes } from "components/Documentation/AppAuthentificationRegistration/AppAuthentificationRegistrationPropTypes";
import { MessageType } from "components/PlaygroundComponent/PlaygroundComponent";
import { ResetSendButtonsBlock } from "components/ResetSendButtonsBlock/ResetSendButtonsBlock";
import React from "react";
import styles from "components/PlaygroundComponent/PlaygroundComponent.module.scss";
import style from "./RequestJSONBox.module.scss";

type RequestJSONBoxPropTypes = {
    request_example?: string;
    messages?: Array<MessageType>; // will be required later
    handleChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    isAppRegistration?: boolean;
    request_input?: React.RefObject<HTMLTextAreaElement>; // will be required later
    sendRequest?: () => void; // will be required later
    setMessages?: (message: Array<MessageType>) => void; // will be required later
    current_api?: APIType; // will be required later
    inputListText?: InputListTextPropTypes;
    isRegister?: boolean;
};

const RequestJSONBox: React.FC<RequestJSONBoxPropTypes> = ({
    request_example,
    messages,
    handleChange,
    isAppRegistration,
    request_input,
    sendRequest,
    setMessages,
    current_api,
    inputListText,
    isRegister,
}) => {
    return (
        <div className={isAppRegistration ? style["form-content"] : style["playground-box"]}>
            {isAppRegistration ? (
                <Title className={style["app-registration-subheader"]} headerSize="h3">
                    Request JSON
                </Title>
            ) : (
                <label className={style["inline-label"]}>Request JSON</label>
            )}
            <textarea
                id="playground-request"
                className={
                    isAppRegistration
                        ? `${style["textarea-request"]} ${style["registration-request"]}`
                        : `${style["textarea-request"]} ${style["playground-request"]}`
                }
                placeholder={"Request JSON"}
                ref={request_input}
                value={ isAppRegistration && isRegister ? JSON.stringify(inputListText, null, 2) : request_example }
                onChange={handleChange}
                spellCheck={isAppRegistration ? false : undefined}
            />
            <ResetSendButtonsBlock
                isAppRegistration={isAppRegistration}
                sendRequest={sendRequest}
                resetMessagesInConsole={setMessages}
                current_api={current_api}
            />
            {messages && (
                <div id="playground-console" className={style["playground-console"]}>
                    {messages?.map((message, index) => (
                        <ConsoleMessage key={"message" + index} message={message}></ConsoleMessage>
                    ))}
                </div>
            )}
        </div>
    );
};

export default React.memo(RequestJSONBox);
