import Person, { PersonProps } from "@/components/Person/Person";

interface PeopleSectionProps {
    title: string;
    people: PersonProps[];
}

const PeopleSection = ({ title, people }: PeopleSectionProps) => (
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
            {title}
        </h2>
        <div className={"grid grid-cols-1 xl:grid-cols-2 gap-5"}>
            {people.map((person, i) => (
                <Person {...person} key={i} />
            ))}
        </div>
    </div>
);

export default PeopleSection;
