import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Stars } from "@/components/magicui/Stars";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[#020617] text-white font-sans flex flex-col items-center overflow-x-hidden pt-12">

            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#172554] via-[#020617] to-[#020617] z-0 pointer-events-none" />

            <Stars />

            <div className="relative z-10 flex flex-col items-center w-full">
                <Hero />
                <Skills />
                <Projects />
                <Footer />
            </div>

        </main>
    );
}