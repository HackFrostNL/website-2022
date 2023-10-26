const TeamsSection = () => (
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
            Teams
        </h2>
        <iframe
            src="https://airtable.com/embed/shrMrpwXPpHAo8KHo?backgroundColor=blue&amp;layout=card"
            width="100%"
            height="533"
        ></iframe>
    </div>
);

export default TeamsSection;
