import React from "react"

import Box from "../Box"
import Button from "../Button"
import {
    TwitterIcon
} from "../Icon"

const Share = () => {
    const twitterRoot = "http://twitter.com/intent/tweet"
    const encodedShareText = encodeURIComponent("Generate #SVG sections for your designs with Get Waves by @zcreativelabs")
    const shareUrl = `${twitterRoot}?url=https://www.getwaves.io&text=${encodedShareText}&original_referer=https://www.getwaves.io`
    return ( <
        Button as = "a"
        href = {
            shareUrl
        } > {
            "Share"
        } <
        Box ml = "1rem" >
        <
        TwitterIcon / >
        <
        /Box> <
        /Button>
    )
}

export default Share