import { useEffect, useState } from 'react'
import Card from './Card';

const AllSkills = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("All");

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

    const categories = ["All", ...[...new Set(cards.map((p) => p.category))].sort()];
    const filtered = activeFilter === "All" ? cards : cards.filter((p) => p.category === activeFilter);

    if (loading) return (
        // <div className="flex h-screen items-center justify-center backdrop-blur-sm">
        //     <span className="loading loading-spinner loading-lg"></span>
        // </div>
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
        </div>
    );
    return (
        <>
            <div className='px-10 mt-28 mb-8'>
                <p className='text-center text-purple-500 text-md font-bold tracking-[0.12em] uppercase mb-1.5'>
                    Curated for you
                </p>
                <div className='flex items-center gap-5 mt-5 justify-center'>
                    <h1 className='text-center text-2xl' style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, color: "#111" }}>
                        Top Rated Providers
                    </h1>
                    <span className='text-[#888780] bg-[#F1EFE8]  border border-[#D3D1C7] py-1 px-3 text-sm rounded-3xl'>
                        {filtered.length} provider{filtered.length !== 1 ? "s" : ""}
                    </span>
                </div>
            </div>

            <div className='flex gap-3 flex-wrap justify-center text-xl'>
                {categories.map((cat) => {
                    const active = cat === activeFilter;
                    return (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`rounded-full px-4 py-1.5 text-xs ${active ? "font-semibold" : "font-medium"} cursor-pointer transition-all duration-150 ${active ? "bg-[#111] text-white border-[1.5px] border-[#111]" : "bg-transparent text-[#5F5E5A] border border-[#D3D1C7]"}`}>
                            {cat}
                        </button>
                    );
                })}
            </div>
            <div className='my-10 p-5 mb-5 flex flex-col justify-center items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 px-10'>
                    {
                        filtered.map(card => {
                            return <Card key={card.skillId} skills={card}></Card>
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default AllSkills