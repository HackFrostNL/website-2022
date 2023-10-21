import { Outlet } from "@tanstack/react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const Root = () => (
    <div className="dark">
        <Header />
        <Outlet />
        <Footer />
    </div>
);

export default Root;
