import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '../lib/utils'; // Assuming cn utility is here

const testimonials = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
        content: "I drowned in tabs daily. LinkEase is the first tool that actually solved it without making me feel guilty. One click and my brain is clear.",
        rating: 5
    },
    {
        id: 2,
        name: "Marcus Rodriguez",
        role: "Research Analyst",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        content: "The 'Time Travel' feature is a lifesaver. I restored a session from 3 weeks ago for a client call and looked like a genius. Absolute must-have.",
        rating: 5
    },
    {
        id: 3,
        name: "Emily Watson",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
        content: "It’s not just a bookmark manager; it’s a session manager. The interface is stunning and the 'Tab Zero' feeling is addictive.",
        rating: 5
    },
    {
        id: 4,
        name: "David Kim",
        role: "Frontend Developer",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
        content: "Clean code, clean UI, clean browser. I love how fast it captures everything. No lag, just instant organization.",
        rating: 4
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-scroll
    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, []);

    const getVisibleCards = () => {
        const cards = [];
        // We want to show active card in center, and glimpse of prev/next
        const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
        const next = (activeIndex + 1) % testimonials.length;
        return { prev, current: activeIndex, next };
    };

    const { prev, current, next } = getVisibleCards();

    return (
        <section className="py-20 bg-gray-50 dark:bg-[#09090b] overflow-hidden relative transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-20 pointer-events-none bg-[radial-gradient(#6366F1_1px,transparent_1px)] dark:bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 font-noto-serif">
                    Loved by <span className="text-primary-purple">Reviewers</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">The new standard for browser organization.</p>
            </div>

            <div className="relative max-w-6xl mx-auto flex items-center justify-center min-h-[400px]">

                {/* Previous Button */}
                <button
                    onClick={prevTestimonial}
                    className="absolute left-4 lg:left-0 z-30 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-200 hover:text-primary-purple dark:hover:text-primary-purple hover:scale-110 transition-all duration-300 border border-gray-100 dark:border-gray-700 hidden sm:block"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button
                    onClick={nextTestimonial}
                    className="absolute right-4 lg:right-0 z-30 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-200 hover:text-primary-purple dark:hover:text-primary-purple hover:scale-110 transition-all duration-300 border border-gray-100 dark:border-gray-700 hidden sm:block"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Carousel Container */}
                <div className="flex items-center justify-center gap-6 sm:gap-8 w-full px-4 overflow-visible">

                    {/* Prev Card (Blurred/Scaled Down) */}
                    <div className={`hidden md:block w-1/3 opacity-40 blur-[2px] transition-all duration-500 transform scale-90 translate-x-12`}>
                        <TestimonialCard data={testimonials[prev]} />
                    </div>

                    {/* Active Card */}
                    <div className="w-full md:w-1/3 z-20 transition-all duration-500 transform scale-100 shadow-2xl rounded-2xl">
                        <TestimonialCard data={testimonials[current]} isActive />
                    </div>

                    {/* Next Card (Blurred/Scaled Down) */}
                    <div className={`hidden md:block w-1/3 opacity-40 blur-[2px] transition-all duration-500 transform scale-90 -translate-x-12`}>
                        <TestimonialCard data={testimonials[next]} />
                    </div>

                </div>

                {/* Mobile Navigation Dots */}
                <div className="absolute bottom-[-40px] flex gap-2 sm:hidden">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-primary-purple w-6' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

const TestimonialCard = ({ data, isActive = false }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden h-full flex flex-col shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            {/* Header - Brand Color */}
            <div className="bg-slate-900 p-6 flex items-center gap-4 border-b border-indigo-500/30 relative overflow-hidden">
                {/* Detail overlay */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Quote className="w-12 h-12 text-white transform rotate-12" />
                </div>

                <img
                    src={data.image}
                    alt={data.name}
                    className="w-14 h-14 rounded-full border-2 border-indigo-400 object-cover shadow-md"
                />
                <div>
                    <h3 className="text-white font-bold text-lg">{data.name}</h3>
                    <p className="text-indigo-200 text-xs font-medium uppercase tracking-wider">{data.role}</p>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex-grow flex flex-col justify-between bg-white dark:bg-gray-800 relative transition-colors duration-300">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic mb-6">
                    "{data.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${i < data.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-100'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
