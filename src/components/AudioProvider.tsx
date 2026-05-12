"use client";

import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

type AudioContextType = {
    isPlaying: boolean;
    toggle: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
    const ctx = useContext(AudioContext);
    if (!ctx) throw new Error("useAudio must be inside AudioProvider");
    return ctx;
};
export default function AudioProvider({ children }: { children: React.ReactNode; }) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = new Audio("/audio/ambient.mp3");
        audio.loop = true;
        audio.volume = 0.3;
        audioRef.current = audio;

        // Check if user previously wanted sound ON
        const savedSound = localStorage.getItem("sound");

        if (savedSound === "on") {
            const startAudio = async () => {
                try {
                    await audio.play();
                    setIsPlaying(true);
                } catch (err) {
                    console.warn("Autoplay blocked. Waiting for user interaction.");
                    setIsPlaying(false);
                }
            };
            startAudio();
        }
    }, []);

    const toggle = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            localStorage.setItem("sound", "off");
        } else {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
                localStorage.setItem("sound", "on");
            } catch (err) {
                console.error("Playback failed:", err);
            }
        }
    };

    return (
        <AudioContext.Provider value={{ isPlaying, toggle }}>
            {children}
        </AudioContext.Provider>
    );
}