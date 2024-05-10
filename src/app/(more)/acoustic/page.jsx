"use client"
import Colors from '@/components/colors/Colors';
import Example from '@/components/example/Example';
import Models from '@/components/models/Models';
import Title from '@/ui/Title';
import styled from '@emotion/styled';
import React from 'react';
import { colorsAcousticData , exampleAcousticData , modelsAcousticData} from "@/localData/acoustic"

const BambooPage = () => {
    return (
        <Container>
            <Title title="Акустические панели" />
            <Models data={modelsAcousticData}  />
            <Colors data={colorsAcousticData} />
            <Example data={exampleAcousticData}/>
        </Container>
    );
};

export default BambooPage;

const Container = styled("main")`
`