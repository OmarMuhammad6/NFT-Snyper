import AdminPage from "../../pages/admin";
import AdminHeader from "../../components/Header/admin";
import AdminFooter from "../../components/Footer/admin";

const AdminLayout = () => {
    return (
        <>
            <AdminHeader />
            <AdminPage />
            <AdminFooter />
        </>
    );
};
export default AdminLayout;
