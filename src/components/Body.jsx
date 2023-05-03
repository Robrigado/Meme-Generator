import React from 'react'
import data from '../assets/data/memesData'
import { useState } from 'react'

export default function Body() {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [memeImage, setMemeImage] = useState("");

    function getRandomMeme() {
        const memesArr = data.data.memes;
        let n = getRandomNumber(0, memesArr.length - 1)
        setMemeImage(memesArr[n]['url']);
    }
    

    return (
        <div className='flex flex-col items-center h-full'>
            <div className='flex flex-col my-16 w-8/12'>
                <div className='flex justify-center gap-4 mb-4'>
                    <input placeholder='Top text' className='font-Karla h-10 p-3 flex-1 border-2 border-[#D5D4D8] rounded' type="text"/>
                    <input placeholder='Bottom text' className='font-Karla h-10 p-3 flex-1 border-2 border-[#D5D4D8] rounded' type="text"/>
                </div>
                <button onClick={getRandomMeme} className='font-Karla flex-1 p-3 rounded text-white bg-gradient-to-r from-[#672280] to-[#A626D3]'>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} className='w-8/12 m-5'/>
        </div>
    ) 
}