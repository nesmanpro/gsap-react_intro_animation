import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(useGSAP, SplitText, CustomEase);
CustomEase.create('hop', '.8, 0, .3, 1');


export default function useIntro(mainRef) {

    useGSAP(() => {

        let mm = gsap.matchMedia();

        mm.add(
            {
                isMobile: '(max-width: 1000px)',
                isDesktop: '(min-width: 1001px)'
            },
            (ctx) => {

                const { isMobile } = ctx.conditions;

                const splitTextElements = (
                    selector,
                    type = "words, chars",
                    addFirstChar = false
                ) => {

                    // const element = elRef(selector);
                    const element = gsap.utils.toArray(selector)

                    element.forEach((el) => {
                        const splitText = new SplitText(el, {
                            type,
                            wordsClass: 'word',
                            charsClass: 'char'
                        })

                        if (type.includes('chars')) {
                            splitText.chars.forEach((char, idx) => {
                                const originalText = char.textContent;

                                char.innerHTML = `<span>${originalText}</span>`;

                                if (addFirstChar && idx === 0) {
                                    char.classList.add('first-char')
                                }
                            })
                        }
                    })
                }


                splitTextElements('.intro-title h1', 'words, chars', true);
                splitTextElements('.outro-title h1');
                splitTextElements('.tag p', 'words');
                splitTextElements('.card h1', 'words, chars', true);



                gsap.set(
                    [
                        '.split-overlay .intro-title .firs-char span',
                        '.split-overlay .outro-title .char span',
                    ],
                    {
                        y: '0%',
                    }
                );

                gsap.set('.tags-overlay, .intro-title, .outro-title', {
                    opacity: 1
                })

                gsap.set('.split-overlay .intro-title .first-char', {
                    x: isMobile ? '7.5rem' : '18rem',
                    y: isMobile ? '-1rem' : '-2.75rem',
                    fontWeight: 0.75,
                })

                gsap.set('.split-overlay .outro-title .char', {
                    x: isMobile ? '-2.5rem' : '-6rem',
                    fontSize: isMobile ? '6rem' : '14rem',
                    fontWeight: '500'
                });

                const tl = gsap.timeline({ defaults: { ease: 'hop' } });
                const tags = gsap.utils.toArray('.tag')

                tags.forEach((tag, i) => {
                    tl.to(tag.querySelectorAll('p .word'), {
                        y: '0%',
                        duration: 0.75,
                        opacity: 1
                    }, 0.5 + i * 0.1)
                });

                tl.to('.preloader .intro-title .char span', {
                    y: '0%',
                    duration: 0.45,
                    stagger: 0.05
                }, .5
                ).to('.preloader .intro-title .char:not(.first-char) span', {
                    y: '100%',
                    duration: 0.45,
                    stagger: 0.05
                }, 2
                ).to('.preloader .outro-title .char span', {
                    y: '0%',
                    duration: 0.45,
                    stagger: 0.05
                }, 2.5
                ).to('.preloader .intro-title .first-char', {
                    x: isMobile ? '7rem' : "18rem",
                    duration: .5,
                }, 3
                ).to('.preloader .outro-title .char', {
                    x: isMobile ? '-4rem' : '-8rem',
                    duration: .5,
                }, 3
                ).to(
                    '.preloader .intro-title .first-char', {
                    x: isMobile ? '6.8rem' : '17rem',
                    y: isMobile ? '-1rem' : '-2.7rem',
                    fontWeight: '900',
                    scale: 0.75,
                    duration: 0.45,
                },
                    3.5
                )
                    .to(
                        '.preloader .outro-title .char', {
                        x: isMobile ? '-2.5rem' : '-6rem',
                        fontSize: isMobile ? '6rem' : '14rem',
                        fontWeight: '500',
                        duration: 0.45,
                        onComplete: () => {
                            gsap.set('.preloader', {
                                clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0% 50%)',
                            });

                            gsap.set('.split-overlay', {
                                clipPath: 'polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)',
                            });


                        }
                    },
                        3.5
                    )
                    .to('.wrapper', {
                        clipPath: 'polygon(0% 48%, 100% 48%, 100% 52%, 0% 52%)',
                        duration: .5
                    });


                tags.forEach((tag, idx) => {
                    tl.to(
                        tag.querySelectorAll('p .word'),
                        {
                            y: '100%',
                            duration: 0.75,
                        },
                        4.5 + idx * 0.1
                    )
                });

                tl.to(['.preloader', '.split-overlay'],
                    {
                        y: (i) => (i === 0 ? '-50%' : '50%'),
                        duration: 1,
                    }, 5
                ).to('.wrapper', {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    duration: .5
                }, 5
                ).to('.wrapper .card', {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }, 5.25
                ).to('.wrapper .card h1 .char span', {
                    y: '0%',
                    duration: .75,
                    stagger: 0.05
                }, 5.5)
            }
        )

    }, {
        scope: mainRef,
    })
} 