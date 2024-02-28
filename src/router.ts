import { Router, Route, RootRoute } from "@tanstack/react-router";
import Root from "./Root";
import Home from "./pages/Home/Home";
import Team from "./pages/Team";
import Hackathon2023 from "./pages/Hackathons/2023/2023";
import Contact from "./pages/Contact";

const rootRoute = new RootRoute({
    component: Root,
});

const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
});

const contactRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/contact",
    component: Contact,
});

const teamRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/team",
    component: Team,
});

const hackathon2023 = new Route({
    getParentRoute: () => rootRoute,
    path: "/hackathons/2023",
    component: Hackathon2023,
});

const routeTree = rootRoute.addChildren([
    homeRoute,
    contactRoute,
    teamRoute,
    hackathon2023,
]);
const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

export default router;
