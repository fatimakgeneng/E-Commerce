import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function SrtripeSuccess(){
    return(
        <div className="h-screen">
            <div className="mt-32 md:max-w-[50vw] mx-auto">
                <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                        Congratulations! Your payment has been successful
                    </h3>
                    <p className="text-gray-600 my-2">Thank you for the purchase</p>
                    <Button asChild className="mt-4">
                        <Link href="/">Go back to the Homepage</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}