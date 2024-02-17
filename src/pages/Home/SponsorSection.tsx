import Sponsor from "@/components/Sponsors/Sponsor";
import SponsorBlock from "@/components/Sponsors/SponsorBlock";
import harriscentre from "@/assets/images/sponsors/harriscentre.png";
import econext from "@/assets/images/sponsors/econext.png";
import uniconn from "@/assets/images/sponsors/uniconn.png";
import cna from "@/assets/images/sponsors/cna.png";
import pegnl from "@/assets/images/sponsors/pegnl-w.png";

const SponsorSection = () => (
    <div
        className={
            "flex flex-col gap-5 w-[100%] lg:w-[90%] justify-center items-center"
        }
    >
        <h2
            className={
                "text-primary text-3xl font-josefin text-center lg:text-left"
            }
        >
            Our 2024 Sponsors
        </h2>
        <div className={"flex flex-col gap-5"}>
            <SponsorBlock title={""}>
            <Sponsor
                    name={"College of the North Atlantic"}
                    imageUrl={cna}
                    url={"https://www.cna.nl.ca/"}
                    className={"h-16 md:h-24 lg:h-28"}
                />
                <Sponsor
                    name={"pegNL"}
                    imageUrl={pegnl}
                    url={"https://pegnl.ca"}
                    className={"h-32 md:h-44 lg:h-52"}
                />
            </SponsorBlock>
            <SponsorBlock title={"Mission Partners"}>
                <Sponsor
                    name={"The Harris Centre"}
                    imageUrl={harriscentre}
                    url={"https://www.mun.ca/harriscentre/"}
                    className={"h-16 md:h-24 lg:h-32"}
                />
                <Sponsor
                    name={"econext"}
                    imageUrl={econext}
                    url={"https://econext.ca/"}
                    className={"h-14 md:h-20 lg:h-28"}
                />
                <Sponsor
                    name={"uniconn"}
                    imageUrl={uniconn}
                    url={"https://www.uniconn.ca/"}
                    className={"h-20 md:h-24 lg:h-36"}
                />
            </SponsorBlock>
        </div>
    </div>
);

export default SponsorSection;
