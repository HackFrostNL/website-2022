import Hero from "@/components/Hero/Hero";
import { Button } from "@/components/ui/button";
import AboutUsSection from "./AboutUsSection";
import { Separator } from "@/components/ui/separator";
import FaqSection from "./FaqSection";
import SponsorSection from "@/pages/Hackathons/2023/SponsorSection";
import { Link } from "@tanstack/react-router";

const Home = () => {
    return (
        <div
            className={
                "flex flex-col items-center justify-center gap-10 w-[100%] px-4 lg:px-10"
            }
        >
            <Hero title={"Hack Frost NL"}>
                <Button asChild>
                    <Link to={"/hackathons/2023"} className="text-xl h-[50px]">View Our Last Event</Link>
                </Button>
            </Hero>
            <AboutUsSection />
            <Separator />
            <FaqSection />
            <Separator />
            <SponsorSection />
        </div>
    );
};

export default Home;
