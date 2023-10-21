import Hero from "@/components/Hero/Hero";
import Person from "@/components/Team/Person";
import Team from "@/components/Team/Team";

import madison from "@/assets/images/team/madison.jpg";
import william from "@/assets/images/team/william.jpg";
import rahaf from "@/assets/images/team/rahaf.jpg";

import umama from "@/assets/images/team/umama.jpg";

import haley from "@/assets/images/team/haley.jpg";
import moustafa from "@/assets/images/team/moustafa.jpg";

import emad from "@/assets/images/team/emad.jpg";
import hamdan from "@/assets/images/team/hamdan.jpg";

import parsa from "@/assets/images/team/parsa.jpg";

import youssef from "@/assets/images/team/youssef.jpg";
import kamal from "@/assets/images/team/kamal.jpg";
import daniel from "@/assets/images/team/daniel.jpg";
import mathew from "@/assets/images/team/mathew.png";

const TeamPage = () => {
    return (
        <div
            className={
                "flex flex-col items-center justify-center gap-10 w-[100%] px-4 lg:px-10"
            }
        >
            <Hero title={"Meet our Team"} />
            <div className={"flex flex-col gap-14"}>
                <Team>
                    <h3
                        className={
                            "text-brand-cream font-josefin text-3xl font-bold mb-5"
                        }
                    >
                        Executives
                    </h3>
                    <div
                        className={
                            "flex flex-row justify-center items-center gap-12 lg:gap-24 flex-wrap"
                        }
                    >
                        <Person
                            name={"Madison Emshey"}
                            role={"President"}
                            imageUrl={madison}
                            url={"https://www.linkedin.com/in/madison-emshey"}
                            className={"object-left"}
                        />
                        <Person
                            name={"William Church"}
                            role={"Vice-President"}
                            imageUrl={william}
                            url={"https://www.linkedin.com/in/church-william"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Rahaf HajAhmad"}
                            role={"Project Manager"}
                            imageUrl={rahaf}
                            url={
                                "https://www.linkedin.com/in/rahaf-hajahmad-5b9a311a7"
                            }
                        />
                    </div>
                </Team>
                <Team>
                    <h3
                        className={
                            "text-brand-red font-josefin text-3xl font-bold mb-5"
                        }
                    >
                        Operations
                    </h3>
                    <div
                        className={
                            "flex flex-row justify-center items-center gap-12 lg:gap-24 flex-wrap"
                        }
                    >
                        <Person
                            name={"Umama Rahman"}
                            role={"Operations Lead"}
                            imageUrl={umama}
                            url={"https://www.linkedin.com/in/umama-rahman-/"}
                        />
                        <Person
                            name={"Someone"}
                            role={"Operations"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://example.com"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Someone"}
                            role={"Operations"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://example.com"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Someone"}
                            role={"Operations"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://example.com"}
                            className={"object-left"}
                        />

                        <Person
                            name={"Someone"}
                            role={"Operations"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://example.com"}
                            className={"object-left"}
                        />

                        <Person
                            name={"Someone"}
                            role={"Operations"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://example.com"}
                            className={"object-left"}
                        />
                    </div>
                </Team>
                <Team>
                    <h3
                        className={
                            "text-brand-blue font-josefin text-3xl font-bold mb-5"
                        }
                    >
                        Marketing
                    </h3>
                    <div
                        className={
                            "flex flex-row justify-center items-center gap-12 lg:gap-24 flex-wrap"
                        }
                    >
                        <Person
                            name={"Hayley Perry"}
                            role={"Marketing Lead"}
                            imageUrl={haley}
                            url={"https://www.linkedin.com/in/hayley-perry/"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Moustafa Elsisy"}
                            role={"Marketing"}
                            imageUrl={moustafa}
                            url={"https://www.linkedin.com/in/moustafaelsisy/"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Craig Moulton"}
                            role={"Marketing"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={
                                "https://www.linkedin.com/in/craig-moulton-verified/"
                            }
                            className={"object-left"}
                        />
                    </div>
                </Team>
                <Team>
                    <h3
                        className={
                            "text-brand-yellow font-josefin text-3xl font-bold mb-5"
                        }
                    >
                        Logistics
                    </h3>
                    <div
                        className={
                            "flex flex-row justify-center items-center gap-12 lg:gap-24 flex-wrap"
                        }
                    >
                        <Person
                            name={"Paulina Alhassan"}
                            role={"Logistics Lead"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://www.linkedin.com/in/paulina-al/"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Emad Salim"}
                            role={"Logistics Lead-in-Traning"}
                            imageUrl={emad}
                            url={"https://www.linkedin.com/in/emadsalim-json/"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Mahek Parmar"}
                            role={"Logistics"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://www.linkedin.com/in/mahek-parmar-838613248/"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Raheem Madeleka"}
                            role={"Logistics"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://www.linkedin.com/in/raheem-madeleka-953385236/"}
                            className={"object-left"}
                        />

                        <Person
                            name={"Hamdan Shaikh"}
                            role={"Logistics"}
                            imageUrl={hamdan}
                            url={"https://www.linkedin.com/in/hishaikh-imti/"}
                            className={"object-left"}
                        />
                    </div>
                </Team>
                <Team>
                    <h3
                        className={
                            "text-brand-green font-josefin text-3xl font-bold mb-5"
                        }
                    >
                        Sponsorship
                    </h3>
                    <div
                        className={
                            "flex flex-row justify-center items-center gap-12 lg:gap-24 flex-wrap"
                        }
                    >
                        <Person
                            name={"Parsa Esmkhani"}
                            role={"Sponsorship Lead"}
                            imageUrl={parsa}
                            url={"https://www.linkedin.com/in/parsaesmkhani/"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Someone"}
                            role={"Logistics"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://example.com"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Someone"}
                            role={"Logistics"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://example.com"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Someone"}
                            role={"Logistics"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://example.com"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Someone"}
                            role={"Logistics"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://example.com"}
                            className={"object-left"}
                        />
                        <Person
                            name={"Someone"}
                            role={"Logistics"}
                            imageUrl={"https://via.placeholder.com/256"}
                            url={"https://example.com"}
                            className={"object-left"}
                        />
                    </div>
                </Team>
                <Team>
                    <h3
                        className={
                            "text-slate-400 font-josefin text-3xl font-bold mb-5"
                        }
                    >
                        Advisors
                    </h3>
                    <div
                        className={
                            "flex flex-row justify-center items-center gap-12 lg:gap-24 flex-wrap"
                        }
                    >
                        <Person
                            name={"Daniel Grillo"}
                            role={"Advisor"}
                            imageUrl={daniel}
                            url={"https://www.linkedin.com/in/daniel-grillo-633481207/"}
                        />
                        <Person
                            name={"Kamal Ali"}
                            role={"Advisor"}
                            imageUrl={kamal}
                            url={"https://www.linkedin.com/in/kamal-m-ali/"}
                        />
                        <Person
                            name={"Youssef Ali"}
                            role={"Advisor"}
                            imageUrl={youssef}
                            url={"https://www.linkedin.com/in/youssef-m-ali/"}
                        />
                        <Person
                            name={"Mathew Emshey"}
                            role={"Advisor"}
                            imageUrl={mathew}
                            url={"https://www.linkedin.com/in/mathew-emshey/"}
                        />
                    </div>
                </Team>

            </div>
        </div>
    );
};

export default TeamPage;
