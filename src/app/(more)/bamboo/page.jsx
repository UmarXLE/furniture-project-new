"use client"
import React from 'react';
import styled from '@emotion/styled';
import {bambooModelsData , bambooExampleData ,bambooColorData} from "@/localData/bamboo"
import Title from '@/ui/Title';
import Models from '@/components/models/Models';
import Colors from '@/components/colors/Colors';
import Example from '@/components/example/Example';

const BambooPage = () => {
    return (
        <Container>
            <Title title="Бамбуковые панели" />
            <Models data={bambooModelsData}  />
            <Colors data={bambooColorData} />
            <Example data={bambooExampleData}/>
        </Container>
    );
};

export default BambooPage;

const Container = styled("main")`
`