import { useState } from "react";
import { Button } from "../ui/button";

type Content = {
    buttonText: string;
    contentLink: string;
};

const HidableContent = ({
    title,
    content,
}: {
    title: string;
    content: Content[];
}) => {
    const [selectedContent, setSelectedContent] = useState<string>("");
    const handleClick = (link: string) => {
        if (selectedContent === link) setSelectedContent("");
        else setSelectedContent(link);
    };

    return (
        <div className={"flex flex-col gap-5 w-[100%] lg:w-[90%] items-center"}>
            <h2
                className={
                    "text-primary text-3xl font-josefin text-center lg:text-left"
                }
            >
                {title}
            </h2>
            <div className={"flex flex-row flex-wrap gap-2 justify-center"}>
                {content.map((item) => (
                    <Button
                        key={item.contentLink}
                        variant={
                            selectedContent === item.contentLink
                                ? "secondary"
                                : "default"
                        }
                        onClick={() => handleClick(item.contentLink)}
                    >
                        {item.buttonText}
                    </Button>
                ))}
            </div>
            {content.map(({ contentLink }, i) => (
                <div
                    key={i}
                    className={`rounded w-[100%] items-center justify-center flex-col gap-5 ${
                        selectedContent !== contentLink ? "hidden" : "flex"
                    }`}
                >
                    {contentLink.endsWith(".pdf") ? (
                        <object
                            data={contentLink}
                            className={"w-[100%] h-[70vh]"}
                        />
                    ) : (
                        <img
                            src={contentLink}
                            className={"max-w-[100%] lg:max-w-[900px]"}
                        />
                    )}

                    <Button asChild>
                        <a href={contentLink} target="_blank" rel="noreferrer">
                            Open in New Tab
                        </a>
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default HidableContent;
