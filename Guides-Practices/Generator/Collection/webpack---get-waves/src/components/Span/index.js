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

const Span = styled("span", {
    shouldForwardProp: prop => propNames.indexOf(prop) === -1,
})(color, typography, space)

Span.defaultProps = {
    fontSize: "sm",
    lineHeight: "dense",
}

export default Span