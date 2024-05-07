"use client"
import styled from '@emotion/styled';
import React from 'react';

const Title = ({ title, width }) => {
    return (
        <Container
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true">
            <TextContainer>
                <h1>{title}</h1>
            </TextContainer>
        </Container>
    );
};

export default Title;

const Container = styled("article")``


const TextContainer = styled("div")`
    color: var(--black);
    padding: 10px 0;
    border-radius: 10px;
    background-color: none;
    z-index: 1;
    transition: background-color 0.3s ease; /* добавляем анимацию цвета фона текста */
  
    & h1 {
        /* text-transform: uppercase; */
        font-weight: 400;
        font-size: 32px;
    }

    @media screen and (max-width:1200px) {
        & h1 {
            font-size: 30px;
            font-weight: 400;
        }
    }

    @media screen and (max-width:767px) {
        & h1 {
            font-size: 25px;
            font-weight: 400;
        }
    }

    @media screen and (max-width:576px) {
        & h1 {
            font-size: 25px;
            font-weight: 400;
        }
    }


`
