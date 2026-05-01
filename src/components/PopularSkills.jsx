import { useEffect, useState } from 'react'
import Card from './Card';
import { Link } from 'react-router';
const PopularSkills = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/skills.json")
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
                setLoading(false);
            })
            .catch((err) => console.error("Failed to load:", err));
    }, []);

    if (loading) return <span className="loading loading-spinner"></span>;

    return (
        <>
            <div className='border-b border-gray-100 mt-10 mx-10 h-2 shadow-md'></div>
            <div className='mt-10 mb-5 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold text-center mt-10 mb-5'>Explore our Popular <span className='text-purple-600'>Skills</span></h1>
                <p className='text-center text-gray-500'>Choose from hundreds of courses designed by industry experts to help you achieve <br />your goals.</p>
                <div className='grid grid-cols-1 lg:grid-cols-4 mt-10 px-10 gap-10'>
                    {
                        cards.slice(0, 8).map(card => {
                            return <Card key={card.skillId} skills={card}></Card>
                        })
                    }
                </div>
                <div className='w-full mx-auto px-10 mt-10 flex'>
                    <Link to='/skills' className='text-center mt-10 w-fit mx-auto btn rounded-2xl text-white bg-purple-600 hover:bg-purple-500'>View All Skills</Link>
                </div>
            </div>
            <div className='border-b border-gray-100 mt-10 mx-10 h-2 shadow-md'></div >
            
        </>

    )
}

export default PopularSkills