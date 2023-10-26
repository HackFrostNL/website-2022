import CaptionedPicture from "@/components/CaptionedPicture";

import winners from "@/assets/images/winners/2023";

const WinnerSection = () => (
    <div className={"flex flex-col gap-5 w-[100%] lg:w-[90%] items-center justify-center"}>
        <h2
            className={
                "text-primary text-3xl font-josefin text-center lg:text-left"
            }
        >
            Winners
        </h2>
        <div className={"flex flex-row flex-wrap gap-10 justify-center w-[100%] items-center"}>
            {Object.entries(winners).map(([key, value], i) => (
                <CaptionedPicture
                    key={i}
                    src={value.img}
                    className={"rounded-lg max-w-[100%] lg:max-w-[30%]"}
                >
                    <div className={"flex flex-col justify-center items-center"}>
                        <h3 className={"text-lg font-Montserrat font-bold"}>{key} Place</h3>
                        <h4>{value.name}</h4>
                    </div>
                </CaptionedPicture>
            ))}
        </div>
    </div>
);

export default WinnerSection;
