import React from 'react'

import imgMobile from '../assets/images/image-web-3-mobile.jpg'
import imgDesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainArticle = () => {
  return (
    <article >
        <picture>
            <source media="(max-width: 640px)" srcSet={imgMobile} />
            <source media="(min-width: 641px)" srcSet={imgDesktop} />
            <img src={imgMobile} alt="articulo principal" className='main-article-image' />
        </picture>
        <section className='main-article'>
            <h2 className='main-title'>The Bright Future of Web 3.0?</h2>
            <div className='main-content'>
                <p className='main-paragraph'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?</p>
                <button className='main-button'>READ MORE</button>
            </div>
        </section>

    </article>
  )
}
