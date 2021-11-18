import useIsMobile from "hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler } from "react";
import { PATHS } from "utils";
import styles from "./Header.module.scss";

type HeaderPropsType = {
    is_canvas_menu_shown: boolean;
    toggleCanvasMenu: (is_canvas_menu_shown: boolean) => void;
};

const navigation = [
    { id: "deriv-com", title: "Deriv website", path: "https://deriv.com" },
    { id: "deriv-com-about", title: "About us", path: "https://deriv.com/about" },
    { id: "deriv-com-contact-us", title: "Contact us", path: "https://deriv.com/contact-us" },
    { id: "/", title: "Home", path: "/" },
    { id: "docs", title: "Documentation", path: PATHS.DOCS },
    { id: "playground", title: "API Playground", path: PATHS.PLAYGROUND },
];

const Header: React.FC<HeaderPropsType> = React.memo(({ is_canvas_menu_shown, toggleCanvasMenu }) => {
    const is_mobile = useIsMobile();
    const image_width = is_mobile ? 84 : 180;
    const image_height = is_mobile ? 34 : 73;
    const menu_icon_src = is_canvas_menu_shown ? "/close.svg" : "/hamburger_menu.svg";

    const handleHamburgerClick: MouseEventHandler<HTMLDivElement> = e => {
        toggleCanvasMenu(!is_canvas_menu_shown);
    };

    return (
        <div id="main-nav" className={styles.nav}>
            <div className={`${styles["top-nav"]} ${styles["flex-container"]}`}>
                <div className={styles["top-nav-container"]}>
                    {navigation.map(
                        ({ id, title, path }, i) =>
                            i < 3 && (
                                <Link key={id} href={path}>
                                    <a className={styles.a}>{title}</a>
                                </Link>
                            )
                    )}
                </div>
            </div>

            <header className={styles.header}>
                <div className={styles["header-container"]}>
                    <div id="hamburger" className={styles.hamburger} onClick={handleHamburgerClick}>
                        <Image alt="Hamburger menu" src={menu_icon_src} width="16" height="16" />
                    </div>
                    <Link href={navigation[0].path}>
                        <a className={styles["flex-container"]}>
                            <div className={styles.logo}>
                                <Image alt="Deriv Logo" src="/deriv.svg" width={image_width} height={image_height} />
                            </div>
                            <h1 className={styles.branding}>API</h1>
                        </a>
                    </Link>
                    <nav id="navbar" className={`${styles["flex-container"]} ${styles.navbar}`}>
                        {navigation.map(({ id, title, path }, i) =>
                            i > 2 ? (
                                <Link key={id} href={path}>
                                    <a id={id}>{title}</a>
                                </Link>
                            ) : null
                        )}
                    </nav>
                </div>
            </header>
        </div>
    );
});

Header.displayName = "Header";

export default Header;
