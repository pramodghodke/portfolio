"use client";

import { motion } from "framer-motion";
import { useAudio } from "./AudioProvider";
import { Pause, Play } from "lucide-react";

export default function SoundButton() {
    const { isPlaying, toggle } = useAudio();

    return (
        <div
            onClick={toggle}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full cursor-pointer hover:bg-white/10 transition-all duration-300"
        >
            {/* Text + Icon */}
            <div className="flex items-center gap-2 text-sm tracking-wide">
                {isPlaying ? (
                    <>
                        {/* <span>Pause</span> */}
                        <Pause size={18} />
                    </>
                ) : (
                    <>
                        {/* <span>Play</span> */}
                        <Play size={18} />
                    </>
                )}
            </div>

            {/* Wave Animation */}
            <motion.svg
                viewBox="0 0 120 40"
                className="w-16"
                initial={false}
                animate={{ opacity: isPlaying ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
            >
                <motion.path
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    animate={
                        isPlaying
                            ? {
                                d: [
                                    "M0 20 Q15 5 30 20 T60 20 T90 20 T120 20",
                                    "M0 20 Q15 35 30 20 T60 20 T90 20 T120 20",
                                ],
                            }
                            : {
                                d: "M0 20 Q15 20 30 20 T60 20 T90 20 T120 20",
                            }
                    }
                />
            </motion.svg>
        </div>
    );
}