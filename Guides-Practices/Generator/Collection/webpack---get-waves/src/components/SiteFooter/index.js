import React from "react"
import styled from "@emotion/styled"

import Container from "../Container"
import Box from "../Box"
import Grid from "../Grid"
import Span from "../Span"
import Flex from "../Flex"
import Heading from "../Heading"
import Logo from "../Logo"
import NewsletterForm from "../NewsletterForm"
import blobGif from "../../images/blobs-5.gif"
import figmaLogo from "../../images/figma-logo.svg"
import geoQuizLogo from "../../images/geo-quiz-logo.svg"

const Copyright = () => {
    const currentYear = new Date().getFullYear()
    return ( <
        Container >
        <
        Grid pt = "2.5rem"
        gridColumnGap = "2.5rem"
        gridRowGap = "1.25rem"
        alignItems = "center"
        style = {
            {
                borderTop: "0.0625rem solid #E3E4E5"
            }
        } >
        <
        Box order = {
            ["1", null, "2"]
        }
        gridColumn = {
            ["span 6", null, "span 2"]
        }
        textAlign = {
            ["center", null, "left"]
        } >
        <
        a href = "https://www.producthunt.com/posts/get-waves?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-get-waves" >
        <
        img src = "https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=164553&theme=dark&period=daily"
        alt = "Get waves - A simple web app to generate svg waves, unique every time | Product Hunt Embed"
        style = {
            {
                width: 250,
                height: 54
            }
        }
        width = "250px"
        height = "54px" /
        >
        <
        /a> <
        /Box> <
        Box order = {
            ["2", null, "1"]
        }
        gridColumn = {
            ["span 6", null, "3 / span 2"]
        }
        width = "100%"
        color = "#273036"
        textAlign = "center" >
        <
        div >
        &
        copy; {
            ` ${currentYear} `
        } <
        a href = "https://www.zcreativelabs.com/"
        style = {
            {
                fontSize: "0.875rem"
            }
        }
        className = "standalone" >
        {
            "z creative labs"
        } <
        /a> <
        /div> <
        /Box> <
        /Grid> <
        /Container>
    )
}

const Gif = styled("img")
`
  filter: brightness(1.01);
  width: 3rem;
  height: 3rem;
`

const SiteFooter = () => {
    return ( <
        Box bg = "#F3F4F5"
        pt = {
            ["3rem", null, null, "5rem"]
        }
        mb = "3rem" >
        <
        Container size = "lg"
        mb = "3rem" >
        <
        Grid gridColumnGap = "2.5rem"
        gridRowGap = "2.5rem" >
        <
        Box gridColumn = {
            ["span 6", null, "1 / span 2"]
        } >
        <
        Heading as = "h2"
        fontSize = "sm"
        mb = "0.75rem"
        mt = "0" > {
            "Newsletter"
        } < /Heading> <
        Span mr = "0.5rem" > {
            "Get notified when we publish something new! Unsubscribe anytime."
        } < /Span> <
        NewsletterForm / >
        <
        /Box> <
        Box gridColumn = {
            ["span 6", null, "3 / span 2"]
        } >
        <
        Heading as = "h2"
        fontSize = "sm"
        mb = "0.75rem"
        mt = "0" > {
            "Contact us"
        } < /Heading> {
            "Have a generative design project in mind? Let's chat! "
        } <
        a href = "mailto:hello@zcreativelabs.com"
        className = "standalone"
        style = {
            {
                display: "inline-block"
            }
        } > {
            "hello@zcreativelabs.com"
        } <
        /a> <
        /Box> <
        Box gridColumn = {
            ["span 6", null, "5 / span 2"]
        } >
        <
        Heading as = "h2"
        fontSize = "sm"
        mb = "0.75rem"
        mt = "0" > {
            "More products"
        } < /Heading> <
        Flex alignItems = "center" >
        <
        Span mr = "0.5rem"
        lineHeight = "default" > {
            "If you like svg shape generators, try "
        } <
        a href = "https://www.blobmaker.app/"
        className = "standalone"
        style = {
            {
                display: "inline-block"
            }
        } > {
            "Blobmaker.app"
        } <
        svg style = {
            {
                marginLeft: "0.5rem"
            }
        }
        xmlns = "http://www.w3.org/2000/svg"
        width = "16"
        height = "16"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        strokeWidth = "2"
        strokeLinecap = "round"
        strokeLinejoin = "round" > < g fill = "none"
        fillRule = "evenodd" > < path d = "M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" / > < /g></svg >
        <
        /a> <
        /Span> <
        Box flex = "none" >
        <
        a href = "https://www.blobmaker.app/" >
        <
        Gif src = {
            blobGif
        }
        alt = "Blobmaker" / >
        <
        /a> <
        /Box> <
        /Flex>

        <
        Flex alignItems = "center"
        pt = "1.5rem" >
        <
        Box >
        <
        Logo width = "2rem"
        height = "2rem" / >
        <
        /Box> <
        Box mx = "0.5rem"
        style = {
            {
                fontSize: "2rem"
            }
        } >
        <
        strong > {
            "+"
        } < /strong> <
        /Box> <
        Box >
        <
        img src = {
            figmaLogo
        }
        width = "30"
        height = "30"
        alt = "Figma logo" / >
        <
        /Box> <
        /Flex> <
        Span > {
            "You can now make waves directly in Figma!"
        } < br / >
        <
        a className = "standalone"
        href = "https://www.figma.com/c/plugin/745619465174154496/Get-Waves"
        style = {
            {
                display: "inline-block"
            }
        } > {
            "Get the Figma plugin"
        } <
        svg style = {
            {
                marginLeft: "0.5rem"
            }
        }
        xmlns = "http://www.w3.org/2000/svg"
        width = "16"
        height = "16"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        strokeWidth = "2"
        strokeLinecap = "round"
        strokeLinejoin = "round" > < g fill = "none"
        fillRule = "evenodd" > < path d = "M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" / > < /g></svg >
        <
        /a> <
        /Span>

        <
        Flex alignItems = "center"
        pt = "1.5rem" >
        <
        Span mr = "0.5rem"
        lineHeight = "default"
        pr = "1.5rem" > {
            "Have a minute? Challenge yourself with our fun geo quiz! "
        } <
        a href = "https://geography.games/europe-quiz/"
        className = "standalone"
        style = {
            {
                display: "inline-block"
            }
        } > {
            "Start playing"
        } <
        svg style = {
            {
                marginLeft: "0.5rem"
            }
        }
        xmlns = "http://www.w3.org/2000/svg"
        width = "16"
        height = "16"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        strokeWidth = "2"
        strokeLinecap = "round"
        strokeLinejoin = "round" > < g fill = "none"
        fillRule = "evenodd" > < path d = "M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" / > < /g></svg >
        <
        /a> <
        /Span> <
        Box flex = "none"
        width = "3rem"
        height = "3rem" >
        <
        a href = "https://geography.games/europe-quiz/" >
        <
        img src = {
            geoQuizLogo
        }
        width = "100%"
        alt = "Geography games logo" / >
        <
        /a>

        <
        /Box> <
        /Flex> <
        /Box> <
        /Grid> <
        /Container> <
        Copyright / >
        <
        /Box>
    )
}

export default SiteFooter