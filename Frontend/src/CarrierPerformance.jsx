import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

function CarrierPerformance() {
    const chartData = [
        { Carrier: "DHL", Success: 12 },
        { Carrier: "FedEx", Success: 5 },
        { Carrier: "UPS", Success: 3 },
        { Carrier: "USPS", Success: 3 },
    ];

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "hsl(var(--blue-500))",
        },
    };

    return (
        <section>
            <Card className="bg-slate-900 text-white">
                <CardHeader>
                    <CardTitle>Carrier Performance</CardTitle>
                    <CardDescription className="text-slate-300">
                        Success rate comparison between carriers
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart
                            accessibilityLayer
                            data={chartData}
                            margin={{ top: 20 }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="Carrier"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="Success" fill="" radius={8}>
                                <LabelList
                                    position="top"
                                    offset={12}
                                    className="fill-white"
                                    fontSize={12}
                                />
                            </Bar>
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </section>
    );
}

export default CarrierPerformance;
