"use client"
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { scrollToUp } from '@/utils/scroll';

const Anchor = () => {
    const [isVisibility, setIsVisibility] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisibility(true)
            } else {
                setIsVisibility(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            {
                isVisibility &&
                <AnchorStyled onClick={scrollToUp}>
                    <div className='bg'></div>
                </AnchorStyled>
            }
        </>
    );
};

export default Anchor;

const AnchorStyled = styled("div")`
    width: 40px;
    height: 40px;
    display:flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px -2px 21px -7px rgba(107,100,100,0.75);
    -webkit-box-shadow: 1px -2px 21px -7px rgba(107,100,100,0.75);
    -moz-box-shadow: 1px -2px 21px -7px rgba(107,100,100,0.75);
    border-radius: 10px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 110;
    cursor: pointer;
    transition: 0.5s ease all;
    background: white;

    .bg {
        background: url("/assets/icons/top-black.png");
        background-repeat: no-repeat;
        background-size: cover;
        width: 30px;
        height: 30px;
        display:inline-block;
        z-index: 111;
    }

    &:hover{
        transition: 0.5s ease all;
        background: var(--green);

        .bg {
            background: url("/assets/icons/top-white.png");
            background-repeat: no-repeat;
            background-size: cover;
            width: 30px;
            height: 30px;
            display:inline-block;
            z-index: 111;
        }
    }
`