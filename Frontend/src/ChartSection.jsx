import { LaptopMinimalCheck, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

function ChartSection() {
    return (
        <section>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Card className="bg-slate-900">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div className="pb-0">
                                <CardTitle className="text-xl font-medium text-white">Total Shipments</CardTitle>
                                <CardTitle className="text-4xl font-medium text-white">22</CardTitle>
                            </div>
                            <div>
                                <Package className="h-6 w-6 text-slate-300" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold"></div>
                            <p className="text-xs text-slate-300">Across all carriers</p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                <Card className="bg-slate-900">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div className="pb-0">
                                <CardTitle className="text-xl font-medium text-white">Success Rate</CardTitle>
                                <CardTitle className="text-4xl font-medium text-white">95%</CardTitle>
                            </div>
                            <div>
                            <LaptopMinimalCheck className="h-6 w-6 text-slate-300" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold"></div>
                            <p className="text-xs text-slate-300">+2.5% from last month</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default ChartSection;