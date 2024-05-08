"use client"
import ProductCard from '@/ui/ProductCard';
import styled from '@emotion/styled';
import React from 'react';

const Colors = ({ data }) => {
    return (
        <Container id="color">
            <h1 className='title'>Цвета</h1>
            <div className='container-models'>
                {
                    data?.map((item, index) => (
                        <ProductCard key={index} data={item} />
                    ))
                }
            </div>
        </Container>
    );
};

export default Colors;


const Container = styled("section")`
    width:100%;
    padding: 50px 0;
    .title {
        margin-bottom: 30px;
        font-size: 28px;
        font-weight:400;
    }

    .container-models {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-auto-rows: auto;
        gap:20px;
    }


    @media screen and (max-width:1200px) {
        .title  {
            font-size: 26px;
            font-weight: 400;
        }
    }

    @media screen and (max-width:767px) {
        .title  {
            font-size: 24px;
            font-weight: 400;
        }
    }

    @media screen and (max-width:576px) {
        .title  {
            font-size: 23px;
            font-weight: 400;
        }
    }
`

