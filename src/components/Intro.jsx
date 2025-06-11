import React from 'react'

export const Intro = () => {
    return (
        <>
            <div className='preloader pointer-events-none' >
                <div className="intro-title ">
                    <h1 className='text-nowrap'>BAM Studio</h1>
                </div>
                <div className="outro-title ">
                    <h1>10</h1>
                </div>
            </div>
            <div className="split-overlay pointer-events-none">
                <div className="intro-title ">
                    <h1 className='text-nowrap'>BAM Studio</h1>
                </div>
                <div className="outro-title ">
                    <h1>10</h1>
                </div>
            </div>
            <div className="tags-overlay pointer-events-none">
                <div className="tag tag-1"><p>Negative Space</p></div>
                <div className="tag tag-2"><p>Form & Void</p></div>
                <div className="tag tag-3"><p>Light Studio</p></div>
            </div>
        </>
    )
}
