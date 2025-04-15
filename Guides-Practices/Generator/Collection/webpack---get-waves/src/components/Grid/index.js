import styled from "@emotion/styled"
import {
    space,
    grid,
    layout,
    alignItems
} from "styled-system"

const propNames = [
    ...space.propNames,
    ...grid.propNames,
    ...layout.propNames,
    ...alignItems.propNames,
    "as",
]

const Grid = styled("div", {
    shouldForwardProp: prop => propNames.indexOf(prop) === -1,
})(space, grid, layout, alignItems)

Grid.defaultProps = {
    display: "grid",
    gridTemplateColumns: "repeat(6, minmax(0,1fr))",
    gridColumnGap: "1.25rem",
}

export default Grid