import {
    BiLogoInstagram,
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoLinkedin,
    BiLogoYoutube,
    BiLogoGithub,
} from "react-icons/bi";

const Socials = () => (
    <div className={"flex flex-row justify-center items-center gap-5"}>
        <a href={"https://www.instagram.com/hackfrostnl/"}>
            <BiLogoInstagram className={"h-8 w-8 hover:fill-slate-300"} />
        </a>
        <a href={"https://www.facebook.com/hackfrostnl"}>
            <BiLogoFacebook className={"h-8 w-8 hover:fill-slate-300"} />
        </a>
        <a href={"https://twitter.com/hackfrostnl"}>
            <BiLogoTwitter className={"h-8 w-8 hover:fill-slate-300"} />
        </a>
        <a href={"https://www.linkedin.com/company/hack-frost-nl/"}>
            <BiLogoLinkedin className={"h-8 w-8 hover:fill-slate-300"} />
        </a>
        <a href={"https://www.youtube.com/channel/UCTbP245TTeFp3M-ODShyH4A"}>
            <BiLogoYoutube className={"h-8 w-8 hover:fill-slate-300"} />
        </a>
        <a href={"https://github.com/HackFrostNL"}>
            <BiLogoGithub className={"h-8 w-8 hover:fill-slate-300"} />
        </a>
    </div>
);

export default Socials;
