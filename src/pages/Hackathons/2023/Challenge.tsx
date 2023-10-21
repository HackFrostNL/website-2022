const Challenge = () => (
    <div className={"flex flex-col gap-5 w-[100%] lg:w-[90%] justify-center items-center"}>
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
                    "How can we use technology to reduce the carbon footprint of
                    Industry deliveries?"
                </h3>
            </div>
            <div className={"flex flex-col"}>
                <h4 className={"text-lg text-center underline"}>Resources</h4>
                <ul className={"underline-offset-2 list-disc ml-4"}>
                    <li>
                        <a
                            href={
                                "https://www.eea.europa.eu/publications/co2-emissions-of-new-heavy"
                            }
                            target="_blank"
                            className={"text-primary hover:underline"}
                            rel="noopener noreferrer"
                        >
                            Reducing greenhouse gas emissions from heavy-duty
                            vehicles in Europe
                        </a>
                    </li>
                    <li>
                        <a
                            href={
                                "https://www.epa.gov/greenvehicles/fast-facts-transportation-greenhouse-gas-emissions"
                            }
                            target="_blank"
                            className={"text-primary hover:underline"}
                            rel="noopener noreferrer"
                        >
                            Fast Facts on Transportation Greenhouse Gas
                            Emissions
                        </a>
                    </li>

                    <li>
                        <a
                            href={"https://www.iea.org/energy-system/transport"}
                            target="_blank"
                            className={"text-primary hover:underline"}
                            rel="noopener noreferrer"
                        >
                            International Energy Agency - Transport
                        </a>
                    </li>

                    <li>
                        <a
                            href={"https://www.smartfreightcentre.org/en/y"}
                            target="_blank"
                            className={"text-primary hover:underline"}
                            rel="noopener noreferrer"
                        >
                            Smart Freigh Center
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Challenge;
