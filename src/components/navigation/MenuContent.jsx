"use client"
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { scrollTo } from '@/utils/scroll';
import Button from '@/ui/Button';

const MenuContent = ({ close }) => {
    return (
        <Container>
            <div className='wrapper-up'>
                <div className='wrapper-logo'>
                    <Link href="/">
                        <Image
                            src={"/assets/icons/logo.png"}
                            width={100}
                            height={100}
                            alt="logo icon"
                        />
                    </Link>
                </div>
                <nav className='navigation'>
                    <Link href={"/"}>На главную</Link>
                    <span onClick={() => {
                        scrollTo('model')
                        close()
                    }}>Модели</span>
                    <span onClick={() => {
                        scrollTo('color')
                        close()
                    }}>Цвета</span>
                    <span onClick={() => {
                        scrollTo('example')
                        close()
                    }}>Примеры</span>
                    <span onClick={() => {
                        scrollTo('footer')
                        close()
                    }}>Контакты</span>
                </nav>
            </div>
            <div className='wrapper-down'>
                <Button>
                    <a href="/assets/files/catalog.pdf" download>Скачать каталог</a>
                </Button>
            </div>

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
    width:220px;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    
    .navigation {
        display:flex;
        flex-direction: column;
        gap:45px;
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
        top:15px;
        right:15px;
        cursor: pointer;
        z-index: 100;
    }
`