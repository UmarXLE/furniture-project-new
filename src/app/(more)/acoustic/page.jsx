"use client"
import Colors from '@/components/colors/Colors';
import Example from '@/components/example/Example';
import Models from '@/components/models/Models';
import Title from '@/ui/Title';
import styled from '@emotion/styled';
import React from 'react';
import {bambooModelsData , bambooExampleData ,bambooColorData} from "@/localData/bamboo"

const BambooPage = () => {
    return (
        <Container>
            <Title title="Акустические панели" />
            <Models data={bambooModelsData}  />
            <Colors data={bambooColorData} />
            <Example data={bambooExampleData}/>
        </Container>
    );
};

export default BambooPage;

const Container = styled("main")`
`