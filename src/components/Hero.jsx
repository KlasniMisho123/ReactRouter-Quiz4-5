import React from 'react'

export default function Hero() {
  return (
    <div className='hero-flex'>
        {/* <img className='hero-img' src="monkeyKing.jpg" alt='monkey king'/> */}
        {/* <img className='hero-img' src="https://www.rockpapershotgun.com/images/16/aug/sun1.jpg" alt='monkey king'/> */}
        <img className='hero-img' src="https://dmarket.com/blog/best-dota2-wallpapers/monkey-king-dota-2-wallpapers_hu12480426162898230189.jpg" alt='monkey king'/>
        <div className='hero-div' >
            <h1 className='hero-title' >GrimStroke</h1>
            <p className='hero-desc'>Grimstroke was once a noble artist whose ambition led him to sacrifice his entire village to a cursed, 
                unholy ink. In his lust for power, he bound their souls to the ink, dooming them and cursing himself in
                 the process. Now, he wields the same ink as a weapon, painting grim fates for his enemies while haunted by his dark past.</p>
            <h4 className='hero-v-line'>"Your stroke of fate ends here"</h4>
            <button className='redirect-btn'> Go To Gallery </button>
        </div>
    </div>
  )
}
