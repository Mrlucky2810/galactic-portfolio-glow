import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "@/components/SimpleFooter.tsx";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen relative overflow-x-hidden">
            <Navigation />
            <main className="relative z-10">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;