import React from "react"

import Range from "../Range"
import Flex from "../Flex"
import Box from "../Box"
import {
    WaveLowIcon,
    WaveHighIcon,
    StepsLowIcon,
    StepsHighIcon,
    PeakLowIcon,
    PeakHighIcon,
} from "../Icon"

const ComplexitySelector = ({
    wave,
    dispatch
}) => {
    const handleChange = (evt) => {
        dispatch({
            type: "change_complexity",
            payload: {
                id: wave.id,
                complexity: +evt.target.value
            },
        })
    }
    return ( <
        Flex alignItems = "center" >
        <
        Box flex = "none"
        mr = "0.75rem" > {
            wave.curve === "wave" && < WaveLowIcon / >
        } {
            wave.curve === "step" && < StepsLowIcon / >
        } {
            wave.curve === "peak" && < PeakLowIcon / >
        } <
        /Box> <
        Box flex = "1 1 auto" >
        <
        Range type = "range"
        min = "2"
        max = "40"
        value = {
            wave.complexity
        }
        onChange = {
            handleChange
        }
        /> <
        /Box> <
        Box flex = "none"
        ml = "0.75rem" > {
            wave.curve === "wave" && < WaveHighIcon / >
        } {
            wave.curve === "step" && < StepsHighIcon / >
        } {
            wave.curve === "peak" && < PeakHighIcon / >
        } <
        /Box> <
        /Flex>
    )
}

export default ComplexitySelector