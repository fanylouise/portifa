import React from 'react'

export const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 c-space mx-auto'>
          <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>Fany Louise</a>
          <button>
            <img src={"assets/menu.svg"} alt="" />
          </button>
        </div>
      </div>
    </header>
  )
}
