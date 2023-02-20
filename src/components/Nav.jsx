import React from 'react'

export default function Nav() {
  return (
    <div className='bg-altlearn text-white'>
        <nav className=' container mx-auto font-semibold'>
        <div className="flex flex-row justify-between p-2">
          <div className="py-2 text-2xl">
            Dojo Blog
          </div>
          <div className="flex flex-row space-x-3">
          
              <a href="#" className='text-lg py-1'>Home</a>
              
              <a href="#" className='bg-black text-white py-2 px-4 rounded h-6'>Add new</a>
            
          </div>
        </div>
        </nav>
    </div>
  )
}
