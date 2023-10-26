import Workshop from "@/components/Workshop/Workshop";

import PitchingYourProject from "@/assets/docs/hackathons/2023/Pitching_Your_Project_W23_HackFrost.pdf";

const workshops = [
    {
        title: "Pitch Clinic",
        time: "Saturday, April 1st, 3:00 - 4:00 PM",
        location: "IIC 2001",
        authors: "Maggie Courish (Genesis)",
        link: PitchingYourProject,
    },
    {
        title: "Github with Girish",
        time: "Sunday, April 2nd, 10:00 - 11:00 AM",
        location: "IIC 2001",
        authors: "Girish Verma",
    },
];

const WorkshopSection = () => (
    <div
        className={
            "flex flex-col gap-5 w-[100%] lg:w-[90%] items-center justify-center"
        }
    >
        <h2
            className={
                "text-primary text-3xl font-josefin text-center lg:text-left"
            }
        >
            Workshops
        </h2>
        <div
            className={
                "flex flex-row flex-wrap gap-4 justify-center w-[100%] items-center"
            }
        >
            {workshops.map((workshop, i) => (
                <Workshop {...workshop} key={i} />
            ))}
        </div>
    </div>
);

export default WorkshopSection;
