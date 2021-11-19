import style from "../../pages/playground/Playground.module.scss";
import Link from "next/dist/client/link";
import Button from "components/common/Button/Button";
import { useRef } from "react";
import { api } from "appid";

const RequestJSONBox: React.FC<{ request: string}> = ({ request }) => {
    const request_input = useRef<HTMLTextAreaElement>(null);

    const sendRequest = () => {
        const request = request_input.current?.value;
        console.log(request)
        request && api.send(JSON.parse(request)).then((res:any) => console.log(new Date(res.time)))
    }

    return (
        <div className={style["playground-box"]}>
            <label className={style["inline-label"]}>Request JSON</label>
            <textarea id="playground-request" placeholder="Request JSON" ref={request_input} value={request} onChange={() => {}}></textarea>
            <div className={style["json-btn-wrapper"]}>
                <Link href={"javascript:;"}>
                    <a id="playground-reset-btn">
                        <Button className={style["btn-reset"]} text={"Reset Connection"} />
                    </a>
                </Link>
                <Button 
                    id="playground-send-btn" 
                    className={style["btn-submit"]} 
                    text={"Send Request"}
                    clickHandler={sendRequest} 
                />
            </div>
            <div id="playground-console"></div>
        </div>
    )
};

export default RequestJSONBox;
