import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import futuristicBg from "../assets/futuristic-bg.png";
import pinkLogo from "../assets/3D Pixels-pink.svg";

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
        <div className="flex justify-center items-center min-h-screen bg-[#1a1a1a]">
            <div className="relative w-[1440px] h-[900px] overflow-hidden rounded-xl">
                {/* ✅ Background image */}
                <img
                    src={futuristicBg}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* ✅ Heading */}
                <motion.div
                    className="absolute top-10 left-10 z-10"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-bold">ELEVATE YOUR</h1>
                    <p className="text-xl mt-1">SOUND EXPERIENCE</p>
                </motion.div>

                {/* ✅ Pre-order button */}
                <motion.button
                    className="absolute top-10 right-10 z-10 px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    PRE-ORDER <ArrowRight className="ml-2 inline h-5 w-5" />
                </motion.button>

                {/* ✅ Feature cards */}
                {featureCards.map((card, i) => (
                    <motion.div
                        key={i}
                        className={`absolute left-[1000px] ${card.top} w-[280px] h-[200px] bg-white/10 backdrop-blur-sm rounded-2xl p-6 z-10`}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 + 0.5 }}
                    >
                        <h3 className="text-white text-lg font-bold whitespace-pre-line mb-3">
                            {card.title}
                        </h3>
                        <p className="text-sm text-white/90 whitespace-pre-line leading-tight">
                            {card.description}
                        </p>
                    </motion.div>
                ))}

                {/* ✅ Bottom text */}
                <div className="absolute left-10 bottom-[130px] text-sm z-10">QUANTUM AUDIO</div>
                <div className="absolute left-10 bottom-6 text-sm leading-tight z-10">
                    <p>UNMATCHED</p>
                    <p>SOUND QUALITY</p>
                </div>

                {/* ✅ Social icon */}
                <div className="absolute bottom-4 left-[220px] w-10 h-10 border border-white rounded-xl flex items-center justify-center z-10">
                    <img src={pinkLogo} alt="Social" className="w-5 h-5" />
                </div>

                {/* ✅ Navigation */}
                <motion.div
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-6 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
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
