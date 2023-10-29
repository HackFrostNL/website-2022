import Hero from "@/components/Hero/Hero";
import Person from "@/components/Team/Person";
import Team from "@/components/Team/Team";

import madison from "@/assets/images/team/madison.jpg";
import william from "@/assets/images/team/william.jpg";
import rahaf from "@/assets/images/team/rahaf.jpg";

import umama from "@/assets/images/team/umama.jpg";
import mohammad from "@/assets/images/team/mohammad.jpg";
import erfan from "@/assets/images/team/erfan.jpg";
import girish from "@/assets/images/team/girish.jpg";
import michael from "@/assets/images/team/michael.jpg";
import andrew from "@/assets/images/team/andrew.jpg";

import haley from "@/assets/images/team/haley.jpg";
import moustafa from "@/assets/images/team/moustafa.jpg";
import craig from "@/assets/images/team/craig.jpg";

import paulina from "@/assets/images/team/paulina.jpg";
import emad from "@/assets/images/team/emad.jpg";
import hamdan from "@/assets/images/team/hamdan.jpg";
import raheem from "@/assets/images/team/raheem.jpg";
import noPicYellow from "@/assets/images/team/noPicYellow.png";

import parsa from "@/assets/images/team/parsa.jpg";
import ali from "@/assets/images/team/ali.jpg";
import ahmed from "@/assets/images/team/ahmed.jpg";
import muhammad from "@/assets/images/team/muhammad.jpg";
import noPicGreen from "@/assets/images/team/noPicGreen.png";

import youssef from "@/assets/images/team/youssef.jpg";
import kamal from "@/assets/images/team/kamal.jpg";
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
                            nameClassName={"group-hover:text-brand-red"}
                        />
                        <Person
                            name={"Mohammad Arafat Zaman"}
                            role={"Operations"}
                            imageUrl={mohammad}
                            url={"https://www.linkedin.com/in/m-arafatzaman/"}
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-red"}
                        />
                        <Person
                            name={"Erfan Jafar"}
                            role={"Operations"}
                            imageUrl={erfan}
                            url={"https://www.linkedin.com/in/ej20/"}
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-red"}
                        />
                        <Person
                            name={"Girish Verma"}
                            role={"Operations"}
                            imageUrl={girish}
                            url={
                                "https://www.linkedin.com/in/girish-verma-173091212/"
                            }
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-red"}
                        />
                        <Person
                            name={"Michael Babalola"}
                            role={"Operations"}
                            imageUrl={michael}
                            url={"https://www.linkedin.com/in/babalola-michael/"}
                            nameClassName={"group-hover:text-brand-red"}
                        />
                        <Person
                            name={"Andrew Ross"}
                            role={"Operations"}
                            imageUrl={andrew}
                            url={"https://www.linkedin.com/in/andrwross"}
                            nameClassName={"group-hover:text-brand-red"}
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
                            nameClassName={"group-hover:text-brand-blue"}
                        />
                        <Person
                            name={"Moustafa Elsisy"}
                            role={"Marketing"}
                            imageUrl={moustafa}
                            url={"https://www.linkedin.com/in/moustafaelsisy/"}
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-blue"}
                        />
                        <Person
                            name={"Craig Moulton"}
                            role={"Marketing"}
                            imageUrl={craig}
                            url={"https://b2bold.ca/"}
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-blue"}
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
                            imageUrl={paulina}
                            url={"https://www.linkedin.com/in/paulina-al/"}
                            nameClassName={"group-hover:text-brand-yellow"}
                        />
                        <Person
                            name={"Emad Salim"}
                            role={"Logistics Lead-in-Traning"}
                            imageUrl={emad}
                            url={"https://www.linkedin.com/in/emadsalim-json/"}
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-yellow"}
                        />
                        <Person
                            name={"Raheem Madeleka"}
                            role={"Logistics"}
                            imageUrl={raheem}
                            url={
                                "https://www.linkedin.com/in/raheem-madeleka-953385236/"
                            }
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-yellow"}
                        />

                        <Person
                            name={"Hamdan Shaikh"}
                            role={"Logistics"}
                            imageUrl={hamdan}
                            url={"https://www.linkedin.com/in/hishaikh-imti/"}
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-yellow"}
                        />
                        <Person
                            name={"Mahek Parmar"}
                            role={"Logistics"}
                            imageUrl={noPicYellow}
                            url={
                                "https://www.linkedin.com/in/mahek-parmar-838613248/"
                            }
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-yellow"}
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
                            nameClassName={"group-hover:text-brand-green"}
                        />
                        <Person
                            name={"Alireza Rahnama"}
                            role={"Sponsorship"}
                            imageUrl={ali}
                            url={
                                "https://www.linkedin.com/in/alirezarahnama-dev/"
                            }
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-green"}
                        />
                        <Person
                            name={"Ahmed Julkernain"}
                            role={"Sponsorship"}
                            imageUrl={ahmed}
                            url={
                                "https://www.linkedin.com/in/ahmed-julkernain-672915274/"
                            }
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-green"}
                        />
                        <Person
                            name={"Muhammad Usman"}
                            role={"Sponsorship"}
                            imageUrl={muhammad}
                            url={"http://linkedin.com/in/usman12529"}
                            nameClassName={"group-hover:text-brand-green"}
                        />
                        <Person
                            name={"Tasneem Tabannum"}
                            role={"Sponsorship"}
                            imageUrl={noPicGreen}
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-green"}
                        />

                        <Person
                            name={"Erfan Tajalli"}
                            role={"Sponsorship"}
                            imageUrl={noPicGreen}
                            className={"object-left"}
                            nameClassName={"group-hover:text-brand-green"}
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
