import { Link } from 'react-router'

const Card = ({skills}) => {
    console.log(skills)
  return (
      <div className="card bg-black/65 w-96 shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition hover:cursor-pointer">
          <figure className="px-10 pt-10">
              <img
                  src={skills.image}
                  alt=""
                  className="rounded-xl w-60 h-40 object-cover" />
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
              <h2 className="text-lg font-semibold text-white">
                  {skills.skillName}
              </h2>
              <div className="flex items-center mt-2 text-sm text-white">
                  ⭐ <span className="ml-1">{skills.rating}</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-white">${skills.price}</span>

                  <Link to={`/skills/${skills.skillId}`} className="btn border-none rounded-2xl text-white bg-purple-600 hover:bg-purple-500 transition hover:cursor-pointer">
                      View Details
                  </Link>
              </div>

          </div>
      </div>
  )
}

export default Card