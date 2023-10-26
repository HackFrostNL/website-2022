import { Separator } from "../ui/separator";
import CreamLogo from "./CreamLogo";
import Socials from "./Socials";

const Footer = () => (
    <div className={"flex flex-col mt-5"}>
        <Separator />
        <div
            className={
                "flex flex-col justify-center align-center px-3 lg:px-20 py-5 gap-8"
            }
        >
            <CreamLogo className={"fill-brand-cream h-32"} />
            <Socials />
            <p className={"text-center text-sm"}>
                &copy; 2023 Hack Frost NL. All rights reserved.
            </p>
        </div>
    </div>
);

export default Footer;
