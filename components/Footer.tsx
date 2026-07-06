"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full py-8 mt-12 border-t border-white/5"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
                <p className="text-gray-500 text-sm text-center md:text-left">
                    © 2026 Quentin BLAINEAU (lien site). Tous droits réservés.
                </p>
                <div className="flex items-center gap-6">
                    <a href="https://github.com/quentin-bln" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <SiGithub className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/quentin-blaineau" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </motion.footer>
    );
}