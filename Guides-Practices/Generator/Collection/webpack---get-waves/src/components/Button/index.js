import styled from "@emotion/styled"
import {
    buttonStyle,
    color,
    typography,
    space,
    borderRadius,
    width,
    height,
    system,
} from "styled-system"

const allNames = [
    ...buttonStyle.propNames,
    ...color.propNames,
    ...typography.propNames,
    ...space.propNames,
    ...borderRadius.propNames,
    ...width.propNames,
    ...height.propNames,
    "size",
    "as",
]

const buttonSize = system({
    size: {
        property: "height",
        scale: "buttonSizes",
        defaultScale: {
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
        },
    },
})

const buttonPadding = system({
    size: {
        properties: ["paddingLeft", "paddingRight"],
        scale: "buttonPaddings",
        defaultScale: {
            sm: "0.75rem",
            md: "1.25rem",
            lg: "2rem",
        },
    },
})

const checkForProp = allPropNames => prop => {
    return allPropNames.indexOf(prop) === -1
}

const config = {
    shouldForwardProp: checkForProp(allNames)
}

const Button = styled("button", config)
`
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0;
  outline: none;
  cursor: pointer;
  transition: background 200ms ease;
  ${buttonStyle}
  ${buttonSize}
  ${buttonPadding}
  ${typography}
  ${color}
  ${space}
  ${borderRadius}
  ${width}
  ${height}
`

Button.defaultProps = {
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: 600,
    lineHeight: 1.05,
    borderRadius: "md",
    variant: "default",
    size: "md",
}

export default Button