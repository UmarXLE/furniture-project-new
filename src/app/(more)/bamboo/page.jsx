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
            <Description title={"TOO <<Kapitik Art Studio>>" } text={" предлагает высококачественные бамбуковые панели и акустические панели - инновация и стиль для декорирования интерьера коммерческих и жилых помещений по ценам заводов-изготовителей Китая."} />
            <Description text={"Преимущества использования WPC панелей в декоре:"} />
            <Description title={"ЦЕНА"} text={"Наше предложение приятно удивит Вас, поскольку конкурирует не только с другими поставщиками данной продукции, но и с альтернативой обоями другими отделочными материалами."} />
            <Description title={"ДИЗАЙН"} text={"Имеются более 300 различных вариантов оттенков цветов и текстур - кожа, дерево, камень, металл, ткань, принт фото, РЕТРО. Множество форм, также различные варианты оформления углов, галтели, плинтуса, стен колонн с радиусом, что позволит воплотить нашим материалом любой дизайн."} />
            <Description title={"ЭКОЛОГИЧНОСТЬ"} text={"Изделия абсолютно не токсичны, при производстве используется сырье бамбук и эко-клей PUR, не впитывают влагу. Возможно использовать при температуре от-40 до + 50. Класс горения В1."}/>
            <Description title={"МОНТАЖ И ЭКСПЛУАТАЦИЯ"} text={"Быстрый и простой монтаж изделий, изделия имеют замочное крепление, что позволяет создать единую композицию, без использования профиля. Изделия обладают легким весом около 4 кгна квадратный метр." } />
            <Description text={"Предлагаемые для Вас изделия обладают долговечностью 25 лет, высокой прочностью и устойчивостью к механическим воздействиям, не требует особого ухода."} />
            <Description text={"Также у нас Вы можете заказать дизайн, либо мы просчитаем полный комплект для Вашего готового дизайна.  "} />
            <Description text={"Преобразите свое пространство с ТОО «Kapitik Art Studio»!"}/>
            <Description text={"Мы гарантируем идеальный результат и полное удовлетворение "} />
            <Description text={"Вашим ожиданиям!"} />
            <Models data={bambooModelsData}  />
            <Colors data={bambooColorData} />
            <Example data={bambooExampleData}/>
        </Container>
    );
};

export default BambooPage;

const Container = styled("main")`
`