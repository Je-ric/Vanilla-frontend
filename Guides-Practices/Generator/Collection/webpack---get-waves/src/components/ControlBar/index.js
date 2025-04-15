import React, {
    useState,
    useEffect
} from "react"
import {
    TwitterPicker
} from "react-color"

import Box from "../Box"
import Flex from "../Flex"
import Button from "../Button"
import Textfield from "../Textfield"
import CurveSelector from "../CurveSelector"
import DirectionSelector from "../DirectionSelector"
import ComplexitySelector from "../ComplexitySelector"
import OpacitySelector from "../OpacitySelector"
import {
    RandomIcon
} from "../Icon"

const ColorPicker = ({
    wave,
    color = "#0693E3",
    dispatch
}) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleKeyUp = ({
            keyCode
        }) => {
            if (keyCode === 27) setIsOpen(false)
        }
        window.addEventListener("keyup", handleKeyUp)
        return () => [
            window.removeEventListener("keyup", handleKeyUp)
        ]
    }, [])

    const handleChangeColor = (id, color) => {
        dispatch({
            type: "change_wave_color",
            payload: {
                id,
                color
            },
        })
    }

    return ( <
        Box position = "relative"
        borderRadius = "md" >
        <
        Textfield type = "text"
        bg = "#ebedef"
        value = {
            color
        }
        onChange = {
            (evt) => handleChangeColor(wave.id, evt.target.value)
        }
        onClick = {
            () => setIsOpen(true)
        }
        onFocus = {
            () => setIsOpen(true)
        }
        style = {
            {
                position: "relative",
                zIndex: 900
            }
        }
        /> <
        Box position = "absolute"
        top = "50%"
        right = "0.75rem"
        width = "1.5rem"
        height = "1.5rem"
        borderRadius = "100%"
        bg = {
            color
        }
        mt = "-0.75rem"
        zIndex = {
            920
        }
        style = {
            {
                pointerEvents: "none"
            }
        }
        /> <
        Box style = {
            {
                display: isOpen ? "block" : "none"
            }
        }
        position = "fixed"
        top = {
            0
        }
        left = {
            0
        }
        right = {
            0
        }
        bottom = {
            0
        }
        zIndex = {
            888
        }
        onClick = {
            () => setIsOpen(false)
        }
        /> <
        Box position = "absolute"
        top = "100%"
        mt = "0.25rem"
        zIndex = {
            999
        }
        style = {
            {
                display: isOpen ? "block" : "none"
            }
        } >
        <
        TwitterPicker color = {
            color
        }
        colors = {
            ["#a2d9ff", "#0099ff", "#000b76", "#5000ca", "#e7008a", "#ff5500", "#00cba9", "#FFD700", "#F3F4F5", "#273036"]
        }
        onChange = {
            (newColor) => handleChangeColor(wave.id, newColor.hex)
        }
        /> <
        /Box> <
        /Box>
    )
}

// const ControlBar = ({ wave, dispatch }) => {
//   return (
//     <Box bg="white" borderRadius="lg" boxShadow="sm">
//       <Flex justifyContent="space-between" px={["0.75rem", null, null, "1.25rem"]} py="1.25rem">
//         <Flex alignItems="center">
//           <Box px={["0.5rem","0.5rem", "0.5rem","0.5rem","5rem"]}>
//             <CurveSelector wave={wave} curve={wave.curve} dispatch={dispatch} />
//           </Box>
//           <Box px={["0.5rem",null, null, "1.25rem"]} >
//             <DirectionSelector wave={wave} dispatch={dispatch} />
//           </Box>
//           <Box maxWidth="9rem" pl={["0.5rem", null, null, "1.25rem"]} pr="0.25rem" >
//             <ColorPicker wave={wave} color={wave.color} dispatch={dispatch} />
//           </Box>
//           <Box display={["none", null, null, "block"]} pl="0.25rem" pr="1.25rem" >
//             <OpacitySelector wave={wave} dispatch={dispatch} />
//           </Box>
//         </Flex>
//         <Flex alignItems="center">
//           <Box 
//             px={["0.5rem", null, null, "1.25rem"]} 
//             width={["13rem",null, null, "20rem"]} 
//           >
//             <ComplexitySelector wave={wave} dispatch={dispatch} />
//           </Box>
//           <Box px={["0.5rem", null, null, "1.25rem"]} ml={["0.5rem", null, null, 0]}>
//             <Button
//               variant="primary"
//               size="lg"
//               onClick={() => dispatch({ type: "randomize_wave", payload: { id: wave.id } })}
//               width="4rem"
//               height="4rem"
//               px="0"
//               borderRadius="100%"
//               >
//               <RandomIcon />
//             </Button>
//           </Box>
//         </Flex>
//       </Flex>
//     </Box>
//   )
// }

