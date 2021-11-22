import { PageComponentWithLayout } from "../../types";
import DocsLayout from "../../components/Documentation/Layout/DocsLayout";
import AppAuthentificationRegistration from "../../components/Documentation/AppAuthentificationRegistration";

const AppRegistration: PageComponentWithLayout = () => (
    <>
        <AppAuthentificationRegistration />
    </>
);

AppRegistration.Layout = DocsLayout;

export default AppRegistration;
