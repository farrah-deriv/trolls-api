import React from "react";
import common from "../DocsCommon.module.scss";
import CodeLink from "../../common/CodeLink";
import {tSArrayType} from "@babel/types";
import Title from "../../common/Title/Title";

type CallOptionsProps = {
    category: number;
};

const prices = [
    {
        message: "To price an option, call ",
        call: "proposal"
    },
    {
        message: "To price options that are open in a client's portfolio, use ",
        call: "proposal_open_contract"
    },
]

const payment = [
    {
        message: "Clients may withdraw via a payment agent using ",
        call: "paymentagent_withdraw"
    },
    {
        message: "Payment agents may credit clients’ accounts using ",
        call: "paymentagent_transfer"
    },
]

const utility = [
    {
        message: "To keep the connection alive, use ",
        call: "ping"
    },
    {
        message: "Get the server time with ",
        call: "time"
    },
    {
        message: "Get the status of the website with ",
        call: "website_status"
    }
]

const categories = [prices, payment, utility];

const CallOptions: React.FC<CallOptionsProps> = ({ category }) => {
    return (
        <div className={common["text-block"]}>
            <Title className={common["doc-sub-title"]} headerSize={"h2"}>Option prices</Title>
            <ul className="bullet">
                {categories[category].map((item, index) => {
                    return (
                        <li key={item.call}>{item.message}
                            <CodeLink href={`/playground/#${item.call}`}>{item.call}</CodeLink>.
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default CallOptions;
