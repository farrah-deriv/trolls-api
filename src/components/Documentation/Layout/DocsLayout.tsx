import useIsMobile from "hooks/useIsMobile";
import DocsSidebar from "./DocsSidebar/DocsSidebar";
import DocsSelect from "./DocsSelect/DocsSelect";
import style from "./DocsLayout.module.scss";

const DocsLayout: React.FC = ({ children }) => {
    const is_mobile = useIsMobile();

    return (
        <div id="content" className={style["doc-content"]}>
            {is_mobile && (
                <>
                    <DocsSelect />
                    <div className={style["vertical-separator"]}></div>
                </>
            )}
            <div className={`${style["page-wrapper"]} ${style.documentation}`}>
                {!is_mobile && (
                    <>
                        <DocsSidebar />
                        <div className={style["vertical-separator"]}></div>
                    </>
                )}
                <div className={style["page-content"]}>{children}</div>
            </div>
        </div>
    );
};

export default DocsLayout;
