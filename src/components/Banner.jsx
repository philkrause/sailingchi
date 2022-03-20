import React from 'react'
import bannerVideo from '../videos/moving_water.mp4'
import bannercss from '../css/banner.css'



export default function Banner() {
    return (
        <>
            <section href='bannercss'>
                <video autoPlay loop muted>
                    <source src={bannerVideo} type='video/mp4' />
                </video>
            </section>
        </>
    )
}