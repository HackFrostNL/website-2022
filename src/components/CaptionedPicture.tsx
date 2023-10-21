import React from "react";

const CaptionedPicture = React.forwardRef<
    React.ElementRef<"img">,
    React.ComponentPropsWithoutRef<"img">
>(({ className, children, ...props }, ref) => (
    <div className={"flex flex-col items-center gap-2"}>
        <img ref={ref} className={className} {...props} />
        {children}
    </div>
));

export default CaptionedPicture;
