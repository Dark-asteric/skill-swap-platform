import React, { useEffect, useState } from 'react'
import TopRatedCard from './TopRatedCard';

const TopRatedProviders = () => {
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

    if (loading) return (
        // <div className="flex h-screen items-center justify-center backdrop-blur-sm">
        //     <span className="loading loading-spinner loading-lg"></span>
        // </div>
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
        </div>
    );
    const sortedCards = [...cards].sort((a, b) => b.rating - a.rating);

    return (
        <>
            <div className='mt-10 mb-5 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold text-center mt-20 mb-5'>Learn From <span className='text-purple-600'>Top Rated Providers</span></h1>
                <p className='text-center text-gray-500'>Our mentors are industry leaders with years of experience in their <br />respective fields.</p>
                <div className='grid grid-cols-1 lg:grid-cols-4 mt-10 px-10 mb-20 gap-10'>
                    {sortedCards.slice(0, 4).map(card => {
                        return <TopRatedCard key={card.skillsId} card={card}></TopRatedCard>
                    })
                    }
                </div>
                
            </div>
            <div className='border-b border-gray-100 mt-10 mx-10 h-2 shadow-md'></div>
        </>
    )
}

export default TopRatedProviders