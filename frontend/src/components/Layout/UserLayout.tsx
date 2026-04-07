import { Outlet } from "react-router-dom";
import Header from "../Common/Header";
import Topbar from "./TopBar";
import Footer from "../Common/Footer";

const UserLayout = () => {
    return (
        <div>
            <Topbar />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default UserLayout;
