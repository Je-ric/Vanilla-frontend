import React from "react"

import ControlBar from "../ControlBar"

const Controls = ({
    waves,
    dispatch
}) => {
    return ( <
        > {
            waves.map(wave =>
                <
                ControlBar key = {
                    wave.id
                }
                wave = {
                    wave
                }
                dispatch = {
                    dispatch
                }
                />
            )
        } <
        />
    )
}

export default Controls