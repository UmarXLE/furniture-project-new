"use client"
import ProductCard from '@/ui/ProductCard';
import styled from '@emotion/styled';
import React from 'react';

const Example = ({ data }) => {
    return (
        <Container id="example">
            <h1 className='title'>Примеры</h1>
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

export default Example;


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
`

