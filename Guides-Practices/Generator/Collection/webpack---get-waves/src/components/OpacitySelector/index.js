import React from "react"

import Textfield from "../Textfield"
import Box from "../Box"
import Flex from "../Flex"

const OpacitySelector = ({
    wave,
    dispatch
}) => {

    const handleChange = (evt) => {
        dispatch({
            type: "change_opacity",
            payload: {
                id: wave.id,
                opacity: +evt.target.value
            }
        })
    }

    return ( <
        Box bg = "rgba(0,0,0,0.1)"
        width = {
            ["auto", "5.25rem"]
        }
        borderRadius = "md" >
        <
        Flex alignItems = "center"
        style = {
            {
                position: "relative"
            }
        } >
        <
        Textfield bg = "#F3F4F5"
        type = "number"
        min = "0"
        max = "100"
        value = {
            wave.opacity
        }
        onChange = {
            handleChange
        }
        pr = "2rem" / >
        <
        Box position = "absolute"
        top = "0"
        right = "0"
        height = "100%"
        style = {
            {
                pointerEvents: "none"
            }
        } >
        <
        Flex height = "100%"
        alignItems = "center"
        px = "0.75rem" > {
            "%"
        } <
        /Flex> <
        /Box> <
        /Flex> <
        /Box>
    )
}

export default OpacitySelector