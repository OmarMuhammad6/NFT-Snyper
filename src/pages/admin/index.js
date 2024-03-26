import { Admin_Profix } from "../../config/types";
import Dashboard from "./dashboard";
import { Routes, Route } from "react-router-dom"

const AdminPage = () => {
    return (
        <Routes>
            <Route path={Admin_Profix} element={<Dashboard />} ></Route>
        </Routes>
    );
};

export default AdminPage;
