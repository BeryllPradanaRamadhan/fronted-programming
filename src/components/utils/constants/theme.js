import { css } from "styled-components";

const theme = {
    color: {
        primary: "#4361ee",
        secondary: "#b179e",

    },

    size: {
        sm: css`
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        `,
        md: css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
        `,
        lg: css`
        font-size: 1.3rem;
        padding: 0,5rem 1rem;
        `
    } 
};



export default theme;