import style from "./RequestJSONBox.module.scss";
import React, { useRef, useState } from "react";
import { api } from "appid";
import ConsoleMessage from "components/ConsoleMessage/ConsoleMessage";
import data_request_json_box from "utils/data-request-json-box";
import Title from "components/common/Title";
import Button from "components/common/Button/Button";

type RequestJSONBoxPropTypes = {
    request_example?: string;
    handleChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    isAppRegistration?: boolean;
};

const RequestJSONBox: React.FC<RequestJSONBoxPropTypes> = ({ request_example, handleChange, isAppRegistration }) => {
    const [messages, setMessages] = useState([] as Array<any>);
    const request_input = useRef<HTMLTextAreaElement>(null);
    const{ title, buttonReset } = data_request_json_box;
    const sendRequest = () => {
        const request = request_input.current && JSON.parse(request_input.current?.value);
        request && api.send(request)
            .then((res: any) => setMessages([...messages, {body: request, type: "req"}, {body: res, type: "res"}]))
            .catch((err: any) => setMessages([...messages, {body: request, type: "req"}, {body: err, type: "err"}]))
    }
    return (
        <div className={isAppRegistration ? style["form-content"] : style["playground-box"]}>
            {isAppRegistration ? 
                ( <Title className={style["app-registration-subheader"]} headerSize="h3">{title}</Title> ) :
                ( <label className={style["inline-label"]}>{ title }</label> )}
            <textarea 
                id="playground-request"
                className={isAppRegistration ? `${style["textarea-request"]} ${style["registration-request"]}` 
                    : `${style["textarea-request"]} ${style["playground-request"]}`}
                placeholder={title.toString()} 
                ref={request_input}
                value={request_example}
                onChange={handleChange}
                spellCheck={isAppRegistration ? false : undefined}
            />
            <div className={style["json-btn-wrapper"]}>
                <div className={isAppRegistration ? `${style["btn-reset"]} ${style["gray-btn-submit"]}` 
                    : `${style["btn-reset"]} ${style["btn-reset-playground"]}`}>
                    {buttonReset}
                </div>
                <div className={style["btn-submit"]}>
                    <Button 
                        id="playground-send-btn"
                        className={style["btn-submit"]}
                        text={"Send Request"}
                        clickHandler={ sendRequest }
                    />
                </div>
            </div>
            <div id="playground-console" className={style["playground-console"]}>
                {messages?.map((message, index) => <ConsoleMessage key={"message"+index} message={message}></ConsoleMessage>)}
            </div>
        </div>
    )
};

export default RequestJSONBox;
