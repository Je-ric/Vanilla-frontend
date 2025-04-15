import React, {
    useState
} from "react"
import styled from "@emotion/styled"
import {
    color,
    space,
    borderRadius,
    width,
    flex
} from "styled-system"
import addToMailchimp from "gatsby-plugin-mailchimp"

import Box from "../Box"
import Button from "../Button"
import Flex from "../Flex"

const Input = styled("input")
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
  ${width}
  ${flex}
  &:focus {
    border-color: #0099FF;
    box-shadow: 0 0 0 0.25rem #c4e7ff;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const NewsletterForm = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [hasError, setError] = useState(false)

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addToMailchimp(email, {
                "group[4611][1]": "1"
            })
            .then(({
                msg,
                result
            }) => {
                console.log("msg", `${result}: ${msg}`)
                if (result !== "success") {
                    throw msg
                } else {
                    setError(false)
                    setMessage(msg)
                    console.log(msg)
                }
            })
            .catch((err) => {
                setError(true)
                setMessage(err)
                console.error(err)
            })
    }

    const handleChange = (evt) => {
        setEmail(evt.target.value)
    }

    return ( <
        >
        <
        form onSubmit = {
            handleSubmit
        } >
        <
        Box flex = "1 1 auto"
        mt = "0.75rem" >
        <
        Input flex = "auto"
        borderRadius = "0.5rem"
        px = "1rem"
        aria - label = "Email address"
        type = "email"
        placeholder = "your email"
        name = "email"
        id = "email"
        required onChange = {
            handleChange
        }
        /> <
        /Box> {
            message &&
                <
                Box
            width = "100%"
            p = "0.75rem"
            mt = "0.5rem"
            display = {
                message ? "block" : "none"
            }
            bg = {
                hasError ? "#ffd4d9" : "#d2ffe4"
            }
            color = {
                hasError ? "#7b000c" : "#007b31"
            }
            borderRadius = "md"
            dangerouslySetInnerHTML = {
                {
                    __html: message
                }
            }
            />
        } <
        Box flex = {
            ["none"]
        }
        width = {
            ["100%", null, "100%"]
        }
        mt = "0.5rem" >
        <
        Button type = "submit"
        variant = "primary"
        width = "100%" > {
            "Subscribe"
        } <
        /Button> <
        /Box> <
        Box pt = "0.75rem"
        width = "100%" >
        <
        Flex as = "label"
        alignItems = "center" >
        <
        input type = "checkbox"
        name = "gdpr-confirmation"
        required / >
        <
        span style = {
            {
                paddingLeft: "0.5rem",
                lineHeight: 1.25
            }
        } > {
            "Send me updates about z creative labs products"
        } <
        /span> <
        /Flex> <
        /Box> <
        /form> <
        />

    )
}

export default NewsletterForm