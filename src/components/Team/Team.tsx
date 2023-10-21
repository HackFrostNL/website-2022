interface TeamProps {
    children?: React.ReactNode;
}

const Team = ({ children }: TeamProps) => (
    <div className={"flex flex-col justify-center items-center gap-3"}>
        {children}
    </div>
);

export default Team;
