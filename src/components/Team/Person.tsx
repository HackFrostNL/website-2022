import { cn } from "@/lib/utils";

interface PersonProps {
    name: string;
    role: string;
    imageUrl: string;
    url: string;
    className?: string;
}

const Person = ({ name, role, imageUrl, url, className }: PersonProps) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={"flex flex-col gap-5 group"}
    >
        <img
            src={imageUrl}
            alt={name}
            className={cn("h-64 w-64 rounded-full object-cover group-hover:scale-110 transition ease-in-out", className)}
        />
        <div className={"flex flex-col"}>
            <span className={"text-center text-2xl font-Montserrat group-hover:text-brand-yellow"}>
                {name}
            </span>
            <span className={"text-center"}>{role}</span>
        </div>
    </a>
);

export default Person;