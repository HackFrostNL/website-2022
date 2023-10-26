interface SponsorblockProps {
    title: string;
    children?: React.ReactNode;
}

const SponsorBlock = ({ title, children }: SponsorblockProps) => (
    <div className={"flex flex-col justify-center items-center gap-3"}>
        <h3 className={"text-primary font-Montserrat text-2xl font-bold"}>{title}</h3>
        <div className={"flex flex-row justify-center items-center gap-12 lg:gap-24 flex-wrap"}>{children}</div>
    </div>
);

export default SponsorBlock;
