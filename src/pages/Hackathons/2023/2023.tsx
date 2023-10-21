import Hero from "@/components/Hero/Hero";
import WinnerSection from "./WinnerSection";
import Challenge from "./Challenge";
import { Separator } from "@/components/ui/separator";
import HidableContent from "@/components/HidableContent/HidableContent";
import JudgingCriteriaSection from "./JudgingCriteria";

import FaqSection from "./FaqSection";
import WorkshopSection from "./WorkshopSection";
import TeamsSection from "./TeamSection";
import SponsorSection from "./SponsorSection";
import PeopleSection from "./PeopleSection";

import { ceremonies, judges, maps, mentors, schedule } from "./data";

const Hackathon2023 = () => (
    <div
        className={
            "flex flex-col items-center justify-center gap-10 w-[100%] px-4 lg:px-10"
        }
    >
        <Hero title={"Hack Frost 3.0"}>
            <div className="flex flex-col items-center justify-center">
                <span className="text-2xl font-josefin">
                    March 31 - April 2
                </span>
                <span className="text-3xl font-josefin">2023</span>
            </div>
        </Hero>
        <WinnerSection />
        <Separator />
        <Challenge />
        <Separator />
        <HidableContent title={"Ceremonies"} content={ceremonies} />
        <Separator />
        <JudgingCriteriaSection />
        <Separator />
        <HidableContent title={"Schedule"} content={schedule} />
        <Separator />
        <HidableContent title={"Maps"} content={maps} />
        <Separator />
        <FaqSection />
        <Separator />
        <WorkshopSection />
        <Separator />
        <TeamsSection />
        <Separator />
        <PeopleSection title={"Judges"} people={judges} />
        <Separator />
        <PeopleSection title={"Mentors"} people={mentors} />
        <Separator />
        <SponsorSection />
    </div>
);

export default Hackathon2023;
