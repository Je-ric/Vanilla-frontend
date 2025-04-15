import styled from "@emotion/styled"
import {
    color,
    typography,
    space
} from "styled-system"

const propNames = [
    ...color.propNames,
    ...typography.propNames,
    ...space.propNames,
    "as",
]

const Heading = styled("h1", {
    shouldForwardProp: prop => propNames.indexOf(prop) === -1,
})(color, typography, space)

Heading.defaultProps = {
    fontSize: "xxl",
    lineHeight: "heading",
}

export default Heading