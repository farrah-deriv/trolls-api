import React from "react";

type QuickStartPropsType = {
    // props
};

const QuickStart: React.FC<QuickStartPropsType> = () => (
    <>
        <h1 className="doc-main-title">Quickstart to Deriv API</h1>
        <div>
            <p>
                On this page, you&#39;ll find code samples in various programming languages showing you how to work with
                the Deriv API to perform some of the most important operations.
            </p>
            <p>
                You can find all of the other available calls in the{" "}
                <a href="{{ branch }}/playground/">API Playground</a>.
            </p>
            <h3 className="api-sub-title bold">Before you begin</h3>
            <ul className="bullet">
                <li>
                    Open a <a href="https://deriv.com/">Deriv account</a> (either a demo or real account).
                </li>
                <li>
                    Create a new token using the <a href="https://app.deriv.com/account/api-token">admin scope</a>.
                </li>
                <li>
                    Register your app to receive your <b>app_id</b> or use <b>app_id 1089</b> to test Deriv API.
                </li>
            </ul>
            <h3 className="api-sub-title bold">Setting up your environment</h3>
            <p>
                Instructions for setting up your environment and running the examples in your desired programming
                language are given as comments in the code samples.
            </p>
        </div>
    </>
);

export default QuickStart;