import { useTheme } from 'emotion-theming'

import styledSystemCss from '@styled-system/css'
import { Global, css } from '@emotion/core'

function CssFontFaces() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Lato';
          src: url('/fonts/Lato-Light.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Lato';
          src: url('/fonts/Lato-Light.woff') format('woff');
          font-weight: normal;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: 'Lato';
          src: url('/fonts/Lato-Light.woff') format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
      `}
    />
  )
}

function CssReset() {
  return (
    <Global
      styles={css`
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }
        a {
          text-decoration: inherit;
          color: inherit;
          cursor: pointer;
        }
        hr {
          margin: 0;
        }
        ul {
          margin: 0;
        }
      `}
    />
  )
}

function CssBase() {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        body {
          ${styledSystemCss({
            backgroundColor: 'background',
            color: 'text',
            fontFamily: 'body',
            fontSize: 2,
            overflowX: 'hidden',
            padding: '0px',
            margin: '0px',
          })({ theme })}
        }
        p {
          line-height: 1.25;
        }
      `}
    />
  )
}

export function GlobalStyles() {
  return (
    <React.Fragment>
      <CssFontFaces />
      <CssReset />
      <CssBase />
    </React.Fragment>
  )
}