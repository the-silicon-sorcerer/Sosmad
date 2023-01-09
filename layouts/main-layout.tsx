import { ReactNode } from "react";
import Footer from "../components/footer/footer.compoent";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
            <Footer />
        </>

    )
}

export default MainLayout;