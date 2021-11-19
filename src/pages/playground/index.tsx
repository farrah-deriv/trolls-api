import style from "./Playground.module.scss";
import Title from "components/common/Title";
import SelectRequestInput from "components/SelectRequestInput/SelectRequestInput";
import TokenInputField from "../../components/TokenInputField/TokenInputField";
import Button from "components/common/Button/Button";
import Link from "next/dist/client/link";
import RequestJSONBox from "components/RequestJSONBox/RequestJSONBox";

const PlayGround: React.FC = () => (
    <div id="content" className={`${style["playground-content"]} ${style.dark}`}>
        <div className={style["header-title"]}>
            <Title headerSize="h1">API Playground</Title>
        </div>
        <div className={`${style["page-wrapper"]} ${style.dark}`}>
            <div className={style["playground"]}>
                <div className={`${style["playground-page-wrapper"]} ${style.dark}`}>
                    <div className={`${style["playground-api-json"]} ${style.dark}`}>
                        <SelectRequestInput />
                        <div className={`${style["api-token"]} ${style.dark}`}>
                            <TokenInputField />
                            <div className={style["vertical-separator"]}></div>
                            <div className={style["cta"]}>
                                <p className={style["title"]}>Looking for your API token?</p>
                                <Link href="https://app.deriv.com/account/api-token">
                                    <a target="tokeninput">
                                        <Button className={style["cta-button"]} text={"Get your API token"} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <RequestJSONBox />
                    </div>
                    <div id="playground" className={style["playground-api-docs"]}>
                        <div id="playground-req-schema"></div>
                        <div id="playground-res-schema"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PlayGround;
