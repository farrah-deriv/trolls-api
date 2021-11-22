import Link from "next/link";
import Button from "components/common/Button/Button";

type RequestJsonBoxPropsType = {
    title: Array<string>;
    buttonReset: Array<JSX.Element>;
    buttonSend: Array<JSX.Element>;
}

const data_request_json_box: RequestJsonBoxPropsType = {
    title: [ "Request JSON" ],
    buttonReset: [ <Link href={"javascript:;"} key="btn-reset">
        <a id="playground-reset-btn">
            <Button text={"Reset Connection"} />
        </a>
    </Link> ],
    buttonSend: [ <Button key="btn-submit" id="playground-send-btn" text={"Send Request"} /> ],
};

export default data_request_json_box;