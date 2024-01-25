import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact page',
    description: 'This is a contact page',
    keywords: ['Andres', 'Informacion', '...']
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}