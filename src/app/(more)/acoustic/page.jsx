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
            <Description title={"TOO <<Kapitik Art Studio>>"} text={" предлагает высококачественные бамбуковые панели и акустические панели - инновация и стиль для декорирования интерьера коммерческих и жилых помещений по ценам заводов-изготовителей Китая."} />
            <Description text={"Преимущества использования акустических панелей в декоре:"} />
            <Description title={"ЦЕНА"} text={"Премиум качество по цене мирового лидера завода-изготовителя. Материал изготовления - полиэстер 100%."} />
            <Description title={ "ДИЗАЙН" } text={"Более 50 расцветок, любой дизайн, любые сложные отделки элементов, решения на стены и потолки, декоративные конструкции."} />
            <Description title={ "ЗВУКОИЗОЛЯЦИЯ" } text={"Основным качеством изделий помимо декорирования, является высокое шумопоглощение. Используются в кинотеатрах, караоке клубах, конференц-залах, офисах, детских комнат, музыкальных школ, детских садах и пр."} />
            <Description title={"МОНТАЖ И ЭКСПЛУАТАЦИЯ"} text={"Быстрый и простой монтаж изделий. Изделия обладают легким весом - около 2 кг на квадратный метр."} />
            <Description text={"Предлагаемые для Вас изделия обладают долговечностью 25 лет, высокой прочностью и устойчивостью к механическим воздействиям, не требует особого ухода."} />
            <Description text={"Также у нас Вы можете заказать дизайн, либо мы просчитаем полный комплект для Вашего готового дизайна.  "} />
            <Description text={"Преобразите свое пространство с ТОО «Kapitik Art Studio»!"}/>
            <Description text={"Мы гарантируем идеальный результат и полное удовлетворение "} />
            <Description text={"Вашим ожиданиям!"} />
            <Models data={modelsAcousticData}  />
            <Colors data={colorsAcousticData} />
            <Example data={exampleAcousticData}/>
        </Container>
    );
};

export default BambooPage;

const Container = styled("main")`
`