import React from 'react'

export default function Navbar() {
    return (
        <div className='flex items-center bg-gradient-to-r from-[#672280] to-[#A626D3]'>
            <div className='flex items-center p-5'>
                <img className='w-12 mr-3' src="/src/assets/images/TrollFace.png" alt="Famous troll face from memes"/>
                <h1 className='font-Karla text-3xl text-white'>Meme Generator</h1>
            </div>
            <h3 className='font-Inter ml-auto p-5 text-white'>React-Course-Project</h3>
        </div>
    ) 
}