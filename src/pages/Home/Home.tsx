import Hero from "@/components/Hero/Hero";
import { Button } from "@/components/ui/button";
import AboutUsSection from "./AboutUsSection";
import { Separator } from "@/components/ui/separator";
import FaqSection from "./FaqSection";
import SponsorSection from "@/pages/Hackathons/2023/SponsorSection";

const Home = () => {
    return (
        <div
            className={
                "flex flex-col items-center justify-center gap-10 w-[100%] px-4 lg:px-10"
            }
        >
            <Hero title={"Hack Frost NL"}>
                <Button className="text-xl h-[50px]">
                    View our Last Event
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
