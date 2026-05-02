import { useEffect, useState } from 'react';
import AOS from 'aos';
const AboutUs = () => {
    const stats = [
        { label: 'Diverse Categories', value: 'Technology, Design, Arts & More' },
        { label: 'Expert Mentors', value: 'Industry Leaders & PhDs' },
        { label: 'Learning Format', value: '1:1 Remote Sessions' },
        { label: 'Project Focused', value: 'Real-world Portfolio Building' },
    ];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-back',
            once: true,
        });
    }, []);

    if (loading) return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
        </div>
    );
    return (
        <section className="bg-white py-16 px-10 font-sans text-gray-800 mt-10" data-aos="flip-left">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-3">
                        Our Mission
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-6">
                        Empowering Careers Through Expert Mentorship
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We bridge the gap between ambition and mastery. Our platform hosts top-tier providers like
                        <span className="font-semibold text-purple-950"> Dr. Ethan Brown</span> (Data Science) and
                        <span className="font-semibold text-purple-950"> Sophia Martinez</span> (UI/UX Design) to provide
                        personalized, 1:1 coaching that goes beyond traditional video courses.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-purple-900">Why Learn With Us?</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[#04342C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">
                                    <span className="font-bold">Industry-Standard Tools:</span> Master Figma, Adobe Creative Suite,
                                    and AWS Cloud architecture under professional guidance.
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[#04342C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">
                                    <span className="font-bold">Global Perspective:</span> Learn Italian Cuisine from native chefs
                                    or Spanish for Travelers through immersive, conversation-first methods.
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[#04342C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">
                                    <span className="font-bold">Holistic Growth:</span> We support technical skills alongside
                                    Mental Health First Aid and Personal Finance coaching.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800"
                            alt="Full Stack Development Session"
                            className="rounded-2xl shadow-2xl z-10 relative"
                        />

                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-purple-900 rounded-3xl p-10 text-center shadow-xl">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2 border-r last:border-r-0 border-[#5DCAA5]/30 px-4">
                            <div className="text-2xl font-bold text-purple-300">{stat.value}</div>
                            <div className="text-[#E1F5EE] text-sm uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Closing Quote */}
                <div className="mt-20 text-center italic text-gray-500 max-w-2xl mx-auto">
                    "Our mission is to help people turn raw data into meaningful insights, captured
                    moments into art, and business ideas into revenue-generating ventures."
                </div>
            </div>
        </section>
    );
};

export default AboutUs;