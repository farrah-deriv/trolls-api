import { PageComponentWithLayout } from "../../types";
import DocsLayout from "components/Documentation/Layout/DocsLayout";

type JSONSchemas = {
    // props
};
const JSONSchemas: PageComponentWithLayout = () => {
    return(
    <> 
    <div className="page-content">
    <h1 className="doc-main-title">JSON Schemas</h1>
     <p>
     Our API is defined by 
        <a  target="_blank" href="https://github.com/binary-com/websockets/tree/gh-pages/config"> JSON Schemas</a>. 
        Get updates by looking for "JSON Schema Update" in the 
        <a target="_blank"  href="https://github.com/binary-com/websockets/commits/gh-pages"> changelog</a>.
    </p>
    <h3>Useful tools:</h3>
    <p><a target="_blank" href="http://jeremydorn.com/json-editor/" >JSON Editor with JSON Schema support</a></p>
    <p><a target="_blank" href="https://lbovet.github.io/typson-demo/">Generate JSON Schema from TypeScript</a></p>
    <p><a target="_blank" href="http://jsonschema.net/">Generate JSON Schema from JSON Object</a></p>
    <p><a target="_blank" href="http://www.jsonschemavalidator.net/">JSON Schema Validator</a></p>
    </div>
    </>
    );
};

JSONSchemas.Layout = DocsLayout;

export default JSONSchemas;
