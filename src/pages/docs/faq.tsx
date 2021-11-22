import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import DocsLayout from "components/Documentation/Layout/DocsLayout";
import Accordion from "components/common/Accordion/Accordion";
import AccordionItem from "components/common/Accordion/AccordionItem";
import CodeContent from "components/common/CodeContent/CodeContent";
import styles from "components/common/Accordion/Accordion.module.scss";
import { PATHS } from "utils";

export const getStaticProps: GetStaticProps = async () => {
    const js_directory = path.join(process.cwd(), "public", "/demoCode");
    const js_path = path.join(js_directory, "server-status-notification.js");
    const js_content = await fs.readFile(js_path, "utf8");

    return {
        props: { js_content },
    };
};

const FAQ: InferGetStaticPropsType<typeof getStaticProps> = ({ ...props }) => {
    return (
        <div className="with-bg">
            <h1 className="doc-main-title">FAQ</h1>
            <Accordion>
                <AccordionItem title="What is the easiest way to get started with Deriv API? ">
                    <p>
                        View our <Link href="/docs">code samples</Link>. You can use these code snippets in your app to
                        open a connection to our WebSocket API service. Explore our
                        <Link href="/playground"> API playground</Link> for the method calls you need for your app.
                    </p>
                </AccordionItem>
                <AccordionItem title="How do I build my own front-end app?">
                    <p>
                        Simply copy our open-source code and adapt it for your needs. Follow these steps to get started:
                    </p>
                    <ol>
                        <li>
                            Open a <Link href="https://www.github.com">GitHub</Link> account.
                        </li>
                        <li>
                            Download the <Link href="https://desktop.github.com">GitHub Desktop application</Link>.
                        </li>
                        <li>
                            Fork any of our{" "}
                            <Link href="https://github.com/binary-com/?q=&type=&language=javascript&sort=">
                                open-source front-end repositories
                            </Link>
                            .
                        </li>
                        <li>Make the code changes in your fork.</li>
                        <li>
                            Publish your fork using the <Link href="https://pages.github.com/">GitHub Pages</Link>{" "}
                            facility.
                        </li>
                        <li>
                            For SSL and website acceleration for your app, open a free account on
                            <Link href="https://www.cloudflare.com/">Cloudflare</Link>.
                        </li>
                    </ol>
                </AccordionItem>
                <AccordionItem title="Can someone build an app for me?">
                    <p>
                        Sure! You may hire developers who are familiar with JavaScript and WebSocket technology to build
                        your app for you.
                    </p>
                </AccordionItem>
                <AccordionItem title="Will I earn commissions if a client signed up with Deriv using my app?">
                    <p>Yes! Follow these steps:</p>
                    <ol>
                        <li>
                            Sign up as an <Link href="https://deriv.com/partners/affiliate-ib/">affiliate</Link>.
                        </li>
                        <li>
                            Insert your affiliate token into the{" "}
                            <Link href={`${PATHS.PLAYGROUND}/#new_account_virtual`} passHref={true}>
                                <code className={styles["code"]}>new_account_virtual</code>
                            </Link>{" "}
                            call in your app.
                        </li>
                    </ol>
                </AccordionItem>
                <AccordionItem title="How else can I earn?">
                    <p>Here are some ways:</p>
                    <ol>
                        <li>
                            Sign up as a <Link href="https://deriv.com/partners/payment-agent/">payment agent</Link> to
                            process local payments for our clients in your country. You may automate your payment agent
                            facility using the
                            <Link href={`${PATHS.PLAYGROUND}/#paymentagent_transfer`} passHref={true}>
                                <code className={styles["code"]}>paymentagent_transfer</code>
                            </Link>{" "}
                            API call.
                        </li>
                        <li>
                            If you are prepared to offer higher contract prices than ours, you may add a{" "}
                            <strong>markup percentage</strong> when you
                            <Link href="/docs/app-registration">register</Link> your app. This is a percentage of
                            contract payouts, and it’s added to all contract prices in your app. At every month-end, the
                            aggregate markup is paid to you. Sign up as our affiliate and contact your Affiliate Manager
                            to learn more.
                        </li>
                    </ol>
                </AccordionItem>
                <AccordionItem title="What does it mean if a schema property has the ‘sensitive’ attribute?">
                    This means we will treat the value of this property as confidential, and will never return it in any
                    API response. It is used for passwords and tokens.
                </AccordionItem>
                <AccordionItem title="What is copy trading?">
                    <p>
                        Copy trading allows a client (the Copier) to automatically copy the trades of another client
                        (the Trader).
                    </p>
                    <p>
                        To allow others to copy your trades, set the ‘allow_copiers’ setting via the{" "}
                        <Link href="/playground/#set_settings">set settings</Link> call.
                    </p>
                    <p>The Trader may create a read-only API token and provide it to the Copier.</p>
                    <p>
                        Enabling ‘allow_copiers’ will also make the copytrading statistics call available. The
                        statistics call provides the information about an account. This is so that potential copiers
                        have an idea about the trader’s past performance.
                    </p>
                    <p>
                        To start copying, use the <Link href="/playground/#copy_start">copy start</Link> call. To stop
                        copying, use <Link href="/playground/#copy_stop">copy stop</Link>.
                    </p>
                </AccordionItem>
                <AccordionItem title="How do I check for server status updates?">
                    <p>
                        Use the <Link href="/playground/#website_status">website status</Link> call to check whether the
                        website is online or not.
                    </p>
                </AccordionItem>
                <AccordionItem title="How do I subscribe to server status notifications?">
                    <p>
                        This JavaScript code opens a WebSocket and makes a subscription for server status notifications.
                        When a message is received, it sends the website status message, if available:
                    </p>
                    <CodeContent lang="javascript" data={props.js_content} />
                </AccordionItem>
                <AccordionItem title="How do I get help?">
                    Visit our <Link href="https://binary.vanillacommunity.com/">dev forum</Link> or email
                    <Link href="mailto:api-support@deriv.com?subject=API+Question:+"> api-support@deriv.com</Link>.
                </AccordionItem>
            </Accordion>
        </div>
    );
};

FAQ.Layout = DocsLayout;

export default FAQ;
