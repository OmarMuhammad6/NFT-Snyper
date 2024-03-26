import ClientPage from "../../pages/client";
import ClientHeader from "../../components/Header/client";
import ClientFooter from "../../components/Footer/client";

const ClientLayout = () => {
    return (
        <>
            <ClientHeader />
            <ClientPage />
            <ClientFooter />
        </>
    );
};
export default ClientLayout;
