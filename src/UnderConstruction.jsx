import React from 'react'

const UnderConstruction = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid border-opacity-50 mb-8 mx-auto'></div>
        <h1 className='text-5xl font-bold text-gray-900 mb-4'>
          Website Under Construction
        </h1>
        <p className='text-lg text-gray-700'>
          We're working hard to bring you an amazing new experience. Please
          check back soon!
        </p>
      </div>
    </div>
  )
}

export default UnderConstruction
