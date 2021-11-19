import style from "../../pages/playground/Playground.module.scss";
import Link from "next/dist/client/link";
import Button from "components/common/Button/Button";

const RequestJSONBox = () => (
    <div className={style["playground-box"]}>
        <label className={style["inline-label"]}>Request JSON</label>
        <textarea id="playground-request" placeholder="Request JSON"></textarea>
        <div className={style["json-btn-wrapper"]}>
            <Link href={"javascript:;"}>
                <a id="playground-reset-btn">
                    <Button 
                        className={style["btn-reset"]} 
                        text={"Reset Connection"}
                    />
                </a>
            </Link>
            <Button 
                id="playground-send-btn" 
                className={style["btn-submit"]} 
                text={"Send Request"}
            />
        </div>
        <div id="playground-console"></div>
    </div>
)

export default RequestJSONBox;