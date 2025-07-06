import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import futuristicBg from "../assets/futuristic-bg.png";
import pinkLogo from "../assets/3D pixels-pink.svg";

export default function FuturisticLanding() {
    const navItems = [
        { label: "3DPIXELS", isButton: false },
        { label: "Home", isButton: true },
        { label: "About", isButton: true },
        { label: "Shop", isButton: true },
        { label: "FAQ", isButton: true },
    ];

    return (
        <div className="bg-[#2f2f2f] w-full min-h-screen flex justify-center items-center overflow-hidden">
            <div className="relative w-[1440px] h-[1024px]">
                {/* Background Image */}
                <img
                    src={futuristicBg}
                    alt="bg"
                    className="absolute w-full h-full object-cover z-0"
                />

                {/* Top Left Heading */}
                <motion.div
                    className="absolute top-[37px] left-[21px] text-white z-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-[34px] font-normal leading-none">ELEVATE YOUR</div>
                    <div className="text-[22px] mt-2 font-normal leading-none">SOUND EXPERIENCE</div>
                </motion.div>

                {/* Pre-order Button */}
                <motion.button
                    className="absolute top-[37px] left-[1121px] w-[259px] h-[50px] border-2 border-white text-white text-[22px] rounded-[20px] hover:bg-white hover:text-[#2f2f2f] transition-colors flex items-center justify-center gap-2 z-10"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    PRE-ORDER <ArrowRight className="w-5 h-5" />
                </motion.button>

                {/* Feature Cards */}
                <motion.div
                    className="absolute top-[290px] left-[1080px] w-[280px] h-[200px] bg-[#2f2f2fb2] text-white rounded-[20px] p-6 z-10"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="text-lg font-normal whitespace-pre-line mb-3">
                        ADVANCED{"\n"}TECHNOLOGY
                    </h3>
                    <p className="text-xs whitespace-pre-line leading-tight">
                        Seamless Bluetooth connectivity,{"\n"}AI sound optimization
                    </p>
                </motion.div>

                <motion.div
                    className="absolute top-[520px] left-[1080px] w-[280px] h-[200px] bg-[#2f2f2fb2] text-white rounded-[20px] p-6 z-10"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h3 className="text-lg font-normal whitespace-pre-line mb-3">
                        FUTURISTIC{"\n"}DESIGN
                    </h3>
                    <p className="text-xs whitespace-pre-line leading-tight">
                        360° LED display. Sleek, modern{"\n"}aesthetics
                    </p>
                </motion.div>

                {/* Bottom Brand Text */}
                <div className="absolute top-[848px] left-[21px] text-white text-lg z-10">
                    QUANTUM AUDIO
                </div>

                {/* Bottom Tagline */}
                <div className="absolute top-[939px] left-0 text-white text-lg z-10 leading-tight">
                    UNMATCHED <br />
                    SOUND QUALITY
                </div>

                {/* Logo */}
                <div className="absolute top-[940px] left-[220px] w-10 h-10 border border-white rounded-[20px] flex items-center justify-center z-10">
                    <img src={pinkLogo} alt="Logo" className="w-[21px] h-[30px]" />
                </div>

                {/* Navigation */}
                <motion.div
                    className="absolute bottom-[45px] left-1/2 -translate-x-1/2 flex gap-10 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {navItems.map((item, i) =>
                        item.isButton ? (
                            <button
                                key={i}
                                className="w-[140px] h-9 border-2 border-white rounded-[20px] text-white text-lg hover:bg-white hover:text-[#2f2f2f] transition-colors"
                            >
                                {item.label}
                            </button>
                        ) : (
                            <div key={i} className="text-white text-lg font-normal">
                                {item.label}
                            </div>
                        )
                    )}
                </motion.div>
            </div>
        </div>
    );
}
