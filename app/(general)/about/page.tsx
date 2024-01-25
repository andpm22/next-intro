import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About page',
    description: 'This is an about page',
    keywords: ['Andres', 'Informacion', '...']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}