import { PageComponentWithLayout } from "../../types";
import DocsLayout from "../../components/Documentation/Layout/DocsLayout";
import ApiGuideContent from "../../components/Documentation/ApiGuide/ApiGuideContent";

const ApiGuide: PageComponentWithLayout = () => {
    return <ApiGuideContent/>
};

ApiGuide.Layout = DocsLayout;

export default ApiGuide;
