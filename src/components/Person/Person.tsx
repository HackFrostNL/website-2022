export interface PersonProps {
    name: string;
    imageUrl?: string;
    title: string;
    bio?: string;
}

const Person = ({ name, imageUrl, title, bio }: PersonProps) => (
    <div
        className={
            "flex flex-col md:flex-row bg-secondary p-2 rounded-lg gap-2 border-b-[0.1px] border-primary"
        }
    >
        <img
            src={imageUrl}
            className={
                "rounded-lg w-[200px] h-[200px] object-cover object-center"
            }
        />
        <div className={"flex flex-col gap-2 p-2"}>
            <div className={"flex flex-col"}>
                <h3 className={"text-xl font-Montserrat font-bold"}>{name}</h3>
                <h4 className={"text-lg text-primary"}>{title}</h4>
            </div>
            {bio && <p dangerouslySetInnerHTML={{ __html: bio }} />}
        </div>
    </div>
);

export default Person;
