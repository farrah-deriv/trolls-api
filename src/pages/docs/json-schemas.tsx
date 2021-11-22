import { PageComponentWithLayout } from "../../types";
import DocsLayout from "components/Documentation/Layout/DocsLayout";
import JsonSchemasComponent from "components/Documentation/Layout/JsonSchemas/JsonSchemasComponent"


const JSONSchemas: PageComponentWithLayout = () => {

    return <JsonSchemasComponent/>
    
};

JSONSchemas.Layout = DocsLayout;

export default JSONSchemas;
