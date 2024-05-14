"use client"
import styled from '@emotion/styled';
import React from 'react';

const Description = ({text}) => {
    return (
        <DescriptionStyled data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">
            {text}
        </DescriptionStyled>
    );
};

export default Description;

const DescriptionStyled = styled("p")`
    font-size: 16px;
    color: var(--black);
    font-weight: 400;
    line-height: 150%;
`
