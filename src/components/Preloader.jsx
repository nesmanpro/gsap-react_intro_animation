'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import img1 from '@/assets/img1.jpg'
import useIntro from '@/hooks/animations/IntroAnimation'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import { Intro } from './Intro'


export const Preloader = () => {
    const mainRef = useRef(null);

    useIntro(mainRef)


    return (
        <div ref={mainRef}>
            <Intro />

            <div className="wrapper">
                <Header />

                <div className="hero-img">
                    <Image className='pointer-events-none' src={img1} alt='Logo' />
                </div>
                <div className="card"><h1>BAM Studio</h1></div>
                <Footer />
            </div>
        </div>
    )
}

