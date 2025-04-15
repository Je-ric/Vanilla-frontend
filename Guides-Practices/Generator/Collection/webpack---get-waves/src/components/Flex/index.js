import styled from "@emotion/styled"
import {
    space,
    flexbox,
    layout
} from "styled-system"

const propNames = [
    ...space.propNames,
    ...flexbox.propNames,
    ...layout.propNames,
    "as",
]

const Flex = styled("div", {
    shouldForwardProp: prop => propNames.indexOf(prop) === -1,
})(space, flexbox, layout)

Flex.defaultProps = {
    display: "flex",
}

export default Flex