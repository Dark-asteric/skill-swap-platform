import { useState, useEffect, useRef } from "react";

const stats = [
    {
        value: 12400,
        suffix: "+",
        label: "Active Members",
        description: "People trading skills worldwide",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
        ),
        accent: "#f97316",
        bg: "#fff7ed",
    },
    {
        value: 58,
        suffix: "+",
        label: "Skill Categories",
        description: "From coding to calligraphy",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
            </svg>
        ),
        accent: "#8b5cf6",
        bg: "#f5f3ff",
    },
    {
        value: 3200,
        suffix: "+",
        label: "Swaps Completed",
        description: "Successful skill exchanges",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
        ),
        accent: "#10b981",
        bg: "#ecfdf5",
    },
    {
        value: 97,
        suffix: "%",
        label: "Satisfaction Rate",
        description: "Members recommend SkillSwap",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
        ),
        accent: "#f59e0b",
        bg: "#fffbeb",
    },
];

function useCountUp(target, duration = 1800, start = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);

    return count;
}

function StatCard({ stat, index, animate }) {
    const count = useCountUp(stat.value, 1600 + index * 100, animate);

    return (
        <div
            className="relative bg-white rounded-3xl px-10 flex flex-col gap-5 border border-gray-100"
            style={{
                boxShadow: `0 2px 24px 0 ${stat.accent}18, 0 1px 4px 0 #0001`,
                transition: "transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                e.currentTarget.style.boxShadow = `0 12px 40px 0 ${stat.accent}28, 0 2px 8px 0 #0002`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = `0 2px 24px 0 ${stat.accent}18, 0 1px 4px 0 #0001`;
            }}
        >
            <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: stat.bg, color: stat.accent }}
            >
                {stat.icon}
            </div>
            <div className="flex items-end gap-0.5">
                <span
                    className="text-5xl font-black tracking-tight leading-none"
                    style={{
                        fontFamily: "'Syne', 'Clash Display', sans-serif",
                        color: "#0f0f0f",
                    }}
                >
                    {count.toLocaleString()}
                </span>
                <span
                    className="text-3xl font-black mb-1"
                    style={{ color: stat.accent, fontFamily: "'Syne', sans-serif" }}
                >
                    {stat.suffix}
                </span>
            </div>
            <div>
                <p className="text-base font-bold text-gray-900 mb-1">
                    {stat.label}
                </p>
                <p
                    className="text-sm text-gray-400">
                    {stat.description}
                </p>
            </div>
            <div
                className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-30"
                style={{ background: stat.accent }}
            />
        </div>
    );
}

const CommunityStats = () => {
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setAnimate(true);
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section
                ref={ref}
                className="relative bg-white py-24 px-4 overflow-hidden">
                <div className="relative max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span
                            className="inline-block border border-purple-400 bg-amber-100 text-purple-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                            Community Pulse
                        </span>
                        <h2 className="text-5xl font-black text-gray-950 leading-tight mb-4">
                            Skills moving, <br />
                            <span className="text-purple-600">people growing.</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md mx-auto">
                            Real numbers from a real community built on the power of
                            peer-to-peer learning.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <StatCard key={stat.label} stat={stat} index={i} animate={animate} />
                        ))}
                    </div>
                    <div className="mt-14 text-center">
                        <p className="text-sm text-gray-400">
                            Updated in real-time · No bots, no fluff — just genuine skill
                            swappers 🤝
                        </p>
                    </div>
                </div>
                <div className='border-b border-gray-100 mt-10 mx-10 h-2 shadow-md'></div>
            </section>
        </>
    );
}

export default CommunityStats