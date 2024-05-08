"use client"
import styled from '@emotion/styled';
import React from 'react';
import { navigationHomeData } from '@/localData/main';
import NavigationCard from '@/ui/NavigationCard';

const Navigation = () => {
    return (
        <Container>
            {
                navigationHomeData?.map(item => (
                    <NavigationCard key={item?.key} item={item} />
                ))
            }
        </Container>
    );
};

export default Navigation;

const Container = styled("section")`
    display:flex;
    /* justify-content: space-around; */
    justify-content: center;
    align-items: center;
    gap: 50px;


    @media screen and (max-width:767px) {
        flex-direction: column;
        padding: 50px 0;
    }
`