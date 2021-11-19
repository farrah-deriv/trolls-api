import React from "react";
import common from "../Documentation/DocsCommon.module.scss";
import Link from "next/link";

type CodeLinkProps = {
    href: string;
};

const CodeLink: React.FC<CodeLinkProps> = ({ children, href }) => {
    return <Link href={href}><a className={common["code"]}>{children}</a></Link>
};

export default CodeLink;
