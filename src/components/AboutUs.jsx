import { useEffect, useState } from "react";

const AboutUs = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
        </div>
    );
    return (
        <>
            <div className="mt-20 px-10">
                about us
            </div>
        </>
    )
}

export default AboutUs