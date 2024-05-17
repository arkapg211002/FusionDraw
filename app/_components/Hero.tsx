import React from 'react'

function Hero() {
  return (
    <section className="bg-white">
        <div className='flex items-baseline 
        justify-center pt-20'>
        <h2 className='text-black border 
            px-3 p-2 rounded-full
        text-center border-black'>Explore | <span className='text-red-600'><b>FusionDraw</b></span></h2>

        </div>
  <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex  ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-4xl text-green-700 font-extrabold m:text-5xl">
      Take Notes and Diagrams</h1>
       <h2 className="text-3xl">
        <strong className="font-extrabold text-black m:block"> 
        Focus on <i className="text-red-600">Individual Productivity</i></strong>
        </h2> 
      

      <p className="mt-4 sm:text-xl/relaxed text-slate-500">
      Seamlessly integrates note-taking with diagram creation for enhanced clarity
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded-full bg-black text-white px-12 py-3 text-sm font-medium  shadow hover:bg-slate-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          <b>Repository</b>
        </a>

       
      </div>
    </div>
  </div>

  <footer className="bg-dark-50 dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
        <svg className="h-8" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          
        </svg>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
        Copyright &copy; 2024 Arkapratim Ghosh. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  
</section>


  )
}

export default Hero

