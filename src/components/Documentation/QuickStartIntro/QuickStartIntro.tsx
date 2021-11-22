import Link from "next/link";
import { PATHS } from "utils";
import styles from "./QuickStartIntro.module.scss";
import common from "../DocsCommon.module.scss"

const quick_start_steps: Array<(string | JSX.Element)[]> = [
    [
        "Open a ",
        <Link key={"deriv-account"} href="https://deriv.com/">
            <a>Deriv account</a>
        </Link>,
        " (either a demo or real account).",
    ],
    [
        "Create a new token using the ",
        <Link key={"admin_scope"} href="https://app.deriv.com/account/api-token">
            <a>admin scope</a>
        </Link>,
        ".",
    ],
    [
        "Register your app to receive your ",
        <strong key={"app_id"}>app_id</strong>,
        " or use ",
        <strong key={"app_id_1089"}>app_id 1089</strong>,
        " to test Deriv API.",
    ],
];


const QuickStartIntro: React.FC = () => (
    <>
        <h1 className={common["doc-main-title"]}>Quickstart to Deriv API</h1>
        <div className={styles["quick-start-intro"]}>
            <p>
                On this page, you’ll find code samples in various programming languages showing you how to work with the
                Deriv API to perform some of the most important operations.
            </p>
            <p>
                You can find all of the other available calls in the{" "}
                <Link key={"admin_scope"} href={PATHS.PLAYGROUND}>
                    <a>API Playground</a>
                </Link>
                .
            </p>
            <h3 className={`${common["api-sub-title"]} bold`}>Before you begin</h3>
            <ul className="bullet">
                {quick_start_steps.map((step, i) => (
                    <li key={i}>{step}</li>
                ))}
            </ul>
            <h3 className={`${styles["api-sub-title"]} bold`}>Setting up your environment</h3>
            <p>
                Instructions for setting up your environment and running the examples in your desired programming
                language are given as comments in the code samples.
            </p>
        </div>
    </>
);

export default QuickStartIntro;
