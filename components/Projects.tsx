"use client";

import { motion } from "framer-motion";
import { ExternalLink, Gift, Car, ShoppingCart } from "lucide-react";
import { MagicCard } from "@/components/magicui/MagicCard";
import { SiReact, SiJavascript, SiShadcnui, SiFlutter, SiDart, SiLaravel, SiPhp, SiMysql } from "react-icons/si";

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="w-full max-w-6xl mt-12 mb-32 px-4"
        >
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Projets</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <MagicCard className="p-6 flex flex-col items-start w-full bg-[#0f172a] border-none rounded-2xl" gradientColor="#1e293b">
                    <div className="flex justify-between w-full mb-4">
                        <Gift className="w-8 h-8 text-purple-400" />
                        <a href="https://github.com/quentin-bln/surpriz-web" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Surpriz</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Application de gestion de listes de souhaits collaborative pour événements. Écosystème complet incluant interfaces web, mobile et API.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <SiReact className="w-3 h-3" /> React
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <SiJavascript className="w-3 h-3" /> JavaScript
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <SiShadcnui className="w-3 h-3" /> shadcn/ui
                        </span>
                    </div>
                </MagicCard>

                <MagicCard className="p-6 flex flex-col items-start w-full bg-[#0f172a] border-none rounded-2xl" gradientColor="#1e293b">
                    <div className="flex justify-between w-full mb-4">
                        <Car className="w-8 h-8 text-blue-400" />
                        <a href="https://github.com/quentin-bln/7Check-Frontend" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">7Check</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Application mobile métier permettant aux agents de la société Seven de réaliser les états des lieux d&#39;entrée et de sortie de véhicules.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <SiFlutter className="w-3 h-3" /> Flutter
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <SiDart className="w-3 h-3" /> Dart
                        </span>
                    </div>
                </MagicCard>

                <MagicCard className="p-6 flex flex-col items-start w-full bg-[#0f172a] border-none rounded-2xl" gradientColor="#1e293b">
                    <div className="flex justify-between w-full mb-4">
                        <ShoppingCart className="w-8 h-8 text-emerald-400" />
                        <a href="https://github.com/quentin-bln/alisales" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Alisales</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Plateforme web e-commerce conçue pour la gestion et la proposition d&#39;un vaste catalogue de produits de l&#39;entreprise Alizon.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <SiLaravel className="w-3 h-3" /> Laravel
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <SiPhp className="w-3 h-3" /> PHP
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee] rounded-full text-xs font-bold text-slate-900">
                            <SiMysql className="w-3 h-3" /> MySQL
                        </span>
                    </div>
                </MagicCard>

            </div>
        </motion.div>
    );
}