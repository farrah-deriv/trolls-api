import React from "react";
import Link from "next/link";
import styles from "./ApiGuideContent.module.scss";
import common from "../DocsCommon.module.scss";
import Title from "../../common/Title/Title";
import CodeLink from "../../common/CodeLink";
import CallOptions from "./CallOptions"
import Card from "./Card";

const ApiGuideContent: React.FC = () => (
    <>
        <Title className={common["doc-main-title"]} headerSize={"h1"}>API guide</Title>
        <div className={common["text-block"]}>
            <Title className={styles["app-registration-header"]} headerSize={"h3"}>App registration</Title>
            <Title className={common["api-sub-title"]} headerSize={"h3"}>
                Register your app before using our API. Here’s how:
            </Title>
            <ol>
                <li>
                    <Link href="https://deriv.com">
                        <a>Open a Deriv account</a>
                    </Link> (either a demo or real account).
                </li>
                <li>
                    <Link href="https://app.deriv.com/account/api-token">
                        <a>Create a new token</a>
                    </Link> using the <strong>admin</strong> scope.
                </li>
                <li>
                    Register your app to obtain your{" "}
                    <CodeLink href="/docs/app-registration/">app_id</CodeLink>.
                </li>
            </ol>
        </div>
        <div className={common["text-block"]}>
            <Title className={common["doc-sub-title"]} headerSize={"h2"}>Client authentication</Title>
            <p>
                Some API calls require client authentication (e.g. {" "}
                <CodeLink href="/playground/#portfolio">portfolio</CodeLink>{" "}
                ) while others don’t (e.g.
                <CodeLink href="/playground/#ticks">ticks</CodeLink>).
            </p>
            <Title className={common["api-sub-title2"]} headerSize={"h3"}>
                There are 2 ways to authenticate clients:
            </Title>
            <ol>
                <li><b>Client authentication by app-specific API tokens</b></li>
                <p>
                    Clients can generate API tokens by logging to their Deriv account and
                    going to <strong>Security & Limits</strong> `{">"}`
                    <CodeLink href="https://app.deriv.com/account/api-token">API token</CodeLink>.
                </p>
                <li><b>Client authentication by OAuth</b></li>
                <p>Send clients to:</p>

                <Card url="https://oauth.binary.com/oauth2/authorize?app_id=[..insert app_id..]" />
                <p>
                    Our system will authenticate the client and send them to the redirect
                    URL you gave us during app registration.A valid token will be returned
                    in the{" "}
                    <CodeLink href="/playground/#api_token">token</CodeLink>{" "}
                    parameter of the URL.
                </p>
                <p>
                    To display the authentication form in another language, add the language
                    code to the OAuth URL as follows:
                </p>

                <Card url="https://oauth.binary.com/oauth2/authorize?app_id=[..insert app_id..]&l=ZH_CN" />
                <p className="ul-paragraph">
                    Complete the authentication by calling {" "}
                    <CodeLink href="/playground/#authorize">authorize</CodeLink>{" "}
                    using clients’ API token.
                </p>
            </ol>
        </div>
        <div className={common["text-block"]}>
            <Title className={common["doc-sub-title"]} headerSize={"h2"}>Token scopes</Title>
            <h3 className="bold">Each token can have one or more of these scopes:</h3>
            <ul className="bullet">
                <li>read - for calls that only read client’s data</li>
                <li>trade - for calls that can create trades</li>
                <li>
                    trading_information - for calls that can read information on client’s trades
                </li>
                <li>
                    payments - for calls that can access the cashier (for deposits and withdrawals)
                </li>
                <li>admin - for calls that can change client’s settings</li>
            </ul>
            <p>
                Explore our{" "}
                <Link href="/playground/">
                    <a>API playground</a>
                </Link>{" "} to learn about the required scope for all our API calls.
            </p>
        </div>
        <div className={common["text-block"]}>
            <Title className={common["doc-sub-title"]} headerSize={"h2"}>Opening Deriv accounts</Title>
            <p>
                To open accounts via our API, you’ll first need to verify the client`&apos;`s
                email address using{" "}
                <CodeLink href="/playground/#verify_email">verify_email</CodeLink>.
            </p>
            <p>
                To open a virtual account, use
                <CodeLink href="/playground/#new_account_virtual">new_account_virtual</CodeLink>{" "}
                and then{" "}
                <CodeLink href="/playground/#topup_virtual">topup_virtual</CodeLink>{" "}
                to top-up the new account with virtual money.
            </p>
            <p>
                To open a real account, use{" "}
                <CodeLink href="/playground/#residence_list">residence_list</CodeLink>{" "}
                and{" "}
                <CodeLink href="/playground/#states_list">states_list</CodeLink>{" "}
                to get the information needed for the account opening form. Once you have all the
                necessary information, use
                <CodeLink href="/playground/#new_account_real">new_account_real</CodeLink>
            </p>
            <p>
                If you are a registered affiliate, remember to include the {" "}
                <strong>affiliate_token</strong> parameter. You’ll earn commission for
                every new account.
            </p>
            <p>
                Based on the client’s country of residence, use{" "}
                <CodeLink href="/playground/#landing_company">landing_company</CodeLink>{" "}
                to determine which landing company the account will be opened with. Use
                <CodeLink href="/playground/#landing_company_details">landing_company_details</CodeLink>{" "}
                to get information about the landing company.
            </p>
        </div>
        <div className={common["text-block"]}>
            <Title className={common["doc-sub-title"]} headerSize={"h2"}>Accounting functionalites</Title>
            <p>
                You may get a client`&apos;`s
                <CodeLink href="/playground/#portfolio">portfolio</CodeLink>{" "},
                <CodeLink href="/playground/#statement">statement</CodeLink>{" "},
                <CodeLink href="/playground/#profit_table">profit_table</CodeLink>{" "},
                and their account
                <CodeLink href="/playground/#balance">balance</CodeLink>.
                You may also sell an expired contract with{" "}
                <CodeLink href="/playground/#sell_expired">sell_expired</CodeLink>,
                or generate a real time stream of
                <CodeLink href="/playground/#transaction">transactions</CodeLink>
            </p>
        </div>
        <CallOptions category={0} title={"Option prices"} />
        <CallOptions category={1} title={"Payment agents"} />
        <CallOptions category={2} title={"Utility calls"} />
        <div className={common["text-block"]}>
            <Title className={common["doc-sub-title"]} headerSize={"h2"}>Streams</Title>
            <p>
                Some functions generate streams of data (e.g.{" "}
                <CodeLink href="/playground/#ticks">ticks</CodeLink>) while others don’t. Use{" "}
                <CodeLink href="/playground/#forget">forget</CodeLink>{" "}to cancel an
                outstanding stream.
            </p>
        </div>
    </>
);

export default ApiGuideContent;
