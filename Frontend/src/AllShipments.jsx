import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import SortBy from "./SortBy";

const shipments = [
    { trackingId: "TID-001", carrier: "DHL", date: "2024-03-01", status: "Delivered" },
    { trackingId: "TID-002", carrier: "FedEx", date: "2024-03-02", status: "Delivered" },
    { trackingId: "TID-003", carrier: "UPS", date: "2024-03-03", status: "Pending" },
    { trackingId: "TID-004", carrier: "USPS", date: "2024-03-04", status: "Shipped" },
    { trackingId: "TID-005", carrier: "DHL", date: "2024-03-05", status: "In Transit" },
    { trackingId: "TID-006", carrier: "FedEx", date: "2024-03-06", status: "Delivered" },
    { trackingId: "TID-007", carrier: "UPS", date: "2024-03-07", status: "Pending" },
    { trackingId: "TID-008", carrier: "USPS", date: "2024-03-08", status: "Delivered" },
    { trackingId: "TID-009", carrier: "DHL", date: "2024-03-09", status: "In Transit" },
    { trackingId: "TID-010", carrier: "FedEx", date: "2024-03-10", status: "Delivered" },
    { trackingId: "TID-011", carrier: "UPS", date: "2024-03-11", status: "Pending" },
    { trackingId: "TID-012", carrier: "USPS", date: "2024-03-12", status: "Delivered" },
    { trackingId: "TID-013", carrier: "DHL", date: "2024-03-13", status: "In Transit" },
    { trackingId: "TID-014", carrier: "FedEx", date: "2024-03-14", status: "Delivered" },
    { trackingId: "TID-015", carrier: "UPS", date: "2024-03-15", status: "Pending" },
    { trackingId: "TID-016", carrier: "USPS", date: "2024-03-16", status: "Delivered" },
    { trackingId: "TID-017", carrier: "DHL", date: "2024-03-17", status: "In Transit" },
    { trackingId: "TID-018", carrier: "FedEx", date: "2024-03-18", status: "Delivered" },
    { trackingId: "TID-019", carrier: "UPS", date: "2024-03-19", status: "Pending" },
    { trackingId: "TID-020", carrier: "USPS", date: "2024-03-20", status: "Delivered" },
    { trackingId: "TID-021", carrier: "DHL", date: "2024-03-21", status: "In Transit" },
    { trackingId: "TID-022", carrier: "FedEx", date: "2024-03-22", status: "Delivered" },
];

function AllShipments() {
    return (
        <section className="py-12">
            <Card className="bg-slate-900 text-white">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <CardTitle className="text-3xl">All Shipment List</CardTitle>
                            <CardDescription className="text-slate-300">All shipments across all carriers</CardDescription>
                        </div>
                        <div>
                            <Link to="/shipments/add">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
                                    Add new shipment
                                </button>
                            </Link>
                        </div>
                    </div>
                </CardHeader>
                <div className="px-6">
                    <SortBy/>
                </div>
                
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow className="text-white">
                                    <TableHead className="text-white">Tracking ID</TableHead>
                                    <TableHead className="text-white">Carrier</TableHead>
                                    <TableHead className="text-white">Date</TableHead>
                                    <TableHead className="text-white"> Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {shipments.map((shipment, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{shipment.trackingId}</TableCell>
                                        <TableCell>{shipment.carrier}</TableCell>
                                        <TableCell>{shipment.date}</TableCell>
                                        <TableCell>
                                            <Badge className={
                                                shipment.status === "Delivered"
                                                    ? "bg-blue-500"
                                                    : shipment.status === "In Transit"
                                                        ? "bg-lime-600"
                                                        : "bg-rose-500"
                                            }>
                                                {shipment.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

export default AllShipments;