"use client"
import Footer from "@/components/base/Footer";
import Header from "@/components/base/Header";
import Navigation from "@/components/home/Navigation";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Container>
      <Header/>
        <Navigation />
      <Footer/>
    </Container>
  );
}

const Container = styled("article")`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`