const ControlBar = ({
    wave,
    dispatch
}) => {
    return ( <
        Box bg = "white"
        borderRadius = "lg"
        boxShadow = "sm" >
        <
        Flex justifyContent = "space-between"
        alignItems = "center"
        px = {
            ["0.75rem", null, null, "1.25rem"]
        }
        py = "1.25rem"
        display = {
            ["block", "flex"]
        } >

        <
        Box py = {
            ["0.75rem", 0]
        }
        flex = "none"
        px = {
            ["0.25rem", null, "1rem"]
        } >
        <
        Flex alignItems = "center" >
        <
        Box pr = "0.5rem"
        width = {
            ["70%", "auto"]
        } >
        <
        CurveSelector wave = {
            wave
        }
        curve = {
            wave.curve
        }
        dispatch = {
            dispatch
        }
        />   <
        /Box> <
        Box width = {
            ["30%", "auto"]
        } >
        <
        DirectionSelector wave = {
            wave
        }
        dispatch = {
            dispatch
        }
        /> <
        /Box> <
        /Flex> <
        /Box>

        <
        Box py = {
            ["0.75rem", 0]
        }
        px = {
            ["0.25rem", null, "1rem"]
        }
        flex = "none" >
        <
        Flex alignItems = "center" >
        <
        Box pr = "0.5rem"
        width = {
            ["70%", "8.5rem"]
        }
        flex = "none" >
        <
        ColorPicker wave = {
            wave
        }
        color = {
            wave.color
        }
        dispatch = {
            dispatch
        }
        /> <
        /Box> <
        Box flex = "none"
        width = {
            ["30%", "auto"]
        }
        display = {
            ["block", "none", "block"]
        } >
        <
        OpacitySelector wave = {
            wave
        }
        dispatch = {
            dispatch
        }
        /> <
        /Box> <
        /Flex> <
        /Box>

        <
        Box py = {
            ["0.75rem", 0]
        }
        px = {
            ["0.25rem", null, "1rem"]
        }
        flex = "1 1 auto" >
        <
        Flex alignItems = "center" >
        <
        Box width = {
            ["70%", "auto"]
        }
        flex = {
            ["none", "1 1 auto"]
        }
        pr = "1rem" >
        <
        ComplexitySelector wave = {
            wave
        }
        dispatch = {
            dispatch
        }
        /> <
        /Box> <
        Box flex = "none"
        width = {
            ["30%", "auto"]
        }
        textAlign = "center" >
        <
        Button variant = "randomize"
        size = "lg"
        onClick = {
            () => dispatch({
                type: "randomize_wave",
                payload: {
                    id: wave.id
                }
            })
        }
        width = "4rem"
        height = "4rem"
        px = "0"
        borderRadius = "100%" >
        <
        RandomIcon / >
        <
        /Button> <
        /Box> <
        /Flex> <
        /Box>


        {
            /* <Flex alignItems="center">
                      <Box px={["0.5rem","0.5rem", "0.5rem","0.5rem","5rem"]}>
                        <CurveSelector wave={wave} curve={wave.curve} dispatch={dispatch} />
                      </Box>
                      <Box px={["0.5rem",null, null, "1.25rem"]} >
                        <DirectionSelector wave={wave} dispatch={dispatch} />
                      </Box>
                      <Box maxWidth="9rem" pl={["0.5rem", null, null, "1.25rem"]} pr="0.25rem" >
                        <ColorPicker wave={wave} color={wave.color} dispatch={dispatch} />
                      </Box>
                      <Box display={["none", null, null, "block"]} pl="0.25rem" pr="1.25rem" >
                        <OpacitySelector wave={wave} dispatch={dispatch} />
                      </Box>
                    </Flex>
                    <Flex alignItems="center">
                      <Box 
                        px={["0.5rem", null, null, "1.25rem"]} 
                        width={["13rem",null, null, "20rem"]} 
                      >
                        <ComplexitySelector wave={wave} dispatch={dispatch} />
                      </Box>
                      <Box px={["0.5rem", null, null, "1.25rem"]} ml={["0.5rem", null, null, 0]}>
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={() => dispatch({ type: "randomize_wave", payload: { id: wave.id } })}
                          width="4rem"
                          height="4rem"
                          px="0"
                          borderRadius="100%"
                          >
                          <RandomIcon />
                        </Button>
                      </Box>
                    </Flex> */
        } <
        /Flex> <
        /Box>
    )
}

export default ControlBar