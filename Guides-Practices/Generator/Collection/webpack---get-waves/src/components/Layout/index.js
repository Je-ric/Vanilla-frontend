import React from "react"
import {
    ThemeProvider,
    Global,
    css
} from "@emotion/react"
import Helmet from "react-helmet"

import gtWalsheimRegularWoff from "../../fonts/GT-Walsheim-Regular.woff"
import gtWalsheimRegularWoff2 from "../../fonts/GT-Walsheim-Regular.woff2"
import gtWalsheimBoldWoff from "../../fonts/GT-Walsheim-Bold.woff"
import gtWalsheimBoldWoff2 from "../../fonts/GT-Walsheim-Bold.woff2"

import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter"
import Flex from "../Flex"

import getWavesCover from "../../images/getwaves-cover.jpg"

const theme = {
    colors: {
        white: "#FFF",
        primary: "#0099FF",
        grey: {
            "700": "#5e6e78",
            "800": "#374046",
            "900": "#273036",
        },
    },
    buttons: {
        default: {
            background: "transparent",
            border: "none",
            color: "inherit",
            ":hover,:focus": {
                background: "rgba(39, 48, 54, 0.1)",
                border: "none",
                color: "inherit",
            },
            ":active": {
                background: "rgba(39, 48, 54, 0.2)",
                border: "none",
                color: "inherit",
            },
        },
        primary: {
            background: "#0099FF",
            color: "#FFF",
            transition: "all 200ms ease",
            ":hover": {
                background: "#008ae6",
                color: "#FFF",
                border: "none",
            },
            ":focus": {
                background: "#008ae6",
                color: "#FFF",
                boxShadow: "0 0 0 0.25rem #c4e7ff",
                border: "none",
            },
            ":active": {
                background: "#0099FF",
            },
        },
        subtle: {
            background: "rgba(39, 48, 54, 0.05)",
            transition: "all 200ms ease",
            ":hover": {
                background: "rgba(39, 48, 54, 0.1)",
                border: "none",
            },
            ":focus": {
                background: "rgba(39, 48, 54, 0.1)",
                boxShadow: "0 0 0 0.25rem rgba(39, 48, 54, 0.15)",
                border: "none",
            },
            ":active": {
                background: "rgba(39, 48, 54, 0.15)",
            },
        },
        randomize: {
            background: "#0099FF",
            color: "#FFF",
            transition: "all 200ms ease",
            "svg": {
                transition: "all 750ms ease",
            },
            ":hover": {
                background: "#008ae6",
                transform: "scale(1.1)",
            },
            ":focus": {
                background: "#008ae6",
                boxShadow: "0 0 0 0.25rem #c4e7ff",
            },
            ":active": {
                background: "#0099FF",
                transform: "scale(1)",
                "svg": {
                    transform: "rotate(540deg)",
                }
            },
        },
        fab: {
            background: "#FFF",
            color: "#0099FF",
            boxShadow: "0 0.5rem 1.25rem 0 rgba(39, 48, 54, 0.2)",
            transition: "all 140ms ease",
            ":hover": {
                background: "#FFF",
                color: "#0099FF",
                boxShadow: "0 1rem 2.5rem 0 rgba(39, 48, 54, 0.25)",
                transform: "translateY(-0.125rem)",
            },
            ":focus": {
                background: "#FFF",
                color: "#0099FF",
                boxShadow: "0 1rem 2.5rem 0 rgba(39, 48, 54, 0.25)",
                transform: "translateY(-0.125rem)",
            },
            ":active": {
                background: "#0099FF",
                color: "#FFF",
                transform: "translateY(0)",
            },
        }
    },
    fontSizes: {
        xxl: "4rem",
        xl: "3rem",
        lg: "2rem",
        md: "1.5rem",
        sm: "1rem",
        xs: "0.875rem",
    },
    lineHeights: {
        default: 1.5,
        dense: 1.25,
        heading: 1.15,
    },
    radii: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
    },
    shadows: {
        sm: "0 0.5rem 0.75rem -0.25rem rgba(39, 48, 54, 0.05)",
    }
}

