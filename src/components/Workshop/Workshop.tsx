import { Separator } from "../ui/separator";

interface WorkshopProps {
    title: string;
    time: string;
    location: string;
    authors: string;
    link?: string;
}

const Workshop = ({ title, time, location, authors, link }: WorkshopProps) => (
    <div className={"flex flex-col rounded-lg bg-secondary p-3 min-h-[185px] min-w-[315px] gap-2 border-b-[0.1px] border-primary shadow-inner"}>
        <h4 className={"font-Montserrat text-lg"}>{title}</h4>
        <Separator className={"bg-primary"} />
        <div className={"flex flex-col gap-1"}>
            <p>🕒 {time}</p>
            <p>🗺 {location}</p>
            <p>👤 {authors}</p>
            {link && (
                <p>
                    🔗{" "}
                    <a
                        href={link}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={"text-primary hover:underline"}
                    >
                        Download
                    </a>
                </p>
            )}
        </div>
    </div>
);

export default Workshop;
