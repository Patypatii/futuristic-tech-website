import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function FuturisticLanding() {
    const navItems = ["3DPIXELS", "Home", "About", "Shop", "FAQ"];

    const featureCards = [
        {
            title: "ADVANCED\nTECHNOLOGY",
            description: "Seamless Bluetooth connectivity,\nAI sound optimization",
            top: "top-[290px]",
        },
        {
            title: "FUTURISTIC DESIGN",
            description: "360° LED display. Sleek, modern\naesthetics",
            top: "top-[520px]",
        },
    ];

    return (
        <div className="bg-[#1a1a1a] min-h-screen flex justify-center items-center text-white font-orbitron">
            <div className="relative w-[1440px] h-[1024px] overflow-hidden rounded-xl">
                {/* Background Image */}
                <img
                    src="../assets/futuristic-bg.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Heading */}
                <motion.div
                    className="absolute top-10 left-10 z-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-bold">ELEVATE YOUR</h1>
                    <p className="text-xl mt-1">SOUND EXPERIENCE</p>
                </motion.div>

                {/* Pre-order button */}
                <motion.button
                    className="absolute top-10 right-10 z-10 px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    PRE-ORDER <ArrowRight className="ml-2 inline h-5 w-5" />
                </motion.button>

                {/* Brand and Tagline */}
                <div className="absolute left-10 bottom-[140px] text-sm z-10">
                    <p>QUANTUM AUDIO</p>
                </div>
                <div className="absolute left-10 bottom-6 text-sm leading-tight z-10">
                    <p>UNMATCHED</p>
                    <p>SOUND QUALITY</p>
                </div>

                {/* Social Icon */}
                <div className="absolute bottom-4 left-[220px] w-10 h-10 border border-white rounded-xl flex items-center justify-center z-10">
                    <img src="/icons/social-icon.svg" alt="Social" className="w-5 h-5" />
                </div>

                {/* Feature cards */}
                {featureCards.map((card, index) => (
                    <motion.div
                        key={index}
                        className={`absolute left-[1000px] ${card.top} w-[280px] h-[200px] bg-white/10 backdrop-blur-md rounded-2xl p-6 z-10`}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                    >
                        <h3 className="text-lg font-bold whitespace-pre-line mb-3">
                            {card.title}
                        </h3>
                        <p className="text-sm whitespace-pre-line leading-tight">
                            {card.description}
                        </p>
                    </motion.div>
                ))}

                {/* Navigation */}
                <motion.div
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-6 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className="px-6 py-2 border-2 border-white rounded-full text-sm hover:bg-white hover:text-black transition"
                        >
                            {item}
                        </button>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