const globalStyles = theme => css `
  @font-face {
    font-family: "GTWalsheim";
    src: url(${gtWalsheimRegularWoff2}) format("woff2"),
        url(${gtWalsheimRegularWoff}) format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "GTWalsheim";
    src: url(${gtWalsheimBoldWoff2}) format("woff2"),
        url(${gtWalsheimBoldWoff}) format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  html {
    box-sizing: border-box;
    font-family: "GTWalsheim", system-ui, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    background: #F3F4F5;
    color: #273036;
    height: 100%;
  }
  img, svg {
    display: inline-block;
    vertical-align: middle;
  }
  code {
    font-family: "IBM Plex Mono", Menlo, mono;
    font-size: 1rem;
    line-height: 1.5;
    display: block;
    max-width: 100%;
    overflow: scroll;
    position: relative;
    padding: 1.5rem 2.5rem 1.5rem 1.5rem;
  }
  .code-container {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 25%;
      pointer-events: none;
      background: rgb(23,32,38);
      background: linear-gradient(90deg, rgba(23,32,38,0) 0%, rgba(23,32,38,1) 90%);
    }
  }
  a {
    position: relative;
    color: inherit;
    text-decoration: none;
  }
  .standalone {
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      top: 100%;
      left: 0;
      height: 0.0625rem;
      background: currentcolor;
    }
    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
    &:hover::after,
    &:focus::after {
      height: 0.125rem;
      background: ${theme.colors.primary};
    }
  }
  #wave-container path {
    transition: all 250ms ease;
  }
  ::-moz-selection {
    background: #0099ff;
    color: #FFF;
  }
  ::selection {
    background: #0099ff;
    color: #FFF;
  }
  @keyframes haikeiBannerAnimation {
    from { transform: translateY(-100%); }
    to   { transform: translateY(0%);    }
  }
`

const meta = {
    title: "Get Waves – Create SVG waves for your next design",
    url: "https://www.getwaves.io",
    description: "A free SVG wave generator to make unique SVG waves for your next web design. Choose a curve, adjust complexity, randomize!",
    img: "https://www.getwaves.io" + getWavesCover,
}

const Layout = ({
    children
}) => {
    return ( <
        >
        <
        ThemeProvider theme = {
            theme
        } >
        <
        >
        <
        Helmet >
        <
        title > {
            meta.title
        } < /title> <
        meta name = "title"
        content = {
            meta.title
        }
        /> <
        meta name = "description"
        content = {
            meta.description
        }
        /> <
        meta name = "google-site-verification"
        content = "vwa6m6BananSC1j0gXSiNUJ-TCL3tvCIukr5t-XJiyA" / >

        <
        meta property = "og:type"
        content = "website" / >
        <
        meta property = "og:url"
        content = {
            meta.url
        }
        /> <
        meta property = "og:title"
        content = {
            meta.title
        }
        /> <
        meta property = "og:description"
        content = {
            meta.description
        }
        /> <
        meta property = "og:image"
        content = {
            meta.img
        }
        />

        <
        meta property = "twitter:card"
        content = "summary_large_image" / >
        <
        meta property = "twitter:url"
        content = {
            meta.url
        }
        /> <
        meta property = "twitter:title"
        content = {
            meta.title
        }
        /> <
        meta property = "twitter:description"
        content = {
            meta.description
        }
        /> <
        meta property = "twitter:image"
        content = {
            meta.img
        }
        />

        <
        link rel = "canonical"
        href = {
            meta.url
        }
        /> <
        link href = "https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap"
        rel = "stylesheet" > < /link> <
        /Helmet> <
        SiteHeader / >
        <
        Global styles = {
            globalStyles
        }
        /> <
        Flex flexDirection = "column"
        justifyContent = "space-between"
        height = "calc(100% - 10rem)" >
        {
            children
        } <
        /Flex> <
        SiteFooter / >
        <
        /> <
        /ThemeProvider> <
        script async defer src = "https://cdn.simpleanalytics.io/hello.js" > < /script>  <
        noscript > < img src = "https://api.simpleanalytics.io/hello.gif"
        alt = "" / > < /noscript> <
        />
    )
}

export default Layout