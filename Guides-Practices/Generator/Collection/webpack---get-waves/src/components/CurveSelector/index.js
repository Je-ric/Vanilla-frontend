import React, {
    useEffect
} from "react"
import {
    useRoverState,
    Rover
} from "reakit/Rover"
import {
    Group
} from "reakit/Group"
import Button from "../Button"
import Box from "../Box"
import {
    WaveIcon,
    StepsIcon,
    PeakIcon
} from "../Icon"


const CurveSelector = ({
    wave,
    curve,
    dispatch
}) => {
    const rover = useRoverState({
        currentId: "wave"
    })

    useEffect(() => {
        dispatch({
            type: "change_curve",
            payload: {
                id: wave.id,
                curve: rover.currentId
            }
        })
    }, [rover.currentId])

    return ( <
        Group as = {
            Box
        }
        bg = "#F3F4F5"
        borderRadius = "md"
        display = {
            ["flex", "inline-flex"]
        } >
        <
        Rover variant = {
            rover.currentId === "wave" ? "primary" : "default"
        } { ...rover
        }
        as = {
            Button
        }
        stopId = "wave"
        style = {
            {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
            }
        }
        width = {
            ["33.333333%", "2.5rem"]
        }
        px = "0" >
        <
        WaveIcon / >
        <
        /Rover> <
        Rover variant = {
            rover.currentId === "step" ? "primary" : "default"
        } { ...rover
        }
        as = {
            Button
        }
        stopId = "step"
        borderRadius = "0"
        width = {
            ["33.333333%", "2.5rem"]
        }
        px = "0" >
        <
        StepsIcon / >
        <
        /Rover> <
        Rover variant = {
            rover.currentId === "peak" ? "primary" : "default"
        } { ...rover
        }
        as = {
            Button
        }
        stopId = "peak"
        style = {
            {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
            }
        }
        width = {
            ["33.333333%", "2.5rem"]
        }
        px = "0" >
        <
        PeakIcon / >
        <
        /Rover> <
        /Group>
    )
}

export default CurveSelector