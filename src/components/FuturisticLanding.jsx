import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import futuristicBg from "../assets/background-video.mp4";
import pinkLogo from "../assets/3d-Pixels-pink.svg";
import { TypeAnimation } from 'react-type-animation';


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
            <div className="relative w-[1920px] h-[900px] flex justify-center items-start p-6">
                {/* Background Video Container */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-3xl mt-[22px] w-[1820px] h-[880px] z-10 overflow-clip">
                    <video
                        autoPlay
                        loop
                        muted
                        src={futuristicBg}
                        alt="bg"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Layer */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 mt-[22px] w-[1400px] h-[980px] z-10">
                    {/* Top Left Heading */}
                    <motion.div
                        className="absolute top-[37px] left-[-160px] text-white"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <TypeAnimation
                            sequence={[
                                'ELEVATE YOUR BRAND',
                                1500,
                                'AMPLIFY YOUR PRESENCE',
                                1500,
                                'UNLEASH YOUR CREATIVITY',
                                1500,
                                'SHAPE YOUR FUTURE',
                                1500,
                                'IGNITE YOUR IDENTITY',
                                1500,]}
                            wrapper="div"
                            speed={10}
                            repeat={Infinity}
                            className="text-[34px] font-normal leading-none"
                        />
                        <div className="text-[22px] mt-2 font-normal leading-none">
                            By CGI Product Animations And Websites
                        </div>
                    </motion.div>
                    {/* Pre-order Button */}
                    <motion.button
                        className="absolute top-[0px] right-[-168px] w-[259px] h-[50px] border-2 border-white text-white text-[22px] rounded-[20px] hover:bg-white hover:text-[#58f4ff] cursor-pointer transition-colors flex items-center justify-center gap-2"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        PRE-ORDER <ArrowRight className="w-5 h-5" />
                    </motion.button>

                    {/* Feature Cards */}
                    <motion.div
                        className="absolute  flex flex-col top-[290px] right-[-168px] w-[280px] h-[200px] bg-[#2f2f2fb2] text-white rounded-[20px] p-6 z-10 items-center justify-start"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-[18px] font-normal whitespace-pre-line mb-3">
                            ADVANCED{"\n"}TECHNOLOGY
                        </h3>
                        <p className="text-[12px] whitespace-pre-line leading-tight">
                            Seamless Bluetooth connectivity,{"\n"}AI sound optimization
                        </p>
                    </motion.div>

                    <motion.div
                        className="absolute top-[520px] right-[-168px] w-[280px] h-[200px] flex flex-col bg-[#2f2f2fb2] text-white rounded-[20px] p-6 z-10 items-center justify-start"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h3 className="text-[18px] font-bold whitespace-pre-line mb-3 mt-5">
                            FUTURISTIC DESIGN
                        </h3>
                        <p className="text-[12px] whitespace-pre-line leading-tight">
                            360° LED display. Sleek, modern{"\n"}aesthetics
                        </p>
                    </motion.div>

                    {/* Bottom Brand Text */}
                    <motion.div className="absolute top-[748px] left-[-160px] text-white text-lg z-10"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        QUANTUM AUDIO
                    </motion.div>

                    {/* Bottom Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="absolute top-[820px] left-[-160px] text-white text-lg z-10 leading-tight">
                        UNMATCHED <br />
                        SOUND QUALITY
                    </motion.div>

                    {/* Logo */}
                    <div className="absolute top-[820px] left-[80px] w-10 h-10 border border-white rounded-full flex items-center justify-center z-10">
                        <img
                            src={pinkLogo}
                            alt="Logo"
                            className="size-[33px]"
                        />
                    </div>

                    {/* Navigation */}
                    <motion.div
                        className="absolute top-[748px] left-1/2 -translate-x-1/2 flex gap-20 z-10"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        {navItems.map((item, i) =>
                            item.isButton ? (
                                <button
                                    key={i}
                                    className="w-[140px] h-9 border-2 border-white rounded-[20px] text-white text-lg hover:bg-white hover:text-[#58f4ff] cursor-pointer transition-colors"
                                >
                                    {item.label}
                                </button>
                            ) : (
                                <div
                                    key={i}
                                    className="text-white text-lg font-normal mx-5"
                                >
                                    {item.label}
                                </div>
                            )
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
