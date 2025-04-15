import styled from "@emotion/styled"

const Range = styled("input")
`
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    animate: 0.2s;
    background: #F3F4F5;
    border-radius: 99rem;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 100%;
    background: #0099FF;
    box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.1);
    cursor: pointer;
    margin-top: -0.5rem;
    transition: all 100ms ease;
  }
  &:focus::-webkit-slider-thumb {
    transform: scale(1.1);
    box-shadow: 0 0 0 0.25rem rgb(0,153,255,0.3),
                0 0.125rem 0.5rem rgba(0,0,0,0.1);
  }
  &::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    animate: 0.2s;
    background: #F3F4F5;
    border-radius: 99rem;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 100%;
    background: #0099FF;
    box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.1);
    cursor: pointer;
    margin-top: -0.5rem;
    transition: all 100ms ease;
  }
  &:focus::-moz-range-thumb {
    transform: scale(1.1);
    box-shadow: 0 0 0 0.25rem rgb(0,153,255,0.3),
                0 0.125rem 0.5rem rgba(0,0,0,0.1);
  }
  &::-ms-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 1rem 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    width: 100%;
    cursor: pointer;
    animate: 0.2s;
    background: #F3F4F5;
    border-radius: 99rem;
  }
  &::-ms-fill-upper {
    width: 100%;
    cursor: pointer;
    animate: 0.2s;
    background: #F3F4F5;
    border-radius: 99rem;
  }
  &::-ms-thumb {
    -webkit-appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 100%;
    background: #0099FF;
    box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.1);
    cursor: pointer;
    margin-top: -0.5rem;
    transition: all 100ms ease;
  }
  &:focus::-ms-thumb {
    transform: scale(1.1);
    box-shadow: 0 0 0 0.25rem rgb(0,153,255,0.3),
                0 0.125rem 0.5rem rgba(0,0,0,0.1);
  }
`

export default Range