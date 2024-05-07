"use client"
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const MenuContent = ({close}) => {
    return (
        <Container>
            <div className='wrapper-logo'>
                <Image
                    src={"/assets/icons/logo.png"}
                    width={100}
                    height={100}
                    alt="logo icon"
                />
            </div>
            <nav className='navigation'>
                <Link href="/">На главную</Link>
                <span onClick={() => scrollTo('model')}>Модели</span>
                <span onClick={() => scrollTo('color')}>Цвета</span>
                <span onClick={() => scrollTo('example')}>Примеры</span>
            </nav>

            <div className='wrapper-close' onClick={close}>
                <Image
                    src={"/assets/icons/close.png"}
                    width={20}
                    height={20}
                    alt="close icon"
                />
            </div>
        </Container>
    );
};

export default MenuContent;

const Container = styled("div")`
    background: var(--green);
    height: 100vh;
    padding: 30px 20px;
    position: relative;
    width:200px;
    .navigation {
        display:flex;
        flex-direction: column;
        gap:30px;
        margin-top: 30px;

        & span , & a {
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            border-bottom: 2px solid var(--green);
            color:var(--white);
            text-decoration: none;
            &:hover {
                transition: 0.25s ease all;
                border-bottom: 2px solid var(--white);
            }
        }
    }

    .wrapper-close {
        position: absolute;
        top:10px;
        right:10px;
        cursor: pointer;
        z-index: 100;
    }
`