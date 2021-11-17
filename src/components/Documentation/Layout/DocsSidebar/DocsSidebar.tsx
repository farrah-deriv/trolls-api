import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import routes from "../routes";
import styles from "./DocsSidebar.module.scss";


const DocsSidebar: React.FC = () => {
    const router = useRouter();

    return (
        <div id="sidebar" className={styles["sidebar-left"]}>
            <p className={`${styles["sidebar-title"]} bold`}>Deriv API</p>
            {routes.map(route => (
                <Link href={route.href} key={route.name}>
                    <a id={route.id} className={`${router.pathname === route.href ? styles.selected : ""}`}>{route.name}</a>
                </Link>
            ))}
        </div>
    )
}

export default DocsSidebar;
