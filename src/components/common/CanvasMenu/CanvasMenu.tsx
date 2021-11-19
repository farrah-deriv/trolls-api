import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler } from "react";
import { PATHS } from "utils";
import styles from "./CanvasMenu.module.scss";

type CanvasMenuPropsType = {
    is_canvas_menu_shown: boolean;
    toggleCanvasMenu: (is_canvas_menu_shown: boolean) => void;
};

const canvas_menu_links = [
    { id: "quickstart", title: "Quickstart", path: PATHS.DOCS },
    { id: "app-registration", title: "App Registration", path: PATHS.APP_REGISTRATION },
    { id: "api-guide", title: "API Guide", path: PATHS.API_GUIDE },
    { id: "faq", title: "FAQ", path: PATHS.FAQ },
    { id: "json-schemas", title: "JSON Schemas", path: PATHS.JSON_SCHEMAS },
    { id: "bug-bounty", title: "Bug Bounty", path: PATHS.BUG_BOUNTY },
];

const CanvasMenu: React.FC<CanvasMenuPropsType> = React.memo(({ is_canvas_menu_shown, toggleCanvasMenu }) => {
    const [is_dropdown_shown, setIsDropDownShown] = React.useState(false);

    const onLinkClick: MouseEventHandler<HTMLElement> = e => {
        if ((e.target as HTMLAnchorElement).nodeName === "A") {
            toggleCanvasMenu(false);
        }
    };

    return (
        <section
            id="canvas-menu"
            className={`${styles["off-canvas-menu"]}${is_canvas_menu_shown ? ` ${styles["show-canvas"]}` : ""}`}
            onClick={onLinkClick}
        >
            <div id="home" className={styles["menu-wrapper"]}>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
            <div className={styles["menu-wrapper"]}>
                <div
                    id="doc-menu-header"
                    className={styles["menu-header"]}
                    onClick={() => setIsDropDownShown(!is_dropdown_shown)}
                >
                    Documentation
                    <div className={styles["menu-button"]}>
                        <Image src="/arrow_down.svg" width="16" height="16" alt="expand" />
                    </div>
                </div>
                <div className={`${styles["menu-panel"]}${is_dropdown_shown ? ` ${styles["show-dropdown"]}` : ""}`}>
                    {canvas_menu_links.map(({ id, title, path }) => (
                        <Link key={id} href={path}>
                            <a id={id}>{title}</a>
                        </Link>
                    ))}
                </div>
            </div>
            <div id="playground_link" className={styles["menu-wrapper"]}>
                <Link href={PATHS.PLAYGROUND}>
                    <a>API Playground</a>
                </Link>
            </div>
        </section>
    );
});

CanvasMenu.displayName = "CanvasMenu";

export default CanvasMenu;
