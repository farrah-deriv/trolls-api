import { useState, useEffect } from "react";
import { isMobile } from "utils";

const useIsMobile: Function = (): boolean => {
    const [is_mobile, setIsMobile] = useState(false);

    useEffect(() => {
        const resizeHandler = () => setIsMobile(isMobile());
        resizeHandler();
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return is_mobile;
};

export default useIsMobile;
