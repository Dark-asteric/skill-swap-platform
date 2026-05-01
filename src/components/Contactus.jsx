import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const subjects = ["General Inquiry", "Support", "Partnership", "Billing", "Other"];

function InputField({ label, id, type = "text", placeholder, value, onChange, error }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-xs font-semibold tracking-widest uppercase text-stone-400">
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full bg-stone-50 border rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-300 outline-none transition-all duration-200
          focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100
          ${error ? "border-red-300 bg-red-50" : "border-stone-200"}`}
            />
            {error && <p className="text-xs text-red-400 mt-0.5">{error}</p>}
        </div>
    );
}

const Contactus = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "Name is required.";
        if (!form.email.trim()) errs.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
        if (!form.subject) errs.subject = "Please choose a subject.";
        if (!form.message.trim()) errs.message = "Message cannot be empty.";
        else if (form.message.trim().length < 10) errs.message = "Message is too short.";
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            toast.error("Please fix the errors in the form.");
            return;
        }

        setErrors({});
        setSubmitted(true);
        toast.success("Message sent successfully!", {
            duration: 4000,
            position: 'top-center',
            style: {
                borderRadius: '12px',
                background: '#2d2a2a',
                color: '#fff',
            },
        });
    };

    if (loading) return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
        </div>
    );

    return (
        <>
            <ToastContainer />
            <div className="min-h-screen bg-stone-100 flex items-center justify-center px-10 py-16"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="w-full max-w-5xl">
                    <div className="mb-10">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-500 mb-3">Get in touch</p>
                        <h1 className="text-5xl font-semibold text-stone-800 leading-tight"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            We'd love to<br />
                            <span className="italic font-normal text-stone-400">hear from you.</span>
                        </h1>
                    </div>

                    <div className="lg:col-span-3 bg-white rounded-2xl border border-stone-100 p-8">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-stone-800 mb-1"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                        Message sent!
                                    </h3>
                                    <p className="text-sm text-stone-400">Thanks for reaching out. We'll get back to you soon.</p>
                                </div>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                                    className="mt-2 text-xs font-semibold text-amber-500 hover:text-amber-600 underline underline-offset-4 transition-colors">
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <InputField label="Full name" id="name" placeholder="Jane Smith"
                                        value={form.name} onChange={set("name")} error={errors.name} />
                                    <InputField label="Email address" id="email" type="email" placeholder="jane@email.com"
                                        value={form.email} onChange={set("email")} error={errors.email} />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="subject" className="text-xs font-semibold tracking-widest uppercase text-stone-400">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        value={form.subject}
                                        onChange={set("subject")}
                                        className={`w-full bg-stone-50 border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer
                      focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100
                      ${form.subject ? "text-stone-800" : "text-stone-300"}
                      ${errors.subject ? "border-red-300 bg-red-50" : "border-stone-200"}`}
                                    >
                                        <option value="" disabled>Select a subject…</option>
                                        {subjects.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                    {errors.subject && <p className="text-xs text-red-400 mt-0.5">{errors.subject}</p>}
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="message" className="text-xs font-semibold tracking-widest uppercase text-stone-400">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Tell us how we can help…"
                                        value={form.message}
                                        onChange={set("message")}
                                        className={`w-full bg-stone-50 border rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-300 outline-none resize-none transition-all duration-200
                      focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100
                      ${errors.message ? "border-red-300 bg-red-50" : "border-stone-200"}`}
                                    />
                                    <div className="flex justify-between items-center">
                                        {errors.message ? <p className="text-xs text-red-400">{errors.message}</p> : <span />}
                                        <span className={`text-xs ${form.message.length > 10 ? "text-red-400" : "text-stone-300"}`}>
                                            {form.message.length}/500
                                        </span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 rounded-xl bg-stone-800 text-white text-sm font-semibold tracking-wide hover:bg-stone-700 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2"
                                >
                                    Send message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contactus;