"use client"
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <Container id="footer">
            <div className='footer-item'>
                <span>
                    TOO "Kapitik Art Studio"
                </span>
            </div>
            <div className='footer-item'>
                <Link href="tel:+787784844190">
                    <Image
                        src={"/assets/icons/phone.png"}
                        width={15}
                        height={15}
                        alt="phone icon"
                    />
                    <p>+7 87784844190 - Алмата</p>
                </Link>
                <Link href="tel:+787001114024">
                     <Image
                        src={"/assets/icons/phone.png"}
                        width={15}
                        height={15}
                        alt="phone icon"
                    />
                    <p>+7 87001114024 - Астана</p>
                </Link>
            </div>
            <div className='footer-item'>
                <Link href="tel:+996555585961">
                    <Image
                        src={"/assets/icons/phone.png"}
                        width={15}
                        height={15}
                        alt="phone icon"
                    />
                    <p>+996 555 585 961 - Бишкек</p>
                </Link>
                <Link href="mailto:weasellux@gmail.com">
                <Image
                        src={"/assets/icons/email.png"}
                        width={17}
                        height={17}
                        alt="phone icon"
                    />
                    <p>weasellux@gmail.com</p>
                </Link>
            </div>
            <div className='footer-item'>
                <Link target='_blank' href="https://www.instagram.com/kapitik_art.kz?igsh=cGJsMmo5aXZvcGtk">
                <Image
                        src={"/assets/icons/instagram.png"}
                        width={15}
                        height={15}
                        alt="phone icon"
                    />
                    <p>kapitik_art.kz</p>
                </Link>
            </div>
        </Container>
    );
};

export default Footer;

const Container = styled("footer")`
    padding: 40px 30px;
    background: var(--bg);
    border-radius: 10px 10px 0 0;
    color:var(--white);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: auto;
    gap:20px;
    width: 100%;

    .footer-item {
        display:flex;
        flex-direction:column;
        gap:15px;
    }

    .footer-item a , span {
        text-decoration: none;
        color:var(--white);
        font-size: 16px;
        font-weight: 500;
        display:flex;
        align-items: center;
        gap:5px;
    }
`
