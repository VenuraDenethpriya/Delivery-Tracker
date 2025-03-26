import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

function AddShipmentForm() {
    const formSchema = z.object({
        trackingId: z.string().min(6, {
            message: "Tracking ID must be at least 6 characters.",
        }),
        carrier: z.string({
            required_error: "Please select a carrier.",
        }),
        origin: z.string().min(2, {
            message: "Origin must be at least 2 characters.",
        }),
        destination: z.string().min(2, {
            message: "Destination must be at least 2 characters.",
        }),
        description: z.string().optional(),
        recipientName: z.string().min(2, {
            message: "Recipient name must be at least 2 characters.",
        }),
        recipientEmail: z.string().email({
            message: "Please enter a valid email address.",
        }),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    async function handleSubmit(values) {
        console.log(values);
        toast.success("Shipment added successfully!");

    }

    return (
        <section className="flex justify-center items-center pt-28">
            <Card className="w-full max-w-2xl p-6 shadow-lg rounded-lg bg-slate-900 text-white">
                <h2 className="text-3xl font-bold text-center mb-6">Add New Shipment</h2>
                <Form {...form} className="space-y-6">
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            {/* Left Side Inputs */}
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="trackingId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tracking ID</FormLabel>
                                            <FormControl>
                                                <Input placeholder="TID-#######" className="bg-slate-300" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="carrier"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Carrier</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="bg-slate-300">
                                                        <SelectValue placeholder="Select a Carrier" className=""/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="bg-slate-300">
                                                    <SelectItem value="dhl">DHL</SelectItem>
                                                    <SelectItem value="fedex">FedEx</SelectItem>
                                                    <SelectItem value="ups">UPS</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="origin"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Origin</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Origin" {...field} className="bg-slate-300"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Right Side Inputs */}
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="destination"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Destination</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Destination" {...field} className="bg-slate-300"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Description" {...field} className="bg-slate-300" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="recipientName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Recipient Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Recipient Name" {...field} className="bg-slate-300"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="recipientEmail"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Recipient Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Recipient Email" {...field} className="bg-slate-300"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <Button type="submit" className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </Card>
        </section>
    );
}

export default AddShipmentForm;
