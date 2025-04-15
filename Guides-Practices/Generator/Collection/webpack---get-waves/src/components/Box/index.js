import styled from "@emotion/styled"
import {
    space,
    layout,
    grid,
    flex,
    color,
    border,
    textAlign,
    justifySelf,
    position,
    boxShadow,
    order,
} from "styled-system"

const propNames = [
    ...space.propNames,
    ...layout.propNames,
    ...grid.propNames,
    ...flex.propNames,
    ...color.propNames,
    ...border.propNames,
    ...textAlign.propNames,
    ...position.propNames,
    ...justifySelf.propNames,
    ...boxShadow.propNames,
    ...order.propNames,
    "as"
]

const Box = styled("div", {
    shouldForwardProp: prop => propNames.indexOf(prop) === -1,
})(space, layout, grid, flex, color, border, textAlign, position, justifySelf, boxShadow, order)

export default Box