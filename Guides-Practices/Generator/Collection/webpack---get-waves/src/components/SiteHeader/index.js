import React from "react"

import Container from "../Container"
import P from "../Paragraph"
import Logo from "../Logo"
import Flex from "../Flex"
import Box from "../Box"
import Share from "../Share"
import HaikeiBanner from "../HaikeiBanner"

const SiteHeader = () => {
    return ( <
        >
        <
        HaikeiBanner / >
        <
        Container py = "2.5rem" >
        <
        Flex justifyContent = "space-between"
        alignItems = "center" >
        <
        Box width = "12rem" >
        <
        P fontSize = "sm" > {
            "Made by "
        } <
        a href = "https://www.zcreativelabs.com/"
        className = "standalone" > {
            "z creative labs"
        } <
        /a> <
        /P> <
        /Box> <
        Box textAlign = "center" >
        <
        Logo width = "5rem"
        height = "5rem" / >
        <
        /Box> <
        Box width = "12rem"
        textAlign = "right" >
        <
        Share / >
        <
        /Box> <
        /Flex> <
        /Container> <
        />
    )
}

export default SiteHeader