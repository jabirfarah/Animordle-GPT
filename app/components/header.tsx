import React from 'react'



const header = () => {
  return (
    <header className='pt-3 sm:pt-6 h-12 sm:h-14 z-10 font-mono dark:text-yellow-50'>
        <div className='h-full flex w-full justify-between'>
          <div className='flex w-20 items-end'>
            <p className='text-black'>Hourglass</p>
          </div>
          <h1 className='text-black text-3xl font-extrabold w-min sm:w-max text-center'>Chronogram</h1>
          <div className='space-x-1 flex w-20 justify-end items-end -mb-[1px text-black'>List</div>
        </div>
        <hr className="border-black my-4 block text-black"></hr>

    </header>
  )
}

export default header