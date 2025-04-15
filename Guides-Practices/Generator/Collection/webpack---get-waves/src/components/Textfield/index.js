import styled from "@emotion/styled"
import {
    borderRadius,
    color,
    space
} from "styled-system"

const Textfield = styled("input")
`
  width: 100%;
  height: 2.5rem;
  font-size: inherit;
  font-family: inherit;
  border: 0.125rem solid;
  border-color: transparent;
  outline: none;
  ${color}
  ${space}
  ${borderRadius}
  &:focus {
    border-color: #0099FF;
    box-shadow: 0 0 0 0.25rem #c4e7ff;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance:textfield;
  }
`

Textfield.defaultProps = {
    bg: "rgba(0,0,0,0.1)",
    color: "currentcolor",
    borderRadius: "md",
    py: 0,
    pl: "1rem",
    pr: "1rem",
}

export default Textfield