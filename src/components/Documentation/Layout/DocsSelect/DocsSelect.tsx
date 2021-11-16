import { FormEventHandler } from "react";
import { useRouter } from "next/router";
import routes from "../routes";
import styles from "./DocsSelect.module.scss";


const DocsSelect: React.FC = () => {
    const router = useRouter();
    const selectHandler: FormEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        router.push(e.target.value);
    }

    return (
        <select id="mobile-page-selector" className={styles["mobile-page-selector"]} onChange={selectHandler} value={router.pathname}>
            {routes.map(route => <option value={route.href} key={route.name}>{route.name}</option>)}
        </select>
    )
}

export default DocsSelect;
