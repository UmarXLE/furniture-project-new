"use client"
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const NavigationCard = ({item}) => {
    return (
        <NavigationCardStyled href={`/${item?.link}`}>
            <Image
                src={item?.img}
                width={300}
                height={300}
                layout='responsive'
                alt='Панели'
                className='img'
            />
            <h1>{item?.title}</h1>
        </NavigationCardStyled>
    );
};

export default NavigationCard;

const NavigationCardStyled = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color:var(--black);
    transition: 0.25s ease all;
    
    & h1 {
        font-size: 32px;
        font-weight: 300;
        padding-top:10px;
    }

    &:hover {
        & img {
            transition: 0.25s ease all;
            transform:scale(1.1)
        }
    }
`