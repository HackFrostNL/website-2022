import Sponsor from "@/components/Sponsors/Sponsor";
import SponsorBlock from "@/components/Sponsors/SponsorBlock";
import genesis from "@/assets/images/sponsors/genesis-w.png";
import muncss from "@/assets/images/sponsors/muncss_w.png";
import mungeo from "@/assets/images/sponsors/mun_geo_society.png";
import mungeng from "@/assets/images/sponsors/mun_engineering.png";
import bounce from "@/assets/images/sponsors/bounce.png";
import verafin from "@/assets/images/sponsors/verafin.png";
import colab from "@/assets/images/sponsors/colab.png";
import pegnl from "@/assets/images/sponsors/pegnl-w.png";
import schlumberger from "@/assets/images/sponsors/schlumberger.png";
import aker from "@/assets/images/sponsors/aker.png";

const SponsorSection = () => (
    <div className={"flex flex-col gap-5 w-[100%] lg:w-[90%] justify-center items-center"}>
        <h2
            className={
                "text-primary text-3xl font-josefin text-center lg:text-left"
            }
        >
            Our 2023 Sponsors
        </h2>
        <div className={"flex flex-col gap-5"}>
            <SponsorBlock title={"Partners"}>
                <Sponsor
                    name={"Genesis"}
                    imageUrl={genesis}
                    url={"https://genesiscentre.ca/"}
                    className={"h-32 md:h-48 lg:h-64"}
                />
                <Sponsor
                    name={"MUN Computer Science Society"}
                    imageUrl={muncss}
                    url={"https://muncompsci.ca"}
                    className={"h-16 md:h-20 lg:h-36 md:mr-7"}
                />
                <Sponsor
                    name={"MUN Geography Society"}
                    imageUrl={mungeo}
                    url={"https://linktr.ee/mungeogsoc"}
                    className={"h-32 md:h-40 lg:h-56"}
                />
            </SponsorBlock>

            <SponsorBlock title={"Diamond"}>
                <Sponsor
                    name={"MUN Faculty of Engineering and Applied Science"}
                    imageUrl={mungeng}
                    url={"https://www.mun.ca/engineering/"}
                    className={"h-40 md:h-60 lg:h-80"}
                />
            </SponsorBlock>

            <SponsorBlock title={"Gold"}>
                <Sponsor
                    name={"Bounce Health Innovation"}
                    imageUrl={bounce}
                    url={"https://bounceinnovation.ca/"}
                    className={"h-20 md:h-28 lg:h-40 md:my-6"}
                />
            </SponsorBlock>
            <SponsorBlock title={"Silver"}>
                <Sponsor
                    name={"Verafin"}
                    imageUrl={verafin}
                    url={"https://verafin.com/"}
                    className={"h-8 md:h-12 lg:h-16"}
                />
                <Sponsor
                    name={"CoLab Software"}
                    imageUrl={colab}
                    url={"https://colabsoftware.com/"}
                    className={"h-8 md:h-12 lg:h-16"}
                />
                <Sponsor
                    name={"pegNL"}
                    imageUrl={pegnl}
                    url={"https://pegnl.ca"}
                    className={"h-24 md:h-44 lg:h-52"}
                />
                <Sponsor
                    name={"Schlumberger"}
                    imageUrl={schlumberger}
                    url={"https://www.slb.com/"}
                    className={"h-8 md:h-12 lg:h-16"}
                />
                <Sponsor
                    name={"Aker Solutions"}
                    imageUrl={aker}
                    url={"https://akersolutions.com/"}
                    className={"h-7 md:h-12 lg:h-16"}
                />
            </SponsorBlock>
        </div>
    </div>
);

export default SponsorSection;
