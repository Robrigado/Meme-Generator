import React from 'react'

export default function Body() {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col my-16 w-10/12'>
                <div className='flex justify-center gap-4 mb-4'>
                    <input className='font-Karla h-10 flex-1 border-2 border-[#D5D4D8] rounded' type="text"/>
                    <input className='font-Karla h-10 flex-1 border-2 border-[#D5D4D8] rounded' type="text"/>
                </div>
                <button className='font-Karla flex-1 p-3 rounded text-white bg-gradient-to-r from-[#672280] to-[#A626D3]'>Get a new meme image</button>
            </div>
            <img className='w-8/12 p-5' src="/src/assets/images/meme.png"/>
        </div>
    ) 
}