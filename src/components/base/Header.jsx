"use client"
import Button from '@/ui/Button';
import { handleDownloadCatalog } from '@/utils/download';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <Container>
            <div className='logo'>
                <Image
                    src="/assets/icons/logo.png"
                    width={100}
                    height={100}
                    alt="logo icon"
                />
            </div>
            <div className='download-button'>
                <Button onClick={() => handleDownloadCatalog("/assets/files/catalog-1.pdf", 'catalog.pdf')}>Скачать каталог</Button>
            </div>
        </Container>
    );
};

export default Header;

const Container = styled("header")  `
    background: var(--bg);
    padding: 0 30px;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:var(--white)
`