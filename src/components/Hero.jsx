import React, { useEffect, useState } from 'react';
import heroDatas from "../heroCalc";

export default function Hero() {
    const [currnetNum, setCurrnetNum] = useState(-1);
    const [currentHero, setCurrentHero] = useState(null);

    useEffect(() => {
        // Generate a random number between 0 and heroDatas length
        let randNum = Math.floor(Math.random() * heroDatas.length);
        setCurrnetNum(randNum);
    }, []);

    useEffect(() => {
        if (currnetNum !== -1) {
            // setCurrentHero(heroDatas[currnetNum]);
            setCurrentHero(heroDatas[1]);
        }
    }, [currnetNum]);

    console.log(currentHero);

    return (
        <>
            {currentHero ? (
                <div className='hero-flex'>
                    <img className='hero-img' src={currentHero.imgSrc} alt={currentHero.name} />
                    <div className='hero-div'>
                        <h1 className='hero-title'>{currentHero.name}</h1>
                        <p className='hero-desc'>{currentHero.description}</p>
                        <h4 className='hero-v-line'>"{currentHero.voiceLine}"</h4>
                        <button className='redirect-btn'>Go To Gallery</button>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
