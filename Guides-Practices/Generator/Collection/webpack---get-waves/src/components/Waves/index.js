import React from "react"
import {
    scaleLinear
} from "d3-scale"
import {
    area,
    curveBasis,
    curveStepBefore,
    curveLinear
} from "d3-shape"

import Box from "../Box"

const width = 1440
const height = 320

const curves = {
    wave: curveBasis,
    step: curveStepBefore,
    peak: curveLinear,
}

const Wave = ({
    wave
}) => {

    const scaleX = scaleLinear()
        .domain([0, wave.complexity - 1])
        .range([0, width])

    const scaleY = scaleLinear()
        .domain([0, 10])
        .range([0, height])

    const areaGenerator = area()
        .x((d, i) => {
            return scaleX(i)
        })
        .y1((d) => {
            return scaleY(d)
        })

    const d = areaGenerator
        .curve(curves[wave.curve])
        .y0(wave.direction === "up" ? height : 0)(wave.data)

    const roundedD = d.split(/M|Z/).filter(d => d)[0].split(",").map(d => {
        if (d.indexOf("C") !== -1) {
            return d.split("C").map(n => Math.round(n * 10) / 10).join("C")
        } else if (d.indexOf("L") !== -1) {
            return d.split("L").map(n => Math.round(n * 10) / 10).join("L")
        } else {
            return Math.round(d)
        }
    })

    return ( <
        path fill = {
            wave.color
        }
        fillOpacity = {
            wave.opacity / 100
        }
        d = {
            "M" + roundedD.join(",") + "Z"
        }
        />
    )
}

const Waves = ({
        waves
    }) => {
        return ( <
                Box id = "wave-container" >
                <
                svg xmlns = "http://www.w3.org/2000/svg"
                viewBox = {
                    `0 0 ${width} ${height}`
                } > {
                    waves.map(wave => < Wave key = {
                            wave.id
                        }
                        wave = {
                            wave
                        }
                        />) } <
                        /svg> <
                        /Box>
                    )
                }

                export default Waves