import style from "./Playground.module.scss";
import Title from "components/common/Title";
import SelectRequestInput from "components/SelectRequestInput/SelectRequestInput";
import TokenInputField from "../../components/TokenInputField/TokenInputField";
import RequestJSONBox from "components/RequestJSONBox/RequestJSONBox";
import { useState } from "react";
import playground_requests from "utils/playground_requests";
import data_get_api_token from "utils/data-app-registration";

const PlayGround: React.FC = () => {
    const [request, setRequest] = useState("");
    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = async e => {
        e.preventDefault();
        const request_name = e.currentTarget.value;
        const request_body = playground_requests.find(el => el.name === request_name)?.body;
        setRequest(JSON.stringify(request_body));
    }
    const handleTextAreaInput: React.ChangeEventHandler<HTMLTextAreaElement> = e => setRequest(e.target.value);

    return (
        <div id="content" className={`${style["playground-content"]} ${style.dark}`}>
            <div className={style["header-title"]}>
                <Title headerSize="h1" className="">API Playground</Title>
            </div>
            <div className={`${style["page-wrapper"]} ${style.dark}`}>
                <div className={style["playground"]}>
                    <div className={`${style["playground-page-wrapper"]} ${style.dark}`}>
                        <div className={`${style["playground-api-json"]} ${style.dark}`}>
                            <SelectRequestInput handleChange={handleSelectChange} />
                            <div className={`${style["api-token"]} ${style.dark}`}>
                                <TokenInputField />
                                <div className={style["vertical-separator"]}></div>
                                <div className={style["cta"]}>
                                    <Title headerSize="h3" className={style["title"]}>{data_get_api_token.textFocus}</Title>
                                    <div className={style["cta-button"]}>
                                        {data_get_api_token.button}
                                    </div>
                                </div>
                            </div>
                            <RequestJSONBox request_example={request} handleChange={handleTextAreaInput} />
                        </div>
                        <div id="playground" className={style["playground-api-docs"]}>
                            <div id="playground-req-schema"></div>
                            <div id="playground-res-schema"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default PlayGround;
