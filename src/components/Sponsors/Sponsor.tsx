import { cn } from "@/lib/utils";

interface SponsorProps {
    name: string;
    imageUrl: string;
    url: string;
    className?: string;
}

const Sponsor = ({ name, imageUrl, url, className }: SponsorProps) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <img
            src={imageUrl}
            alt={name}
            className={cn("hover:scale-125 transition ease-in-out", className)}
        />
    </a>
);

export default Sponsor;
