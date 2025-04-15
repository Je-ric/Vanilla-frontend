import React, {
    memo
} from "react"

import banner1 from "../../images/banners/banner-1.svg"
import banner2 from "../../images/banners/banner-2.svg"
import banner3 from "../../images/banners/banner-3.svg"
import banner4 from "../../images/banners/banner-4.svg"
import banner5 from "../../images/banners/banner-5.svg"
import banner6 from "../../images/banners/banner-6.svg"
import banner7 from "../../images/banners/banner-7.svg"
import banner8 from "../../images/banners/banner-8.svg"
import banner9 from "../../images/banners/banner-9.svg"
import banner10 from "../../images/banners/banner-10.svg"

const num = Math.floor(Math.random() * 10)
const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9, banner10]
const bgBanner = banners[num]

const HaikeiBanner = () => {
    return ( <
        a href = "https://haikei.app"
        style = {
            {
                display: "block",
                transform: "translateY(-100%)",
                willChange: "transform",
                animation: "haikeiBannerAnimation 0.5s 0.25s normal forwards cubic-bezier(0.22, 1, 0.36, 1)",
                textDecoration: "none !important",
            }
        } >
        <
        div style = {
            {
                display: "flex",
                height: "3.5rem",
                backgroundImage: `url(${bgBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "0 1rem",
                lineHeight: "1.25rem",
                textAlign: "center",
            }
        } >
        <
        p style = {
            {
                fontWeight: 700,
                color: "#FFF",
                margin: "auto"
            }
        } > {
            "Get Waves is now a part of "
        } <
        span style = {
            {
                textDecoration: "underline"
            }
        } > {
            "Haikei.app"
        } < /span> {
            ". Try it out for free!"
        } <
        /p> <
        /div> <
        /a>
    )
}

export default memo(HaikeiBanner, () => true)