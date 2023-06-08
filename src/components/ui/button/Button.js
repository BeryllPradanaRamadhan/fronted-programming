import styled, { css } from "styled-components";

const colors = {
    primary: "blue",
    secondary: "red",
}

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: blue;
    cursor: pointer;

/* tangkap props variant */
background-color: ${function (props) {
    if (props.variant) {
        return colors[props.variant];
     } else {
        return colors["primary"];
    }
}};

size: ${function (props) {
    if (props.size) {
        return props.theme.size[props.size];
     } else {
        return props.theme.size["md"];
    }
}};

// props full
${(props) => props.full && css`
    display: block;
    width: 100%;
`}
`





export default Button;