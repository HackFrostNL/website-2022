import Faq from "@/components/Faq/Faq";
import { Link } from "@tanstack/react-router";

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
        answer: "Hack Frost 4.0 will be held in the whale atrium at the MUN Core Sciences Facility from February 16th to 18th, 2024. ",
    },
    {
        question: "What happens in a hackathon?",
        answer: (
            <div className={"flex flex-col gap-2"}>
                <p>
                    Our hackathons are 48 hours long. Day 1 is the challenge
                    announcment & team formation. Day 2 is mentorship,
                    workshops, games, and sponsor booths. Day 3 is project
                    presentations and wrap-up.
                </p>
                <p>
                    Check out our{" "}
                    <Link
                        to={"/hackathons/2023"}
                        className={"text-primary hover:underline"}
                    >
                        2023 Hackathon page
                    </Link>{" "}
                    to see what the schedule was like last year!
                </p>
            </div>
        ),
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
        answer: "Yes, there will be prizes! We'll be announcing them soon, so stay tuned!",
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
    <div className={"flex flex-col gap-5 w-[100%] lg:w-[90%]"}>
        <h2
            className={
                "text-primary text-3xl font-josefin text-center lg:text-left"
            }
        >
            Frequently Asked Questions
        </h2>
        <Faq questions={questions} />
    </div>
);

export default FaqSection;
