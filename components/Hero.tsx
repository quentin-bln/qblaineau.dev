"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mt-32 mb-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7] mb-6">
                    Quentin BLAINEAU
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
                    <span className="text-white font-bold">Développeur Junior.</span> À la recherche d'une alternance pour un Bachelor Concepteur Développeur d'Applications pour septembre 2026.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://github.com/TonPseudo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg text-sm font-medium transition-colors">
                        <GithubIcon className="w-4 h-4" />
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg text-sm font-medium transition-colors">
                        <LinkedinIcon className="w-4 h-4" />
                        LinkedIn
                    </a>
                    <a href="mailto:ton.email@email.com" className="flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg text-sm font-medium transition-colors">
                        <Mail className="w-4 h-4" />
                        Contact
                    </a>
                    <a href="/CV_Quentin_BLAINEAU.pdf" download className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg text-sm font-medium transition-colors">
                        <Download className="w-4 h-4" />
                        CV
                    </a>
                </div>
            </motion.div>
        </div>
    );
}