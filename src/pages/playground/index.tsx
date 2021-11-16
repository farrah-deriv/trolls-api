import style from "./Playground.module.scss";

const PlayGround: React.FC = () => (
    <div id="content" className={`${style["playground-content"]} ${style.dark}`}>
        <h1 className={`${style["dark"]} ${style["header"]}`}>API Playground</h1>
        <div className={`${style["page-wrapper"]} ${style.dark}`}>
            <div className={style["playground"]}>
                <div className={`${style["playground-page-wrapper"]} ${style.dark}`}>
                    <div className={`${style["playground-api-json"]} ${style.dark}`}>
                        <fieldset>
                            <select id="api-call-selector">
                                <option selected disabled hidden>
                                    Select API Call - Version 3
                                </option>
                                <optgroup label="choose any option">
                                    <option value="{{ method.name }}"></option>
                                </optgroup>
                            </select>
                        </fieldset>
                        <div className={`${style["api-token"]} ${style.dark}`}>
                            <fieldset id="api-token-fieldset">
                                <input
                                    type="text"
                                    id="api-token"
                                    className={style["api-token-input"]}
                                    placeholder="API Token"
                                />
                                <button
                                    id="send-auth-manually-btn"
                                    className={`${style["btn-authenticate"]} ${style.bold}`}
                                >
                                    Authenticate
                                </button>
                            </fieldset>
                            <div className={style["vertical-separator"]}></div>
                            <div className={style["cta"]}>
                                <p className={style["title"]}>Looking for your API token?</p>
                                <a target="tokeninput" href="https://app.deriv.com/account/api-token">
                                    <div className={style["cta-button"]}>Get your API token</div>
                                </a>
                            </div>
                        </div>
                        <div className={style["playground-box"]}>
                            <label className={style["inline-label"]}>Request JSON</label>
                            <textarea id="playground-request" placeholder="Request JSON"></textarea>
                            <div className={style["json-btn-wrapper"]}>
                                <a id="playground-reset-btn" href="javascript:;">
                                    <button className={style["btn-submit"]}>Reset Connection</button>
                                </a>
                                <button className={style["btn-reset"]} id="playground-send-btn">
                                    Send Request
                                </button>
                            </div>
                            <div id="playground-console"></div>
                        </div>
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
