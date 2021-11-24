import { api, getIsConnectedBefore } from "appid";
import Button from "components/common/Button/Button";
import React from "react";
import style from "./ResetSendButtonsBlock.module.scss";

type ResetSendButtonsBlockPropsType = {
    isAppRegistration: boolean | undefined;
    sendRequest: React.MouseEventHandler<HTMLButtonElement>;
};

export const ResetSendButtonsBlock: React.FC<ResetSendButtonsBlockPropsType> = React.memo(
    ({ isAppRegistration, sendRequest }) => {
        return (
            <div className={style["json-btn-wrapper"]}>
                <div
                    className={
                        isAppRegistration
                            ? `${style["btn-reset"]} ${style["gray-btn-submit"]}`
                            : `${style["btn-reset"]} ${style["btn-reset-playground"]}`
                    }
                >
                    <div id="playground-reset-btn">
                        <Button
                            text={"Reset Connection"}
                            clickHandler={() => {
                                if (getIsConnectedBefore()) {
                                    api.connection.close();
                                    console.log("s");
                                }
                            }}
                        />
                    </div>
                </div>
                <div className={style["btn-submit"]}>
                    <Button
                        id="playground-send-btn"
                        className={style["btn-submit"]}
                        text={"Send Request"}
                        clickHandler={sendRequest}
                    />
                </div>
            </div>
        );
    }
);

ResetSendButtonsBlock.displayName = "ResetSendButtonsBlock";
