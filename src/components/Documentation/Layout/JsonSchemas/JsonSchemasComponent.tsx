import React from "react"
import s from "./JsonSchemasComponent.module.scss"

type JsonSchemasComponent = {
   //props
};

const JsonSchemasComponent: React.FC = () => {
    const title = " JSON Schemas";
    
    return(
        <div className={s["page-container"]}>
            <h1 className={s["doc-main-title"]}>{title}</h1>
            <p>
     Our API is defined by 
                <a  target="_blank" href="https://github.com/binary-com/websockets/tree/gh-pages/config" rel="noreferrer">{title}</a>. 
        Get updates by looking for JSON Schema Update in the 
                <a target="_blank"  href="https://github.com/binary-com/websockets/commits/gh-pages" rel="noreferrer"> changelog</a>.
            </p>
            <h3>Useful tools:</h3>
            <p><a target="_blank" href="https://jeremydorn.com/json-editor/" rel="noreferrer" >JSON Editor with JSON Schema support</a></p>
            <p><a target="_blank" href="https://lbovet.github.io/typson-demo/" rel="noreferrer">Generate JSON Schema from TypeScript</a></p>
            <p><a target="_blank" href="https://jsonschema.net/" rel="noreferrer">Generate JSON Schema from JSON Object</a></p>
            <p><a target="_blank" href="https://www.jsonschemavalidator.net/" rel="noreferrer">JSON Schema Validator</a></p>
        </div>
    );
};


export default JsonSchemasComponent;
