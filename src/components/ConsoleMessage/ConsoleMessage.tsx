import React from "react";
import style from "../../pages/playground/Playground.module.scss";

const highlightObject = (object: any, default_indentation = "", default_depth = 0) => {
    const depth = default_depth + 1;
    const is_array = Array.isArray(object);
    const keys = Object.keys(object);
    const indentation = default_indentation + "    ";
    const end_line = "\n";
    const open_bracket = is_array ? "[\n" : "{\n";
    const close_bracket = is_array ? "]" : "}";
    const separation_colon = ": ";

    return (
        <>
            <span>{open_bracket}</span>
            {keys?.map((key, index) => {
                const type = typeof object[key];
                const is_last = keys.length === index+1;

                return (
                    <span key={key+depth}>
                        <span>{indentation}</span>
                        {!is_array && <span className={style["key"]}>{`"${key}"`}</span>}
                        {!is_array && <>{separation_colon}</>}
                        {type === "object"
                            ? highlightObject(object[key], indentation)
                            : <span className={style[type]}>{type === "number" ? object[key] : `"${object[key]}"`}</span>
                        }
                        <>{is_last ? end_line : ","+end_line}</>
                    </span>
                )
            })}
            <>{default_indentation.length ? default_indentation : ""}</>
            <span>{close_bracket}</span>
        </>
    )
}

const ConsoleMessage: React.FC<{ message: any }> = ({ message }) => {
    const payload = message.body;

    return (
        <pre className={style[message.type]}>
            {message && highlightObject(payload)}
        </pre>
    )
}

export default ConsoleMessage;
