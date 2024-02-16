import Hero from "@/components/Hero/Hero";
import { Button } from "@/components/ui/button";
import AboutUsSection from "./AboutUsSection";
import { Separator } from "@/components/ui/separator";
import FaqSection from "./FaqSection";
import SponsorSection from "@/pages/Hackathons/2023/SponsorSection";
import HidableContent from "@/components/HidableContent/HidableContent";
import { ceremonies } from "./data";
import Challenge from "./Challenge";

const Home = () => {
    return (
        <div
            className={
                "flex flex-col items-center justify-center gap-10 w-[100%] px-4 lg:px-10"
            }
        >
            <Hero title={"Hack Frost NL 4.0"}>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-2xl font-josefin">
                            February 16 - 18
                        </span>
                        <span className="text-3xl font-josefin">2024</span>
                    </div>
                    <Button asChild>
                        <a
                            href={
                                "https://www.eventbrite.com/e/hack-frost-nl-40-tickets-803510711167?aff=website"
                            }
                            className="text-xl h-[50px]"
                        >
                            Register Now
                        </a>
                    </Button>
                </div>
            </Hero>
            <Challenge />
            <Separator />
            <HidableContent title={"Ceremonies"} content={ceremonies} />
            <Separator />
            <AboutUsSection />
            <Separator />
            <FaqSection />
            <Separator />
            <SponsorSection />
        </div>
    );
};

export default Home;
