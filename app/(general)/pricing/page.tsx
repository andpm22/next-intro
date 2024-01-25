import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Pricing page',
    description: 'This is a Pricing page',
    keywords: ['Andres', 'Informacion', '...']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}