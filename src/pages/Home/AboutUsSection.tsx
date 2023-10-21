import { Link } from "@tanstack/react-router";
import {
    PiShareNetworkBold,
    PiGraduationCapBold,
    PiLightbulbBold,
} from "react-icons/pi";

const AboutUsSection = () => (
    <div id="about" className={"flex flex-col gap-5 w-[100%] lg:w-[90%]"}>
        <h2
            className={
                "text-primary text-3xl font-josefin text-center lg:text-left"
            }
        >
            Feeling the chill?
        </h2>
        <div className={"flex flex-col gap-3"}>
            <p>
                Hack Frost NL is a community-led initiative, focused on
                fostering creative problem solving skills, collaboration, and
                innovation through low to no-code hackathons.{" "}
            </p>
            <p>
                Founded in 2020, our mission is to connect diverse minds and
                perspectives from all backgrounds to influence positive change
                in our community - and beyond. Through our annual events and
                community outreach, we aim to empower the next generation of
                talent to seek prosperous and rewarding career paths in our
                vibrant local tech ecosystem.
            </p>
            <Link
                to={"/team"}
                className={"text-primary font-josefin hover:underline"}
            >
                More about the team
            </Link>
        </div>
        <div
            className={
                "flex flex-col md:flex-row justify-between items-start mt-2 gap-5"
            }
        >
            <div className={"flex flex-col justify-center items-center gap-2"}>
                <PiShareNetworkBold size={48} />
                <h4 className={"font-Montserrat font-bold text-lg"}>
                    Make Friends
                </h4>
                <p>
                    Get a quick overview of our events and socials - and form
                    new friendships when you join us!
                </p>
            </div>
            <div className={"flex flex-col justify-center items-center gap-2"}>
                <PiGraduationCapBold size={48} />
                <h4 className={"font-Montserrat font-bold text-lg"}>
                    Learn New Skills
                </h4>
                <p>
                    Get to know a wide variety of skills ranging from tech,
                    design, and the professional industry!
                </p>
            </div>
            <div className={"flex flex-col justify-center items-center gap-2"}>
                <PiLightbulbBold size={48} />
                <h4 className={"font-Montserrat font-bold text-lg"}>
                    Express Your Ideas
                </h4>
                <p>
                    Work together to brainstorm ideas for exciting challenges,
                    even if you had no prior coding experience!
                </p>
            </div>
        </div>
    </div>
);

export default AboutUsSection;
