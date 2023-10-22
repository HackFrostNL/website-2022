import { cn } from "@/lib/utils";
import React from "react";

const CaptionedPicture = React.forwardRef<
    React.ElementRef<"img">,
    React.ComponentPropsWithoutRef<"img">
>(({ className, children, ...props }, ref) => (
    <div className={cn("flex flex-col items-center gap-2", className)}>
        <img ref={ref} className={"rounded-lg"} {...props} />
        {children}
    </div>
));

export default CaptionedPicture;
