import Hero from "@/components/Hero/Hero";
import { Button } from "@/components/ui/button";
import AboutUsSection from "./AboutUsSection";
import { Separator } from "@/components/ui/separator";
import FaqSection from "./FaqSection";
import SponsorSection from "./SponsorSection";
import HidableContent from "@/components/HidableContent/HidableContent";
import { ceremonies, schedule } from "./data";
import Challenge from "./Challenge";
import JudgingCriteriaSection from "./JudgingCriteria";

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
            <div
                className={
                    "flex flex-col items-center justify-center gap-10 w-[100%] px-4 lg:px-10"
                }
            >
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="text-3xl font-josefin text-primary">
                        Submission Form
                    </span>
                    <a
                        href={
                            "https://docs.google.com/forms/d/1a5lZ3L0n-jCPSl2EOJCwT9y9BoW-hhK0hQl48iEtgCg/viewform"
                        }
                        target="_blank"
                        className={
                            "text-lg text-center hover:underline"
                        }
                        rel="noopener noreferrer"
                    >
                        Submit your pitch deck here
                    </a>
                </div>
            </div>
            <Separator />
            <HidableContent title={"Ceremonies"} content={ceremonies} />
            <Separator />
            <JudgingCriteriaSection />
            <Separator />
            <HidableContent title={"Schedule"} content={schedule} />
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
