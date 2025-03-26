import Navigation from "@/Navigation";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

function RootLayout() {
    return ( 
        <section>
            <Navigation />
            <Toaster />
            <Outlet />
        </section>
     );
}

export default RootLayout;