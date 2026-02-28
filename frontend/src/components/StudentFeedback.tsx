"use client"
import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const feedbacks = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Frontend Developer",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        avatar: "https://i.pravatar.cc/150?u=rahul",
        caption: "The practical approach helped me build a great portfolio.",
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "UI/UX Designer",
        thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        avatar: "https://i.pravatar.cc/150?u=priya",
        caption: "Got placed at a top MNC within 3 months!",
    },
    {
        id: 3,
        name: "Amit Kumar",
        role: "Full Stack Developer",
        thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        avatar: "https://i.pravatar.cc/150?u=amit",
        caption: "Real office environment makes a huge difference.",
    },
    {
        id: 4,
        name: "Neha Singh",
        role: "Data Analyst",
        thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        avatar: "https://i.pravatar.cc/150?u=neha",
        caption: "Mentors are super helpful and experienced.",
    },
    {
        id: 5,
        name: "Vikram Reddy",
        role: "DevOps Engineer",
        thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        avatar: "https://i.pravatar.cc/150?u=vikram",
        caption: "Learned how to deploy real-world applications.",
    },
    {
        id: 6,
        name: "Anjali Gupta",
        role: "Software Engineer",
        thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        avatar: "https://i.pravatar.cc/150?u=anjali",
        caption: "Best learning platform for tech enthusiasts.",
    },
];

const StudentFeedback = () => {
    // Duplicate array for seamless infinite scroll
    const scrollItems = [...feedbacks, ...feedbacks, ...feedbacks];

    // State for Video Modal
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section className="py-20 bg-background overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-black mb-4">Student Feedback</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Hear from our successful students who transformed their careers.
                </p>
            </div>

            {/* Infinite Carousel Container */}
            <div className="relative w-full flex overflow-hidden group">
                <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
                    {scrollItems.map((item, idx) => (
                        <div
                            key={`${item.id}-${idx}`}
                            onClick={() => setActiveVideo(item.videoUrl)}
                            className="relative w-[280px] sm:w-[320px] h-[500px] sm:h-[560px] mx-2 sm:mx-3 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800 shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
                        >
                            {/* Video/Image Thumbnail */}
                            <img
                                src={item.thumbnail}
                                alt={item.name}
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                            {/* Play Icon Indicator */}
                            <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md rounded-full p-2 z-10 transition-transform hover:scale-110">
                                <Play className="w-4 h-4 text-white fill-white" />
                            </div>

                            {/* Content (Bottom Anchored) */}
                            <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col gap-3">
                                <p className="text-white font-medium text-sm sm:text-base line-clamp-2 leading-tight">
                                    "{item.caption}"
                                </p>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 flex-shrink-0">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{item.name}</h4>
                                        <p className="text-white/70 text-xs">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal Overlay */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-6"
                        onClick={() => setActiveVideo(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-50"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Video Player Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-[400px] sm:max-w-md aspect-[9/16] max-h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking video
                        >
                            <video
                                src={activeVideo}
                                autoPlay
                                controls
                                controlsList="nodownload"
                                playsInline
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CSS for Infinite Scroll Animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-33.333%)); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 45s linear infinite;
          }
        `
            }} />
        </section>
    );
};

export default StudentFeedback;
