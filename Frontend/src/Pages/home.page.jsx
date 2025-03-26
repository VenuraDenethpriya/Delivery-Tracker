import { Component } from "@/BarChart";
import CarrierPerformance from "@/CarrierPerformance";
import ChartSection from "@/ChartSection";
import RecentSection from "@/RecentShipment";

function HomePage() {
    return ( 
        <section className="px-16 text-3xl font-semibold"> 
            <h1 className="py-6">Dashboard</h1>
            <div className="pb-12">
                <ChartSection />
                <RecentSection />
                <CarrierPerformance />
            </div>
        </section>
     );
}

export default HomePage;