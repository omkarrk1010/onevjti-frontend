import React from 'react'

const CommitteeCard = ({committee}) => {
  return (
    <div className='bg-white p-6 rounded-xl shadow-md text-center'>
        {
            committee.logo && (
                <img src={committee.logo} alt={committee.name} className="w-20 h-20 mx-auto mb-4 object-contain"/>
            )
        }
        <h3 className='text-lg font-semibold'>
        {committee.name}
        </h3>
        <p className='text-lg text-gray-800 mt-2'>
        {committee.description}
        </p>
    </div>
  )
}

export default CommitteeCard;