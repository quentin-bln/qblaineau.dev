"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, Layout, Cpu } from "lucide-react";
import { MagicCard } from "@/components/magicui/MagicCard";

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="w-full max-w-6xl mt-12 mb-32 px-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <MagicCard className="p-6 flex flex-col items-start w-full bg-[#0f172a] border-none rounded-2xl" gradientColor="#1e293b">
                    <div className="flex justify-between w-full mb-4">
                        <span className="text-2xl">📦</span>
                        <a href="https://github.com/TonPseudo/projet1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Gestion de Stock</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Application interne permettant aux commerçants de suivre leur stock en temps réel avec un système d'alerte et rapports.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <Cpu className="w-3 h-3" /> Java
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <Database className="w-3 h-3" /> Postgres
                        </span>
                    </div>
                </MagicCard>

                <MagicCard className="p-6 flex flex-col items-start w-full bg-[#0f172a] border-none rounded-2xl" gradientColor="#1e293b">
                    <div className="flex justify-between w-full mb-4">
                        <span className="text-2xl">🤖</span>
                        <a href="https://github.com/TonPseudo/projet2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Portfolio React</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Portfolio moderne avec animations fluides, développé avec NextJS et TailwindCSS pour présenter mes compétences.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <Layout className="w-3 h-3" /> NextJS
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <Layout className="w-3 h-3" /> Tailwind
                        </span>
                    </div>
                </MagicCard>

                <MagicCard className="p-6 flex flex-col items-start w-full bg-[#0f172a] border-none rounded-2xl" gradientColor="#1e293b">
                    <div className="flex justify-between w-full mb-4">
                        <span className="text-2xl">⚡</span>
                        <a href="https://github.com/TonPseudo/projet3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Outil Interne</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Script d'automatisation et de traitement de données pour simplifier les processus administratifs quotidiens.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <Database className="w-3 h-3" /> Python
                        </span>
                    </div>
                </MagicCard>

            </div>
        </motion.div>
    );
}