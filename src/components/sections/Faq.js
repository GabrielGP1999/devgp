import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  align-self: center;
  }
  @media (max-width: 48em){
  width: 90%;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Perguntas</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="ONDE ME ENCONTRAR?" >
  Abaixo terá todos meus contatos e redes sociais. Caso seja de seu interesse, Tel: (11)94545-7580, E-mail: dev.gabrielpacheco@gmail.com
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="PROJETOS PESSOAIS?" >
  Atualmente meus projetos não foram ao "ar". Mas caso tenha interesse pode ver o código fonte deles em meu github.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="QUAL MINHA LOCALIDADE?" >
  Hoje resido em São Paulo, Brasil.
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="O QUE ESPERAR?" >
  Você pode esperar uma pessoa extremamente dedicada e focada em seus objetivos, sem medo de arriscar e se aventurar em desafios. Totalmente honesto e sempre buscando melhorar dia após dia.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="PONTO POSITIVO?
" >
 Acredito que um ponto muito positivo sobre mim seria a liderença, buscando sempre ser ativo nas decisões e opiniões.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="UMA CURIOSIDADE?
" >
  Já participei de um processo seletivo de 6 meses para Deloitte(a maior empresa de consultoria do mundo), continham por volta de 6000 candidatos para 10 vagas. Dentro desse processo tivemos acesso a alguns cursos além de vários aprendizados. Cheguei até a última etapa e acabei não garantindo a vaga, mas caso eu tivesse passado qual seria meu futuro? Porque após isso que decidi que meu caminho seria a programação...
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq