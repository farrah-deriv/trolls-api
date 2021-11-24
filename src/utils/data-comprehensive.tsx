import Link from "next/link";

const data_comprehensive = {
    icon: "/js-library.svg",
    title: ["Comprehensive all-in-one JavaScript client library"],
    textFirstPart: [
        "Simplify your development processes and get your app up and running faster with our all-in-one client library",
    ],
    textSecondPart: ["faster with our all-in-one client library"],
    link: [
        <Link href={"https://github.com/binary-com/deriv-api"} key="js-library">
            <a rel="noreferrer noopener">Take me to the library</a>
        </Link>,
    ],
};

export default data_comprehensive;
