import { Client_Profix } from "../../config/types";
import Home from "./home";
import { Routes, Route } from "react-router-dom";

const ClientPage = () => {
    return (
        <Routes>
            <Route path={Client_Profix} element={<Home />} ></Route>
        </Routes>
    );
};

export default ClientPage;
