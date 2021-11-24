import React from "react"
import style from "./JsonSchemasComponent.module.scss"
import Link from "next/link";


const JsonSchemasComponent: React.FC = () => {

    const json_navigation = [
        { id: "json-schemas", title: "JSON Schemas", path: "https://github.com/binary-com/websockets/tree/gh-pages/config" },
        { id: "changelog", title: "changelog", path: "https://github.com/binary-com/websockets/commits/gh-pages" },
        { id: "json-editor", title: "JSON Editor with JSON Schema support", path: "https://jeremydorn.com/json-editor/" },
        { id: "json-schema_ts", title: "Generate JSON Schema from TypeScript", path: "https://lbovet.github.io/typson-demo/" },
        { id: "json-schema_object", title: "Generate JSON Schema from JSON Object", path: "https://jsonschema.net/" },
        { id: "json-schema_validator", title: "JSON Schema Validator", path: "https://www.jsonschemavalidator.net/" },
    ];

    return (
        <div className={style["page-container"]}>
            <h1 className="doc-main-title">JSON Schemas</h1>
            <p>
                Our API is defined by
                <Link href={json_navigation[0].path}><a target="_blank" rel="noreferrer"> {json_navigation[0].title}</a></Link>.
                Get updates by looking for JSON Schema Update in the
                <Link href={json_navigation[1].path}><a target="_blank" rel="noreferrer"> {json_navigation[1].title}</a></Link>.
            </p>
            <h3>Useful tools:</h3>
            {json_navigation.map(
                ({ id, title, path }, i) =>
                    i > 1 && (
                        <p key={id}>
                            <Link key={id} href={path}>
                                <a target="_blank" rel="noreferrer">{title}</a>
                            </Link>
                        </p>
                    )
            )}
        </div>
    );
};


export default JsonSchemasComponent;
