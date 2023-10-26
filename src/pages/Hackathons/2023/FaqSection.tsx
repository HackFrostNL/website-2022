import Faq from "@/components/Faq/Faq";

const questions = [
    {
        question: "What is a hackathon?",
        answer: (
            <div className={"flex flex-col gap-2"}>
                <p>
                    A hackathon is an opportunity to learn new concepts about
                    tech and apply them to some cool ideas. These ideas are
                    formulated to create things like websites, apps, or
                    unthinkable solutions to a problem presented by the
                    challenge prompt of the hackathon.
                </p>
                <p>
                    Don't worry, you don't have to have experience coding or be
                    an expert with computers to participate, think of it as an
                    opportunity!
                </p>
            </div>
        ),
    },
    {
        question: "Who can register?",
        answer: "The hackathon is open for university/college students, high school students, and working professionals from all backgrounds.",
    },
    {
        question: "When and where?",
        answer: (
            <div className={"flex flex-col gap-2"}>
                <p>
                    The hackathon will begin on Friday March 31st, around 5 pm
                    and end on Sunday April 2nd around 6pm.{" "}
                </p>
                <p>
                    We are partnering with the{" "}
                    <a href="https://genesis-centre.ca/" target={"_blank"} rel={"noopener noreferrer"} className={"text-primary hover:underline"}>Genesis Center</a>{" "}
                    this year, and we will be having the hackathon in-person at
                    Memorial University in the Bruneau Centre for Research and
                    Innovation (IIC) and the Science Building.{" "}
                </p>
            </div>
        ),
    },
    {
        question: "What happens in a hackathon?",
        answer: `Our hackathons are 48 hours long. Day 1 is the challenge announcment & team formation. Day 2 is mentorship, workshops, games, and sponsor booths. Day 3 is project presentations and wrap-up. Check the schedule above.`,
    },
    {
        question: "Do I need a team?",
        answer: (
            <div className={"flex flex-col gap-2"}>
                <p>
                    Yes, in order to participate in the hackathon, you must be
                    in a team of at least 2, but we do recommend forming a team
                    of 3-4 members. You can register your team through our
                    eventbrite page, where one member would need to form the
                    team and the rest register as part of that team.
                </p>
                <p>
                    If you don't yet have a team, you should join our discord
                    server and we'll fill you in during our team-forming
                    session. You might even find some people to team up with!
                </p>
            </div>
        ),
    },
    {
        question: "What if I don't code? Should I still register?",
        answer: (
            <div className={"flex flex-col gap-2"}>
                <p>
                    Of course! The hackathon isn't a competition to find the
                    Next Top Programmer, it's a learning experience! We'll have
                    workshops throughout to help you learn if you're a total
                    beginner. If you're not, you'll definitely learn something
                    new and valuable!
                </p>
                <p>
                    Focus on having fun and challenging yourself! You can choose
                    to focus on participating in the challenges, spending time
                    in events, or even just making new friends and connections.
                </p>
            </div>
        ),
    },
    {
        question: "What about the prizes?",
        answer: "We're giving out up to $6000 this year to the top 3 teams.",
    },
    {
        question: "Would I get swag and merchandise?",
        answer: (
            <p>
                Yes and <strong>YES</strong>! You'll get swag and merchandise by
                participating in our event. We're working hard to bring you cool
                swag that will get you right in the hacker mood that you can
                pick up during the hackathon
            </p>
        ),
    },
    {
        question: "I have more questions.",
        answer: (
            <>
                Our team of organizers is more than happy to answer your
                questions on our{" "}
                <a
                    href="https://discord.gg/x5drWuwTT4"
                    className={"text-primary hover:underline"}
                >
                    Discord
                </a>
                .
            </>
        ),
    },
];

const FaqSection = () => (
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
            Frequently Asked Questions
        </h2>
        <Faq
            questions={questions}
            className={"w-[100%] lg:min-w-[700px] lg:max-w-[60%] m-auto"}
        />
    </div>
);

export default FaqSection;
