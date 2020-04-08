import { createGlobalStyle } from "styled-components";
import { color } from "../variables/colors";
import { breakpoint } from "../variables/breakpoints";

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1em;
  }
  body,
  html {
    text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  span,
  strong {
    color: ${color.text};
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${color.text};
  }
  h1 {
    font-size: 3rem;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 3.4rem;
    }
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 3.8rem;
    }
  }
  h2 {
    font-size: 2.2rem;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 3.4rem;
    }
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 3.8rem;
    }
  }
  h3 {
    font-size: 2rem;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 2.6rem;
    }
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 3rem;
    }
  }
  h4 {
    font-size: 1.8rem;
    font-weight: 900;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 2.2rem;
    }
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 2.5rem;
    }
  }
  h5 {
    font-size: 1.6rem;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 2rem;
    }
  }
  h6 {
    font-size: 1.6rem;
    font-weight: 900;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 1.9rem;
    }
  }
  p, textarea, a, span {
    font-size: 1.4rem;
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 1.6rem;
    }
  }

  input {
    font-size: 1.4rem;
  }
  a {
    text-decoration: none;
  }

  blockquote {
    margin: 0;
    font-size: 1.6rem;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 1.8rem;
    }
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 2rem;
    }
  }
  cite {
    font-size: 1rem;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: 1.2rem;
    }
    @media (min-width: ${breakpoint.desktop}) {
      font-size: 1.4rem;
    }
  }
`;
