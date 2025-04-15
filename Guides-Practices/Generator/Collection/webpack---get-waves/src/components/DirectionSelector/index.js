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
// import { Button } from "reakit/Button"
import Button from "../Button"
import Box from "../Box"
import {
    UpIcon,
    DownIcon
} from "../Icon"

const DirectionSelector = ({
    wave,
    dispatch
}) => {
    const rover = useRoverState({
        currentId: wave.direction
    })

    useEffect(() => {
        dispatch({
            type: "change_direction",
            payload: {
                id: wave.id,
                direction: rover.currentId
            }
        })
    }, [rover.currentId])

    return ( <
        Group as = {
            Box
        }
        bg = "#F3F4F5"
        display = {
            ["flex", "inline-flex"]
        }
        borderRadius = "md" >
        <
        Rover variant = {
            rover.currentId === "up" ? "primary" : "default"
        } { ...rover
        }
        as = {
            Button
        }
        stopId = "up"
        style = {
            {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
            }
        }
        width = {
            ["50%", "2.5rem"]
        }
        px = "0" >
        <
        UpIcon / >
        <
        /Rover> <
        Rover variant = {
            rover.currentId === "down" ? "primary" : "default"
        } { ...rover
        }
        as = {
            Button
        }
        stopId = "down"
        style = {
            {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
            }
        }
        width = {
            ["50%", "2.5rem"]
        }
        px = "0" >
        <
        DownIcon / >
        <
        /Rover> <
        /Group>
    )
}

export default DirectionSelector