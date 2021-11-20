import style from "../../pages/playground/Playground.module.scss";
import Button from "components/common/Button/Button";
import React, { useRef, useState } from "react";
import { api } from "appid";
import ConsoleMessage from "components/ConsoleMessage/ConsoleMessage";

type RequestJSONBoxPropTypes = {
    request_example: string;
    handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const RequestJSONBox: React.FC<RequestJSONBoxPropTypes> = ({ request_example, handleChange }) => {
    const [messages, setMessages] = useState([] as Array<any>);
    const request_input = useRef<HTMLTextAreaElement>(null);

    const sendRequest = () => {
        const request = request_input.current && JSON.parse(request_input.current?.value);
        request && api.send(request)
            .then((res: any) => setMessages([...messages, {body: request, type: "req"}, {body: res, type: "res"}]))
            .catch((err: any) => setMessages([...messages, {body: request, type: "req"}, {body: err, type: "err"}]))
    }

    return (
        <div className={style["playground-box"]}>
            <label className={style["inline-label"]}>Request JSON</label>
            <textarea 
                id="playground-request" 
                placeholder="Request JSON" 
                ref={request_input}
                value={request_example}
                onChange={handleChange}
            />
            <div className={style["json-btn-wrapper"]}>
                <Button className={style["btn-reset"]} text={"Reset Connection"} />
                <Button 
                    id="playground-send-btn" 
                    className={style["btn-submit"]} 
                    text={"Send Request"}
                    clickHandler={sendRequest} 
                />
            </div>
            <div id="playground-console" className={style["playground-console"]}>
                {messages?.map((message, index) => <ConsoleMessage key={"message"+index} message={message}></ConsoleMessage>)}
            </div>
        </div>
    )
};

export default RequestJSONBox;
