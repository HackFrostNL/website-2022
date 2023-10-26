import Navbar from "./Navbar";
import Logo from "./Logo";
import { Separator } from "../ui/separator";

const Header = () => (
    <div className={"flex flex-col mb-5 lg:mb-10"}>
        <div
            className={"flex justify-between px-3 lg:px-20 py-5"}
        >
            <Logo />
            <Navbar />
        </div>
        <Separator />
    </div>
);

export default Header;
