import { ReactNode } from "react";
import Snowflakes from "./Snowflakes";
import { Separator } from "../ui/separator";

const Hero = ({ title, children }: { title: string; children?: ReactNode }) => (
    <>
        <div className={"flex flex-col items-center justify-center gap-5"}>
            <h1
                className={
                    "scroll-m-20 text-5xl font-bold tracking-tight lg:text-7xl font-josefin [text-shadow:_0_3px_0_hsl(var(--primary))]"
                }
            >
                {title}
            </h1>
            <Snowflakes />
            {children}
        </div>
        <Separator />
    </>
);

export default Hero;
