"use client"
import React from 'react';
import styled from '@emotion/styled';
import {bambooModelsData , bambooExampleData ,bambooColorData} from "@/localData/bamboo"
import Title from '@/ui/Title';
import Models from '@/components/models/Models';
import Colors from '@/components/colors/Colors';
import Example from '@/components/example/Example';
import Description from '@/components/aditional/Description';

const BambooPage = () => {
    return (
        <Container>
            <Title title="Бамбуковые панели" />
            <Description text="Изделия абсолютно не токсичны, при производстве используется сырье бамбук и эко-клей PUR, не впитывают влагу. Возможно использовать при температуре от-40 до + 50. Класс горения В1."/>
            <Models data={bambooModelsData}  />
            <Colors data={bambooColorData} />
            <Example data={bambooExampleData}/>
        </Container>
    );
};

export default BambooPage;

const Container = styled("main")`
`