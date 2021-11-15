import DocsLayout from "../../components/Documentation/Layout/DocsLayout";
import QuickStart from "components/QuickStart/QuickStart";

type PageComponentWithLayout = React.FC & {
    Layout: React.FC;
};

const Docs: PageComponentWithLayout = () => {
    return (
        <div>
            <QuickStart />
        </div>
    );
};

Docs.Layout = DocsLayout;

export default Docs;
