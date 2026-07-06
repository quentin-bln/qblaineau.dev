"use client";

import { motion } from "framer-motion";
import { Layout, Server, Smartphone, Terminal } from "lucide-react";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiPhp,
    SiLaravel,
    SiMysql,
    SiFlutter,
    SiExpo,
    SiGithub,
    SiVercel,
    SiPhpmyadmin,
    SiDart,
    SiInsomnia
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="w-full max-w-6xl mt-24 mb-12 px-4"
        >
            <h3 className="text-3xl font-bold mb-16 text-white text-center">Compétences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                        <Layout className="w-5 h-5 text-cyan-400" />
                        <h4 className="text-lg font-semibold text-white">Front-end</h4>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <SiJavascript className="w-5 h-5 text-yellow-400" />
                            <span className="text-gray-300 text-sm font-medium">JavaScript</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <SiTypescript className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-300 text-sm font-medium">TypeScript</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <SiReact className="w-5 h-5 text-cyan-400" />
                            <span className="text-gray-300 text-sm font-medium">React</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <SiTailwindcss className="w-5 h-5 text-teal-400" />
                            <span className="text-gray-300 text-sm font-medium">Tailwind CSS</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                        <Server className="w-5 h-5 text-purple-400" />
                        <h4 className="text-lg font-semibold text-white">Back-end</h4>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <SiPhp className="w-5 h-5 text-indigo-400" />
                            <span className="text-gray-300 text-sm font-medium">PHP</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <SiLaravel className="w-5 h-5 text-red-500" />
                            <span className="text-gray-300 text-sm font-medium">Laravel</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <TbBrandCSharp className="w-6 h-6 text-green-500" />
                            <span className="text-gray-300 text-sm font-medium">C# (.NET)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <SiMysql className="w-5 h-5 text-blue-400" />
                            <span className="text-gray-300 text-sm font-medium">MySQL / MariaDB</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                        <Smartphone className="w-5 h-5 text-emerald-400" />
                        <h4 className="text-lg font-semibold text-white">Mobile</h4>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <SiDart className="w-5 h-5 text-blue-400" />
                            <span className="text-gray-300 text-sm font-medium">Dart</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <SiFlutter className="w-5 h-5 text-cyan-500" />
                            <span className="text-gray-300 text-sm font-medium">Flutter</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <SiReact className="w-5 h-5 text-cyan-400" />
                            <span className="text-gray-300 text-sm font-medium">React Native</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <SiExpo className="w-5 h-5 text-white" />
                            <span className="text-gray-300 text-sm font-medium">Expo</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                        <Terminal className="w-5 h-5 text-blue-400" />
                        <h4 className="text-lg font-semibold text-white">Outils</h4>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <SiGithub className="w-5 h-5 text-white" />
                            <span className="text-gray-300 text-sm font-medium">Git / GitHub</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <SiPhpmyadmin className="w-5 h-5 text-orange-400" />
                            <span className="text-gray-300 text-sm font-medium">phpMyAdmin</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <SiInsomnia className="w-5 h-5 text-purple-500" />
                            <span className="text-gray-300 text-sm font-medium">Insomnia</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <SiVercel className="w-5 h-5 text-white" />
                            <span className="text-gray-300 text-sm font-medium">Vercel</span>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}