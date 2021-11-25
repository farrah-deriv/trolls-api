import { APIType } from "appid";
import Title from "components/common/Title";
import ConsoleMessage from "components/ConsoleMessage/ConsoleMessage";
import { ResetSendButtonsBlock } from "components/ResetSendButtonsBlock/ResetSendButtonsBlock";
import { MessageType } from "pages/playground";
import React from "react";
import styles from "../../pages/playground/Playground.module.scss";
import style from "./RequestJSONBox.module.scss";

type RequestJSONBoxPropTypes = {
    request_example?: string;
    messages: Array<MessageType>;
    handleChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    isAppRegistration?: boolean;
    request_input: React.RefObject<HTMLTextAreaElement>;
    sendRequest: () => void;
    setMessages: (message: Array<MessageType>) => void;
    current_api: APIType;
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
                value={request_example}
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
                <div id="playground-console" className={styles["playground-console"]}>
                    {messages?.map((message, index) => (
                        <ConsoleMessage key={"message" + index} message={message}></ConsoleMessage>
                    ))}
                </div>
            )}
        </div>
    );
};

export default React.memo(RequestJSONBox);
