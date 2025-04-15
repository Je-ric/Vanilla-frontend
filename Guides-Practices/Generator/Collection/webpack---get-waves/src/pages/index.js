import React, {
    useReducer
} from "react"
import {
    range
} from "d3-array"
// import nanoid from "nanoid"
import chroma from "chroma-js"

import Layout from "../components/Layout"
import DownloadButton from "../components/Download"
import Container from "../components/Container"
import Controls from "../components/Controls"
import Heading from "../components/Heading"
import Waves from "../components/Waves"
import Box from "../components/Box"

const initialState = {
    waves: [{
        id: "aabbccddeeff11223344",
        data: range(6).map(() => Math.round(Math.random() * 10)),
        curve: "wave",
        color: "#0099ff",
        direction: "up",
        complexity: 6,
        opacity: 100,
    }, ],
}

function reducer(state, action) {
    switch (action.type) {
        case "randomize":
            return {
                ...state,
                waves: state.waves.map(wave => {
                    return {
                        ...wave,
                        data: range(wave.complexity).map(() => Math.round(Math.random() * 10)),
                    }
                }),
            }
        case "randomize_wave":
            return {
                ...state,
                waves: state.waves.map(wave => {
                    const shouldRandomize = action.payload.id === wave.id
                    return {
                        ...wave,
                        data: shouldRandomize ?
                            range(wave.complexity).map(() => Math.round(Math.random() * 10)) :
                            wave.data,
                    }
                }),
            }
        case "add_wave":
            return {
                ...state,
                waves: state.waves.concat([{
                    // id: nanoid(),
                    id: "22334455112233AABBCC",
                    data: range(5).map(() => Math.round(Math.random() * 10)),
                    curve: "wave",
                    color: chroma.random().hex(),
                    direction: "up",
                    complexity: 5,
                    opacity: 100,
                }, ])
            }
        case "change_wave_color":
            return {
                ...state,
                waves: state.waves.map(wave => {
                    const shouldChangeColor = action.payload.id === wave.id
                    return {
                        ...wave,
                        color: shouldChangeColor ? action.payload.color : wave.color,
                    }
                })
            }
        case "change_curve":
            return {
                ...state,
                waves: state.waves.map(wave => {
                    const shouldChangeCurve = action.payload.id === wave.id
                    return {
                        ...wave,
                        curve: shouldChangeCurve ? action.payload.curve : wave.curve,
                    }
                })
            }
        case "change_direction":
            return {
                ...state,
                waves: state.waves.map(wave => {
                    const shouldChangeDirection = action.payload.id === wave.id
                    return {
                        ...wave,
                        direction: shouldChangeDirection ? action.payload.direction : wave.direction,
                    }
                })
            }
        case "change_complexity":
            return {
                ...state,
                waves: state.waves.map(wave => {
                    const shouldChangeComplexity = action.payload.id === wave.id
                    return {
                        ...wave,
                        data: shouldChangeComplexity ?
                            range(action.payload.complexity).map(() => Math.round(Math.random() * 10)) :
                            wave.data,
                        complexity: shouldChangeComplexity ? action.payload.complexity : wave.complexity,
                    }
                })
            }
        case "change_opacity":
            return {
                ...state,
                waves: state.waves.map(wave => {
                    const shouldChangeOpacity = action.payload.id === wave.id
                    return {
                        ...wave,
                        opacity: shouldChangeOpacity ? action.payload.opacity : wave.opacity,
                    }
                })
            }
        default:
            return state
    }
}

const IndexPage = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return ( <
        Layout >

        <
        Container textAlign = "center"
        style = {
            {
                flex: "none"
            }
        } >
        <
        Heading my = "0"
        fontSize = {
            ["xl", "xxl"]
        } > {
            "Make some waves!"
        } <
        /Heading> { /* <P fontSize="md" display={["block", null, null, "none"]}>{"Generate svg sections for your designs. Give it try on your computer!"}</P> */ } {
            /* <button onClick={() => dispatch({ type: "add_wave" })}>
                      { "Add wave" }
                    </button> */
        } <
        /Container>

        <
        Container position = "relative"
        pt = "2.5rem"
        pb = {
            ["5rem", "7rem"]
        }
        maxWidth = "72rem"
        style = {
            {
                flex: "1 1 auto",
                zIndex: 2
            }
        } >
        <
        Controls waves = {
            state.waves
        }
        dispatch = {
            dispatch
        }
        /> <
        DownloadButton / >
        <
        /Container>

        <
        Box bg = "white"
        style = {
            {
                position: "relative",
                flex: "none"
            }
        } >
        <
        Waves waves = {
            state.waves
        }
        /> <
        /Box>

        <
        /Layout>
    )
}

export default IndexPage