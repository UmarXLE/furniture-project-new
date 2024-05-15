"use client"
import ProductCard from '@/ui/ProductCard';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LightBox from '@/ui/LightBox';

const Footer = () => {
    return (
        <Container id="footer">
            <div className='footer-item'>
                <span>
                    TOO "Kapitik Art Studio"
                </span>
            </div>
            <div className='footer-item'>
                <div className='footer-item-card'>
                    <Link target='_blank' href="https://wa.me/+7 778 484 41 90">
                        <Image
                            src={"/assets/icons/whatsapp.png"}
                            width={15}
                            height={15}
                            alt="whatsapp icon"
                        />
                    </Link>
                    <Link href="tel:+7 778 484 41 90">
                        <Image
                            src={"/assets/icons/phone.png"}
                            width={15}
                            height={15}
                            alt="phone icon"
                        />
                        <p>+7 778 484 41 90 - Алмата</p>
                    </Link>
                </div>
                <div className='footer-item-card'>
                    <Link target='_blank' href="https://wa.me/+7 700 111 40 24">
                        <Image
                            src={"/assets/icons/whatsapp.png"}
                            width={15}
                            height={15}
                            alt="whatsapp icon"
                        />
                    </Link>
                    <Link href="tel:+7 700 111 40 24">
                        <Image
                            src={"/assets/icons/phone.png"}
                            width={15}
                            height={15}
                            alt="phone icon"
                        />
                        <p>+7 700 111 40 24 - Астана</p>
                    </Link>
                </div>
                <div className='footer-item-card'>
                    <Link  target='_blank' href="https://wa.me/+996555585961">
                        <Image
                            src={"/assets/icons/whatsapp.png"}
                            width={15}
                            height={15}
                            alt="whatsapp icon"
                        />
                    </Link>
                    <Link href="tel:+996555585961">
                        <Image
                            src={"/assets/icons/phone.png"}
                            width={15}
                            height={15}
                            alt="phone icon"
                        />
                        <p>+996 555 585 961 - Бишкек</p>
                    </Link>
                </div>
            </div>
            <div className='footer-item'>
                <div className='footer-item-card'>
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
            <div className='footer-item'>
                <LightBox
                    width={100}
                    height={100}
                    data={{
                    id: 2,
                    img: "/assets/icons/inst-q.png",
                    additional: [
                        {
                            id: 1,
                            src: "/assets/icons/inst-q.png"
                        }
                    ]
                }}/>
            </div>
        </Container>
    );
};

export default Footer;

const Container = styled("footer")`
    padding: 20px 30px;
    background: var(--bg);
    border-radius: 10px 10px 0 0;
    color:var(--white);
    display: grid;
    grid-template-columns: 20% 30% 30% 20%;
    grid-auto-rows: auto;
    justify-content: space-between;
    gap:20px;
    width: 100%;

    .footer-item {
        display:flex;
        flex-direction:column;
        gap:15px;
    }

    .footer-item-card {
        display:flex;
        align-items: center;
        gap:10px;
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


    @media screen and (max-width:992px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width:767px) {
        grid-template-columns: 1fr;
    }
`
