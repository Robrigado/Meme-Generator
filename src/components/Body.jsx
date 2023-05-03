import React from 'react'
import memesData from '../assets/data/memesData'
import { useState } from 'react'

export default function Body() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getRandomMeme() {
        const memesArr = allMemeImages.data.memes;
        let n = Math.floor(Math.random() * memesArr.length);
        setMeme(prevMeme => ({...prevMeme, randomImage: memesArr[n]['url']}));
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
            <img src={meme.randomImage} className='w-8/12 m-5'/>
        </div>
    ) 
}