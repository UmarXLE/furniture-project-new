"use client"
import ProductCard from '@/ui/ProductCard';
import styled from '@emotion/styled';
import React from 'react';

const Models = ({ data }) => {
    return (
        <Container id="model">
            <h1 data-aos="fade-right" data-aos-duration="1500" data-aos-once="true" className='title'><span>М</span>одели</h1>
            <div className='container-models'>
                {
                    data?.map((item, index) => (
                        <ProductCard key={index} data={item}/>
                    ))
                }
            </div>
        </Container>
    );
};

export default Models;


const Container = styled("section")`
    width:100%;
    padding: 50px 0;
    .title {
        margin-bottom: 30px;
        font-size: 28px;
        font-weight:400;
    }

    & span {
        background: var(--green);
        color:var(--white);
        border-radius: 10px;
        padding: 3px;
    }

    .container-models {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: auto;
        gap:20px;
    }

    @media screen and (max-width:1200px) {
        padding: 30px 0 50px 0;

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
        padding: 20px 0 50px 0;

        .title  {
            font-size: 23px;
            font-weight: 400;
        }
    }
`

