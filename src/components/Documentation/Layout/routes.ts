import { PATHS } from "utils";

const routes: { name: string; id?: string; href: string }[] = [
    {
        name: "Quickstart",
        href: PATHS.DOCS,
    },
    {
        name: "App registration",
        id: "app-registration",
        href: PATHS.APP_REGISTRATION,
    },
    {
        name: "API playground",
        id: "playground",
        href: PATHS.PLAYGROUND,
    },
    {
        name: "API guide",
        id: "api-guide",
        href: PATHS.API_GUIDE,
    },
    {
        name: "FAQ",
        id: "faq",
        href: PATHS.FAQ,
    },
    {
        name: "JSON Schemas",
        id: "json-schemas",
        href: PATHS.JSON_SCHEMAS,
    },
    {
        name: "Bug Bounty",
        id: "bug-bounty",
        href: PATHS.BUG_BOUNTY,
    },
];

export default routes;
