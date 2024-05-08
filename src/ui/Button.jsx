import styled from '@emotion/styled';
import React from 'react';

const Button = ({children , name , onClick}) => {
    return (
        <ButtonStyled onClick={onClick}>
            {children}
        </ButtonStyled>
    );
};

export default Button;

const ButtonStyled = styled("button")`
    background: transparent;
    border-radius: 5px;
    color:var(--white);
    padding: 15px 25px;
    border: 2px solid #cccccc;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    transition: 0.25s ease all;

    & a {
        text-decoration: none;
        color:var(--white);
        font-weight: 500;
        font-size: 16px;
    }

    &:hover {
        transition: 0.25s ease all;
        background: #d1cece;
        border: 2px solid #d1cece;
        color:var(--green);

        & a {
            color:var(--green)
        }
    }
`