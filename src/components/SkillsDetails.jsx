// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router'

// const SkillsDetails = () => {
//     const { id } = useParams();
//     console.log(typeof id);
//     const [cards, setCards] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("/skills.json")
//             .then((res) => res.json())
//             .then((data) => {
//                 setCards(data);
//                 setTimeout(() => {
//                     setLoading(false);
//                 }, 500);
//             })
//             .catch((err) => console.error("Failed to load:", err));
//     }, []);
//     const filtered = cards.find(item => item.skillId === Number(id))
//     if (loading) return (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/50 backdrop-blur-sm">
//             <span className="loading loading-spinner loading-lg text-purple-600"></span>
//         </div>
//     );
//     console.log(filtered)
//     return (
//         <>
//             <div className='mt-20 px-10'>
//                 <p>App id : {id}</p>
//             </div>
//         </>
//     )
// }

// export default SkillsDetails
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const CheckIcon = () => (
    <span className="bg-purple-400" style={{
        width: 18, height: 18, borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center", justifyContent: "center", flexShrink: 0,
    }}>
        <svg viewBox="0 0 8 8" fill="none" width={9} height={9}>
            <path d="M1.5 4l2 2 3-3" stroke="#0F6E56" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </span>
);

function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(word => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}

const Toast = ({ visible }) => (
    <div style={{
        position: "fixed",
        bottom: 28,
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? 0 : 80}px)`,
        opacity: visible ? 1 : 0,
        transition: "transform 0.38s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.38s",
        background: "#085041",
        color: "#E1F5EE",
        padding: "12px 20px",
        borderRadius: 10,
        fontSize: 14,
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        alignItems: "center",
        gap: 10,
        whiteSpace: "nowrap",
        zIndex: 1000,
        pointerEvents: "none",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
    }}>
        <span style={{
            width: 20, height: 20, borderRadius: "50%",
            background: "#5DCAA5", display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
            <svg viewBox="0 0 10 10" fill="none" width={10} height={10}>
                <path d="M2 5l2 2 4-4" stroke="#04342C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
        Request sent! We will be in touch soon.
    </div>
);

export default function SkillDetails() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({ name: false, email: false });
    const [toast, setToast] = useState(false);

    const handleSubmit = () => {
        const newErrors = {
            name: !name.trim(),
            email: !email.trim(),
        };
        setErrors(newErrors);
        if (newErrors.name || newErrors.email) return;

        setName("");
        setEmail("");
        setErrors({ name: false, email: false });
        setToast(true);
        setTimeout(() => setToast(false), 3500);
    };
    const { id } = useParams();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/skills.json")
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            })
            .catch((err) => console.error("Failed to load:", err));
    }, []);

    const filtered = cards.find(item => item.skillId === Number(id))

    if (loading) return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
        </div>
    );
    return (
        <>
            <div className="mt-10 p-10 mx-auto">
                <div className="pt-10 px-8 pb-8 border-b-[0.5px] border-[#e0ddd6]">
                    <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.08em] uppercase bg-[#f5f4f0] border-b-[0.5px] border-[#d0cdc6] rounded-lg py-1 px-2.5 text-[#777] mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9C27B0] inline-block"/>
                        Accepting bookings
                    </div>

                    <h1 className="text-3xl font-bold text-[#1a1a18] my-6" >
                        {filtered.skillName}
                    </h1>

                    <div className="flex items-center flex-wrap gap-4">
                        <div className='flex items-center gap-3'>
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-light text-sm">{getInitials(filtered.providerName)}</div>
                            <span className="text-md ">{filtered.providerName}</span>
                        </div>
                        <span style={{ color: "#ccc", fontSize: 13 }}>·</span>
                        <div className="flex items-center gap-1.25 text-[13px] text-[#666]">
                            {filtered.providerEmail}
                        </div>
                        <span  style={{ color: "#ccc", fontSize: 13 }}>·</span>
                        <div className="flex items-center gap-1.25 text-[13px] text-[#666]">
                            <span className="text-[#EF9F27] tracking-[1px]">★★★★★</span>
                            {filtered.rating}
                        </div>
                    </div>
                </div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0,1fr) 272px",
                    gap: "2.5rem",
                    padding: "2rem 2rem 0",
                    alignItems: "start",
                }}>

                    {/* LEFT COLUMN */}
                    <div>
                        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: "1.75rem" }}>
                            {filtered.description}
                        </p>

                        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>
                            Specialisms
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.75rem" }}>
                            {filtered.tags.map((t) => (
                                <span key={t} style={{
                                    fontSize: 12, padding: "4px 11px", borderRadius: 20,
                                    border: "0.5px solid #ddd", color: "#555", background: "#fafaf8",
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>
                            Session overview
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: "1.75rem" }}>
                            {filtered.highlights.map(({ val, desc }) => (
                                <div key={desc} style={{ background: "#f5f4f0", borderRadius: 8, padding: "12px 14px" }}>
                                    <div style={{ fontSize: 22, fontWeight: 500, color: "#1a1a18", lineHeight: 1, marginBottom: 3 }}>{val}</div>
                                    <div style={{ fontSize: 12, color: "#999" }}>{desc}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>
                            What's included
                        </div>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                            {filtered.includes.map((item) => (
                                <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#555" }}>
                                    <CheckIcon />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ position: "sticky", top: 16 }}>
                        <div style={{
                            background: "#fff",
                            border: "0.5px solid #e0ddd6",
                            borderRadius: 14,
                            padding: "1.25rem",
                        }}>
                            <div>
                                <span style={{ fontSize: 28, fontWeight: 500, color: "#1a1a18" }}>Available slots : {filtered.slotsAvailable}</span>
                            </div>

                            <div style={{
                                display: "flex", alignItems: "baseline", gap: 6,
                                marginBottom: "1rem", paddingBottom: "1rem",
                                borderBottom: "0.5px solid #e8e5e0",
                            }}>
                                    <span style={{ fontSize: 28, fontWeight: 500, color: "#1a1a18" }}>$ {filtered.price}</span>
                                    <span style={{ fontSize: 13, color: "#aaa" }}>/ session</span>
                            </div>

                            <h2 style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: 19, fontWeight: 400, color: "#1a1a18", marginBottom: 4,
                            }}>
                                Book a session
                            </h2>
                            <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.55, marginBottom: "1.25rem" }}>
                                Secure your slot — {filtered.providerName} typically responds within 48 hours.
                            </p>

                            {/* Name field */}
                            <div style={{ marginBottom: 14 }}>
                                <label style={{
                                    display: "block", fontSize: 12, fontWeight: 500,
                                    color: "#666", marginBottom: 5, letterSpacing: "0.02em",
                                }}>
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: false })); }}
                                    style={{
                                        width: "100%", fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 14, padding: "8px 10px",
                                        border: `0.5px solid ${errors.name ? "#E24B4A" : "#ddd"}`,
                                        borderRadius: 8, outline: "none",
                                        background: "#fafaf8", boxSizing: "border-box",
                                        transition: "border-color 0.15s",
                                    }}
                                />
                                {errors.name && (
                                    <span style={{ fontSize: 11, color: "#E24B4A", marginTop: 4, display: "block" }}>
                                        Name is required
                                    </span>
                                )}
                            </div>

                            {/* Email field */}
                            <div style={{ marginBottom: 18 }}>
                                <label style={{
                                    display: "block", fontSize: 12, fontWeight: 500,
                                    color: "#666", marginBottom: 5, letterSpacing: "0.02em",
                                }}>
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: false })); }}
                                    style={{
                                        width: "100%", fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 14, padding: "8px 10px",
                                        border: `0.5px solid ${errors.email ? "#E24B4A" : "#ddd"}`,
                                        borderRadius: 8, outline: "none",
                                        background: "#fafaf8", boxSizing: "border-box",
                                        transition: "border-color 0.15s",
                                    }}
                                />
                                {errors.email && (
                                    <span style={{ fontSize: 11, color: "#E24B4A", marginTop: 4, display: "block" }}>
                                        Email is required
                                    </span>
                                )}
                            </div>
                            <button className="bg-purple-600 text-gray-300 cursor-pointer hover:bg-purple-400 w-full border-none rounded-lg px-4 py-2.5"
                                onClick={handleSubmit}
                            >
                                Request booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Toast visible={toast} />
        </>
    );
}