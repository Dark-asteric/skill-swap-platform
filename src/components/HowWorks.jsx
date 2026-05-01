import React from 'react';

const HowWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Find Your Expert",
            description: "Browse our diverse categories, from Full-Stack Development with Alice Johnson to Yoga with Priya Nair.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Schedule a Session",
            description: "Book 1:1 remote sessions that fit your schedule. Whether it's PMP prep or Italian cuisine, learning is personalized.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Master New Skills",
            description: "Engage in project-focused learning to build your portfolio, guided by industry leaders and PhDs.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                        Three Steps to Mastery
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our platform connects you directly with professionals like Dr. Ethan Brown and Sophia Martinez
                        to ensure you get the most out of your learning journey.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>

                    {steps.map((step) => (
                        <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                            {/* Icon Circle */}
                            <div className="w-16 h-16 rounded-full bg-purple-400 text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>

                            {/* Step Number Badge */}
                            <span className="absolute -top-2 -right-2 md:right-1/4 bg-purple-700 text-white text-xs font-bold px-2 py-1 rounded-full">
                                0{step.id}
                            </span>

                            <h3 className="text-xl font-bold text-purple-800 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg">
                        Start Learning Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowWorks;