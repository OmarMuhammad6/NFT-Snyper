import { Admin_Profix, Client_Profix } from "../config/types";
import AdminLayout from "./admin";
import ClientLayout from "./client";
import { useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation().pathname;
    return (
        <>
            {location.includes(Admin_Profix) && <AdminLayout />}
            {location.includes(Client_Profix) && <ClientLayout />}
        </>
    );
};
export default Layout;
