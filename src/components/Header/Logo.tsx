import { Link } from "@tanstack/react-router";

const Logo = () => {
    return (
        <Link to="/" className={"inline-block"}>
            <div
                className={
                    "group flex items-center gap-2 w-fit  hover:fill-primary fill-white"
                }
            >
                <svg viewBox="0 0 500 550" className={"h-8 w-8"}>
                    <path d="M35.2 29.84h72.6l60.6 102v-102H241V525l-72.6-51.95V250l-60-101.4v282.48l-73.2-50.92ZM277 29.84h73.2v354.55l114.6-80.63v88.8L277 525Z" />
                </svg>
                <p
                    className={
                        "text-white font-josefin hidden group-hover:block"
                    }
                >
                    HACK FROST NL
                </p>
            </div>
        </Link>
    );
};

export default Logo;
