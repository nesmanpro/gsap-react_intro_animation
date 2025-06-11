'use client'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(useGSAP, CustomEase);
CustomEase.create('hop', '.8, 0, .3, 1');

export const Header = () => {

    const menuRef = useRef(null)
    const timelineRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    const tl = gsap.timeline({ defaults: { ease: 'hop' }, paused: true })



    useGSAP(() => {
        tl.to(menuRef.current, {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: 0.5
        });



        timelineRef.current = tl;
    }, [])

    useEffect(() => {
        isOpen ? timelineRef.current.play() : timelineRef.current.reverse();
    }, [isOpen])

    return (
        <>
            <nav className="fixed top-0">
                <div id="logo">N10</div>
                <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <p>menu</p>
                </div>
            </nav>
            <div ref={menuRef} className='absolute w-full h-full top-0 left-0 bg-accent text-background px-6 py-10 flex flex-col ' style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
                willChange: 'clip-path',
            }}
                onClick={() => setIsOpen(!isOpen)}>

                <ul className='flex flex-col h-full justify-center items-center gap-5 text-6xl font-bold uppercase  ' >
                    <li>
                        <Link className='relative cursor-pointer flex flex-col overflow-hidden' href="/">
                            <span className=" absolute">Home</span>
                            <span className="  transform -translate-y-[100%]">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="relative cursor-pointer flex flex-col overflow-hidden h-fit w-fit" href="/about">
                            <span className="absolute">About</span>
                            <span className="transform -translate-y-[100%]">About</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
