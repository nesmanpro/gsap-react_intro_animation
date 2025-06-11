'use client'

import React, { useRef } from 'react'
import useIntro from '@/animations/IntroAnimation'
import { Intro } from '../components/Intro'


export const Preloader = ({ children }) => {
    const mainRef = useRef(null);

    useIntro(mainRef)

    return (
        <div ref={mainRef} className="relative">
            <Intro />
            <div className="wrapper h-screen">
                {children}
            </div>
        </div>
    )
}

