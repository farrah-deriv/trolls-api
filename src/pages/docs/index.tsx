import DocsLayout from "components/Documentation/Layout/DocsLayout";
import QuickStartIntro from "components/Documentation/QuickStartIntro/QuickStartIntro";
import CodeBlock from "../../components/common/CodeBlock/CodeBlock";
type PageComponentWithLayout = React.FC & {
    Layout: React.FC;
};

const codeSampleData = [
    {
        id: "buy-contract",
        title: "Buy contract",
        description: "A contract is an agreement to buy or sell an asset at an agreed-upon price. This example shows you how to buy a contract using Deriv API."
    },
    {
        id: "ticks",
        title: "Ticks",
        description: "A tick is a measure of minimum upward or downward movement in the price of a trading commodity. This example shows you how to collect ticks for your trading app using Deriv’s API."
    },
    {
        id: "balance",
        title: "Account balance",
        description: "This example shows you how to use the Deriv API to retrieve account balance information."
    },
    {
        id: "proposal",
        title: "Proposal",
        description: "This example is for getting a contract proposal. You’ll be able to get the price, payout and spot value for your contract.",
        subdescription: "To keep this connection alive in case of inactivity timeouts, see the example for Keep alive."
    },
    {
        id: "keep-alive",
        title: "Keep alive",
        description: "In this example you’ll see how to keep a connection alive when getting contract proposals via the Deriv API. This example keeps the connection alive by sending a ping every 30 seconds."
    }

]
const Docs: PageComponentWithLayout = () => {
    return (
        <>
            <QuickStartIntro />
            {codeSampleData.map((data, index) =>
                <CodeBlock key={index} id={data.id} title={data.title} desc={data.description} subdesc={data.subdescription} />
            )}
        </>
    );
};

Docs.Layout = DocsLayout;

export default Docs;
