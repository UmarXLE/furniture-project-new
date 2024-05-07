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
                    <NavigationCard key={item?.id} item={item}/>
                ))
            }
        </Container>
    );
};

export default Navigation;

const Container = styled("section")`
    display:flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
`