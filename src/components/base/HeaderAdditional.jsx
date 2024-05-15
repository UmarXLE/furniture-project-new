"use client"
import Button from '@/ui/Button';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { scrollTo } from '@/utils/scroll';
import Link from 'next/link';
import MenuDrawer from '../navigation/MenuDrawer';
import {useSearchParams } from 'next/navigation';

const HeaderAdditional = () => {
    const params = useSearchParams()
    console.log(params);
    return (
        <Container data-aos="fade-down" data-aos-duration="1000" data-aos-once="false">
            <div className='logo'>
                <Link href="/">
                    <Image
                        src="/assets/icons/logo.png"
                        width={100}
                        height={100}
                        alt="logo icon"
                    />
                </Link>
            </div>
            <nav className='navigation'>
                <Link href={"/"}>На главную</Link>
                <span onClick={() => scrollTo('model')}>Модели</span>
                <span onClick={() => scrollTo('color')}>Цвета</span>
                <span onClick={() => scrollTo('example')}>Примеры</span>
                <span onClick={() => scrollTo('footer')}>Контакты</span>
            </nav>
            <div className='download-button'>
                <Button>
                    <a href="/assets/files/catalog-1.pdf" download>Скачать каталог</a>
                </Button>
            </div>
            <div className='menu'>
                <MenuDrawer />
            </div>
        </Container>
    );
};

export default HeaderAdditional;

const Container = styled("header")`
    width: 80%;
    margin: 0 auto;
    position: fixed;
    max-width: 1400px;
    z-index: 100;
    top:0;
    left:0;
    right:0;
    background: var(--bg);
    padding: 0 30px;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    .navigation {
        display:flex;
        align-items: center;
        gap:30px;

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

    .menu {
        display:none;
    }


    @media screen and (max-width:992px) {
        .navigation {
            display:none;
        }
        .download-button {
            display:none;
        }
        .menu{
            display:block;
        }
    }

    @media screen and (max-width:576px) {
        width: 90%;
    }
`