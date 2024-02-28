import * as React from "react";
import { Link, ToOptions } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { IoIosMail } from "react-icons/io";

const hackathons: { title: string; href: string }[] = [
    {
        title: "2023",
        href: "/hackathons/2023",
    },
];

const MenuLink = ({
    href,
    children,
}: {
    href: ToOptions["to"];
    children: React.ReactNode;
}) => {
    return (
        <Link to={href}>
            {({ isActive }) => {
                return (
                    <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                        active={isActive}
                    >
                        <p>{children}</p>
                    </NavigationMenuLink>
                );
            }}
        </Link>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-center",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {children}
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

const DesktopNavbar = () => (
    <div className={"gap-5 hidden md:flex"}>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <MenuLink href={"/team"}>Our Team</MenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Hackathons</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col w-[133.1px]">
                            {hackathons.map((hackathon) => (
                                <ListItem
                                    key={hackathon.title}
                                    href={hackathon.href}
                                >
                                    {hackathon.title}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <div className={"flex flex-row gap-2"}>
            <Button asChild>
                <a href={"https://discord.gg/mEH3UH7hPu"} target={"_blank"}>
                    <DiscordLogoIcon className="mr-2 h-5 w-5" />
                    Discord
                </a>
            </Button>
            <Button asChild>
                <Link to={"/contact"}>
                    <IoIosMail className="mr-2 h-6 w-6" />
                    Contact Us
                </Link>
            </Button>
        </div>
    </div>
);

const MobileNavbar = () => (
    <div className={"flex md:hidden"}>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col p-2 w-[150px]">
                            {hackathons.map((hackathon) => (
                                <ListItem
                                    key={hackathon.title}
                                    href={hackathon.href}
                                >
                                    Hackathon {hackathon.title}
                                </ListItem>
                            ))}
                            <ListItem href={"/team"}>Our Team</ListItem>
                            <ListItem
                                href={"https://discord.gg/mEH3UH7hPu"}
                                target={"_blank"}
                            >
                                Discord
                            </ListItem>
                            <ListItem href={"/contact"}>Contact Us</ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
);

const Navbar = () => (
    <>
        <DesktopNavbar />
        <MobileNavbar />
    </>
);

export default Navbar;
