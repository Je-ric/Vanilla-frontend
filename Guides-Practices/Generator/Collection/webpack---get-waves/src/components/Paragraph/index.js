import styled from "@emotion/styled"
import {
    color,
    typography,
    space,
    display
} from "styled-system"

const propNames = [
    ...color.propNames,
    ...typography.propNames,
    ...space.propNames,
    ...display.propNames,
    "as",
]

const Paragraph = styled("p", {
    shouldForwardProp: prop => propNames.indexOf(prop) === -1,
})(color, typography, space, display)

Paragraph.defaultProps = {
    fontSize: "sm",
    lineHeight: "dense",
}

export default Paragraph