const Challenge = () => (
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
            Challenge
        </h2>
        <div className={"flex flex-col flex-wrap gap-10"}>
            <div className={"flex flex-col"}>
                <h3
                    className={"text-2xl font-Montserrat text-center font-bold"}
                >
                    Prompt
                </h3>
                <h3 className={"text-xl font-semibold italic text-center"}>
                    "ADDRESS THE PRESSING CHALLENGES FACED BY ARCTIC COMMUNITIES
                    DUE TO CLIMATE CHANGE, FOCUSING ON TRANSPORTATION,
                    ENVIRONMENT, EDUCATION, AND SAFETY."
                </h3>
            </div>
            <div className={"flex flex-col"}>
                <h3
                    className={"text-2xl font-Montserrat text-center font-bold"}
                >
                    Areas to Explore
                </h3>
                <ul
                    className={
                        "underline-offset-2 list-disc ml-4 font-Montserrat"
                    }
                >
                    <li className={"my-2"}>
                        <strong className={"text-primary"}>
                            TRANSPORTATION INNOVATION:
                        </strong>{" "}
                        DEVELOP INNOVATIVE SOLUTIONS TO OVERCOME TRANSPORTATION
                        CHALLENGES IN THE ARCTIC, ENSURING SAFE AND EFFICIENT
                        MOBILITY FOR RESIDENTS AND GOODS.
                    </li>
                    <li className={"mb-2"}>
                        <strong className={"text-primary"}>
                            ENVIRONMENTAL SUSTAINABILITY:
                        </strong>{" "}
                        NEW (OR INNOVATIVE USES OF EXISTING) TECHNOLOGIES TO
                        INCREASE THE USE OF CLEAN FUELS IN ARCTIC ENVIRONMENTS
                        AND REDUCE GHGS.
                    </li>
                    <li className={"mb-2"}>
                        <strong className={"text-primary"}>
                            EDUCATIONAL INITIATIVES:
                        </strong>{" "}
                        CREATE TOOLS OR PLATFORMS THAT INTEGRATE ARCTIC SCIENCE
                        WITH INDIGENOUS KNOWLEDGE, PROMOTING EDUCATION AND
                        AWARENESS ABOUT THE ARCTIC'S SIGNIFICANCE
                    </li>
                    <li className={"mb-2"}>
                        <strong className={"text-primary"}>
                            SAFETY AND SECURITY:
                        </strong>{" "}
                        DESIGN STRATEGIES OR TECHNOLOGIES TO ENHANCE SAFETY AND
                        SECURITY MEASURES IN THE ARCTIC, MITIGATING RISKS FOR
                        RESIDENTS AND STAKEHOLDERS
                    </li>
                </ul>
            </div>
            <div className={"flex flex-col"}>
                <a
                    href={
                        "https://docs.google.com/document/d/1WsmdPLKT-2d0U50-IeMrWLv3JgldugMc4LE7mty9giU/edit#heading=h.h1rrpkitbs51"
                    }
                    target="_blank"
                    className={
                        "text-lg text-center text-primary hover:underline"
                    }
                    rel="noopener noreferrer"
                >
                    Resources to Explore
                </a>
            </div>
        </div>
    </div>
);

export default Challenge;
