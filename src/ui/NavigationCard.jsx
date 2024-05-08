"use client"
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const NavigationCard = ({ item }) => {
    return (
        <NavigationCardStyled href={`/${item?.link}`} data-aos={item?.link === "bamboo" ? "fade-right" : "fade-left"} data-aos-duration="1000" data-aos-once="false">
            <div className='wrapper-images'>
                <Image
                    src={item?.img}
                    width={300}
                    height={300}
                    layout='responsive'
                    alt='Панели'
                    className='img'
                />
            </div>
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
    max-width: 400px;
    width: 100%;
    
    & h1 {
        font-size: 32px;
        font-weight: 300;
        padding-top:10px;
    }

    .wrapper-images {
        overflow: hidden;
        position: relative;
        border-radius: 10px;
    }

    & img {
        transition: transform 0.3s ease;
    }

    & img:hover {
        transform: scale(1.1);
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