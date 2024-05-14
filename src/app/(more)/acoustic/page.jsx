"use client"
import Colors from '@/components/colors/Colors';
import Example from '@/components/example/Example';
import Models from '@/components/models/Models';
import Title from '@/ui/Title';
import styled from '@emotion/styled';
import React from 'react';
import { colorsAcousticData , exampleAcousticData , modelsAcousticData} from "@/localData/acoustic"
import Description from '@/components/aditional/Description';

const BambooPage = () => {
    return (
        <Container>
            <Title title="Акустические панели" />
            <Description text="Изделия абсолютно не токсичны, при производстве используется сырье бамбук и эко-клей PUR, не впитывают влагу. Возможно использовать при температуре от-40 до + 50. Класс горения В1."/>
            <Models data={modelsAcousticData}  />
            <Colors data={colorsAcousticData} />
            <Example data={exampleAcousticData}/>
        </Container>
    );
};

export default BambooPage;

const Container = styled("main")`
`