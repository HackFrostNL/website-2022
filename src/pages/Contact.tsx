import Hero from "@/components/Hero/Hero";

const Contact = () => {
    return (
        <div
            className={
                "flex flex-col items-center justify-center gap-10 w-[100%] px-4 lg:px-10 md:text-base lg:text-lg"
            }
        >
            <Hero title={"Get In Touch"} />
            <div
                className={
                    "flex flex-col justify-center gap-10 sm:w-[100%] lg:w-[60%] px-4 lg:px-10"
                }
            >
                <p>
                    Have a question, comment, or just want to say hello? We'd
                    love to hear from you! Please feel free to reach out to us
                    via email or Discord, and we'll get back to you as soon as
                    possible.
                </p>
                <div className={"flex flex-col gap-2"}>
                    <span>
                        <b>Email: </b>
                        <a
                            href={"mailto:sponsorship@hackfrostnl.ca"}
                            className={"text-primary hover:underline"}
                        >
                            sponsorship@hackfrostnl.ca
                        </a>
                    </span>
                    <span>
                        <b>Discord: </b>
                        <a
                            href={"https://discord.gg/mEH3UH7hPu"}
                            target={"_blank"}
                            className={"text-primary hover:underline"}
                        >
                            Join our Discord server
                        </a>
                    </span>
                </div>
                <p>
                    Your feedback is invaluable to us as we strive to improve
                    our services and provide you with the best experience
                    possible. Whether you have inquiries about our hackathons,
                    suggestions for improvement, or simply want to connect,
                    we're here to listen.
                </p>
                <p>Thank you for your interest in contacting us!</p>
            </div>
        </div>
    );
};

export default Contact;
