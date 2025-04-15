import styled from "@emotion/styled"
import {
    position,
    space,
    maxWidth,
    color,
    textAlign
} from "styled-system"

const propNames = [
    ...position.propNames,
    ...space.propNames,
    ...maxWidth.propNames,
    ...color.propNames,
    ...textAlign.propNames,
    "as",
]

const Container = styled("div", {
    shouldForwardProp: prop => propNames.indexOf(prop) === -1,
})(position, space, maxWidth, color, textAlign)

Container.defaultProps = {
    maxWidth: "90rem",
    mx: "auto",
    px: ["1.5rem", null, null, "5rem"],
}

export default Container