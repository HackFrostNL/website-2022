import { cn } from "@/lib/utils";

interface PersonProps {
    name: string;
    role: string;
    imageUrl: string;
    url?: string;
    className?: string;
    nameClassName?: string;
}

const PersonContent = ({
    name,
    role,
    imageUrl,
    className,
    nameClassName,
}: Omit<PersonProps, "url">) => (
    <>
        <img
            src={imageUrl}
            alt={name}
            className={cn(
                "h-64 w-64 rounded-full object-cover group-hover:scale-110 transition ease-in-out",
                className
            )}
        />
        <div className={"flex flex-col"}>
            <span
                className={cn(
                    `text-center text-2xl font-Montserrat group-hover:text-brand-yellow`,
                    nameClassName
                )}
            >
                {name}
            </span>
            <span className={"text-center"}>{role}</span>
        </div>
    </>
);

const Person = (person: PersonProps) => {
    if (person.url) {
        return (
            <a
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                    "flex flex-col gap-5 group justify-center items-center"
                }
            >
                <PersonContent {...person} />
            </a>
        );
    }

    return (
        <div
            className={"flex flex-col gap-5 group justify-center items-center"}
        >
            <PersonContent {...person} />
        </div>
    );
};

export default Person;
