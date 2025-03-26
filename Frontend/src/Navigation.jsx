import { useState } from "react";
import { LayoutDashboard, Package, Truck, Menu, X } from "lucide-react";
import { Separator } from "./components/ui/separator";
import { Link } from "react-router";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <nav className=" shadow-md">
            <div className="flex items-center justify-between p-6">
                {/* Logo Section */}
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <Package />
                    <span className="ml-2">Delivery Tracker</span>
                </Link>

                {/* Hamburger Menu Button (Mobile) */}
                <button 
                    className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex space-x-8 text-lg">
                    <li>
                        <Link to="/" className="flex items-center hover:text-blue-600">
                            <LayoutDashboard />
                            <span className="ml-2">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/shipments" className="flex items-center hover:text-blue-600">
                            <Truck />
                            <span className="ml-2">Shipments</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-blue-900 shadow-md p-4 space-y-4">
                    <Link to="/" className="flex items-center hover:text-blue-600" onClick={() => setIsOpen(false)}>
                        <LayoutDashboard />
                        <span className="ml-2">Dashboard</span>
                    </Link>
                    <Link to="/shipments" className="flex items-center hover:text-blue-600" onClick={() => setIsOpen(false)}>
                        <Truck />
                        <span className="ml-2">Shipments</span>
                    </Link>
                </div>
            )}

            <Separator className="bg-neutral-600" />
        </nav>
    );
}

export default Navigation;
