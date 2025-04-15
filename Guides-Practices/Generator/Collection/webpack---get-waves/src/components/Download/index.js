import React, {
    useEffect,
    useRef,
    useState
} from "react"
import styled from "@emotion/styled"
import {
    useDialogState,
    Dialog as RKDialog,
    DialogBackdrop,
    DialogDisclosure
} from "reakit/Dialog"

import Box from "../Box"
import Button from "../Button"
import Flex from "../Flex"
import {
    DownloadIcon
} from "../Icon"
import Heading from "../Heading"

const Dialog = styled(RKDialog)
`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40rem;
  max-width: 90%;
  background: #FFF;
  z-index: 999999;
  transform: translate(-50%, -50%);
  border-radius: 0.75rem;
  padding: 1.25rem;
  boxShadow: 0 0.75rem 2rem rgba(0,0,0,0.2);
`

const CodePreview = ({
    snippet
}) => {
    return ( <
        Box bg = "#172026"
        color = "#FFFFFF"
        borderRadius = "md"
        overflow = "hidden"
        className = "code-container" >
        <
        code style = {
            {
                whiteSpace: "nowrap"
            }
        } > {
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">`
        } <
        br / >
        &
        nbsp; & nbsp; {
            snippet
        } <
        br / > {
            `</svg>`
        } <
        /code> <
        /Box>
    )
}

const DownloadButton = () => {
    const [downloadUrl, setDownloadUrl] = useState("")
    const [codeSnippet, setCodeSnippet] = useState("")
    const [copied, setCopied] = useState(false)
    const dialog = useDialogState()

    const timer = useRef()

    useEffect(() => {
        if (!dialog.visible) return
        const el = document.getElementById("wave-container")
        const svgTree = `<?xml version="1.0" standalone="no"?>${el.innerHTML}`
        const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgTree)
        setDownloadUrl(url)
        setCodeSnippet(el.getElementsByTagName("svg")[0].innerHTML)
    }, [dialog.visible])

    const handleCopyToClipboard = (evt) => {
        evt.preventDefault()
        const el = document.createElement("textarea")
        el.value = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">' + codeSnippet + '</svg>'
        const tgt = document.getElementById("target-1")
        tgt.appendChild(el)
        el.select()
        document.execCommand("copy")
        tgt.removeChild(el)
        clearTimeout(timer.current)
        setCopied(true)
        timer.current = setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return ( <
        >
        <
        Box position = "absolute"
        top = "100%"
        left = "50%"
        style = {
            {
                transform: "translate(-50%, -50%)"
            }
        } >
        <
        DialogDisclosure { ...dialog
        }
        as = {
            Button
        }
        variant = "fab"
        px = "0"
        width = "4rem"
        height = "4rem"
        size = "lg"
        borderRadius = "100%" >
        <
        DownloadIcon / >
        <
        /DialogDisclosure> <
        /Box> <
        DialogBackdrop { ...dialog
        }
        style = {
            {
                background: "#172026",
                opacity: 0.5,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 888888,
            }
        }
        /> <
        Dialog { ...dialog
        }
        aria - label = "Download"
        style = {
            {
                outline: "none"
            }
        } >
        <
        Heading fontSize = "2.5rem"
        textAlign = "center" > {
            "Download"
        } < /Heading> <
        CodePreview visible = {
            dialog.visible
        }
        snippet = {
            codeSnippet
        }
        /> <
        Flex py = "2.5rem"
        justifyContent = "center" >
        <
        Box pr = "0.5rem" >
        <
        Button as = "a"
        variant = "primary"
        href = {
            downloadUrl
        }
        download = "wave.svg"
        width = "100%" > {
            "Download SVG"
        } <
        /Button> <
        /Box> <
        Box pl = "0.5rem" >
        <
        Button width = "100%"
        variant = "subtle"
        onClick = {
            handleCopyToClipboard
        } > {
            copied && ( <
                svg xmlns = "http://www.w3.org/2000/svg"
                width = "1.25rem"
                height = "1.25rem"
                viewBox = "0 0 24 24"
                fill = "none"
                stroke = "currentColor"
                strokeWidth = "3"
                strokeLinecap = "round"
                strokeLinejoin = "round"
                style = {
                    {
                        width: "1.25rem",
                        heigh: "1.25rem",
                        marginRight: "0.5rem"
                    }
                } >
                <
                path d = "M22 11.08V12a10 10 0 1 1-5.93-9.14" / >
                <
                polyline points = "22 4 12 14.01 9 11.01" / >
                <
                /svg>
            )
        } {
            copied ? "Copied!" : "Copy SVG code"
        } <
        /Button> <
        /Box> <
        /Flex> <
        div id = "target-1" / >
        <
        /Dialog> <
        />
    )
}

export default DownloadButton