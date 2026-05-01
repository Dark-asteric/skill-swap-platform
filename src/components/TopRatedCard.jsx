import React from 'react'

const TopRatedCard = ({ card }) => {

    return (
        <div className="card bg-black/65 w-96 shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition hover:cursor-pointer">
            <figure className="px-10 pt-10">
                <div className='relative p-3'>
                    <img
                        src={card.image}
                        alt=""
                        className="border-2 border-purple-500 rounded-full w-25 h-25 object-cover" />
                    <div className='bg-purple-500 rounded-md absolute top-23 left-6 px-3 '>
                        <span className="ml-1 text-md font-normal text-white text-center mb-2">⭐{card.rating}</span>
                    </div>
                </div>
            </figure>
            {/* <div className="card-body items-center text-center">
              <h2 className="card-title">{skills.skillName}</h2>
              <div>
                  <p className='text-xl'>{skills.rating}</p>
                  
              </div>
              <div className="card-actions">
                  <p className='text-xl font-semibold'>${skills.price}</p>
                  <button className="btn btn-primary">View Details</button>
              </div>
          </div> */}
            <div className="p-5">
                <h2 className="text-lg font-semibold text-white text-center">
                    {card.providerName}
                </h2>
                <p className='text-gray-300 text-center mt-2 font-light text-sm'>{card.skillName} expert</p>
                <p className='text-gray-300 text-center mt-2 font-light text-sm'>Email: {card.providerEmail}</p>

            </div>
        </div>
    )
}

export default TopRatedCard