import React from "react";
import tw from "twin.macro";
import env from "react-dotenv";
// import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Hero2 from "components/hero/TwoColumnWithVideo";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
// import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import heroEncarteImageSrc from "images/hero-e-ncarte.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as EnvironmentcaseIcon } from "../images/environment-icon.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-encarte`;
  const HighlightedText = tw.span`text-encarte`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Sobre o nosso serviço</Subheading>}
        heading={
          <>
            Exponha sua loja e ganhe{" "}
            <HighlightedText>Visibilidade.</HighlightedText>
          </>
        }
        description="A publicidade digital está em ascendência no cenário atual. O digital predomina todas as ações do mercado no geral, permitindo que traçamos estratégias eficazes para aumentar as vendas do seu negócio."
      />
      <FeatureWithSteps
        subheading={<Subheading>Passo a passo</Subheading>}
        heading={
          <>
            É muito fácil ter a sua <HighlightedText>Página.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={heroEncarteImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature
        subheading={<Subheading>Quem somos</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <Hero2
        heading="Aplicativo da sua loja"
        description="Ofereça seus clientes um aplicativo com carrinho, lista de compras e recebimento de pedidos via Whatsapp."
        primaryButtonText="FALE CONOSCO"
        primaryButtonUrl={env.contact_us}
        watchVideoButtonText="Veja o vídeo"
        watchVideoYoutubeUrl="https://www.youtube.com/embed/T8IQSSnL-Sw"
      />

      <MainFeature2
        subheading={<Subheading>RETORNO IMEDIATO</Subheading>}
        heading={
          <>
            Aproveite os benefícios da{" "}
            <HighlightedText>vitrine virtual </HighlightedText>
            imediatamente.
          </>
        }
        description="As vantagens de ter uma exposição online são muitas mas podemos destacar alguns benefícios imediatos"
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Economize",
            description:
              "Com a loja online não será necessário investir alto em produção e entrega de panfletos",
            iconContainerCss: tw`bg-green-300 text-green-800`,
          },
          {
            Icon: EnvironmentcaseIcon,
            title: "Compromisso com o meio ambiente",
            description:
              "Com a diminuição da impressão de panfletos, sua empresa irá contribuir diretamente com a preservação do meio ambiente",
            iconContainerCss: tw`bg-red-300 text-red-800`,
          },
        ]}
        primaryButtonText="FALE CONOSCO"
        primaryButtonUrl={env.contact_us}
      />
      <Pricing
        subheading={<Subheading>Preços</Subheading>}
        heading={
          <>
            Os melhores e flexíveis <HighlightedText>Planos.</HighlightedText>
          </>
        }
        primaryButtonText="COMPRAR"
        plans={[
          {
            name: "Básico",
            price: "200 R$",
            duration: "Mensal",
            mainFeature: "Plano inicial",
            features: [
              "Marketing digital em Mídias Sociais, Site e Aplicativo",
              "Trabalho realizado com até 25 produtos e 2 parceiros comerciais",
              "Relatório de acessos mensal",
              "Qrcode personalizado",
              "1 Banner virtual mensal",
              "1 Campanha de marketing mensal",
              "Até 2 produtos destaque",
              "Sistema de pedidos via whatsapp",
              "Período mínimo de adesão de 3 meses",
            ],
          },
          {
            name: "Avançado",
            price: "600 R$",
            duration: "Mensal",
            mainFeature: "Para pequenas empresas",
            features: [
              "Marketing digital em Mídias Sociais, Site e Aplicativo",
              "Trabalho realizado com até 80 produtos e 6 parceiros comerciais",
              "Relatório de acessos mensal",
              "Qrcode personalizado",
              "2 Banner virtual mensal",
              "2 Campanha de marketing mensal",
              "Até 8 produtos destaque",
              "Sistema de pedidos via whatsapp",
              "Período mínimo de adesão de 3 meses",
            ],
          },
          {
            name: "Personalizado",
            mainFeature: "Para pequenas e médias empresas",
            features: [
              "Agende uma reunião virtual e conte-nos a sua necessidade",
              "Desenharemos um projeto de marketing digital voltado para o seu empreendimento",
              "Tudo sob medida para seu bolso e seus objetivo",
            ],
            featured: true,
          },
        ]}
      />
      <Testimonial
        subheading={<Subheading>Cases de sucesso</Subheading>}
        description="Veja abaixo o feedback de um dos nossos clientes"
        heading={
          <>
            O que estão falando sobre o{" "}
            <HighlightedText>e-ncarte.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Estou tendo ótimos resultados",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Flávio",
            customerTitle: "Diretor, Rede Sertaneja.",
          },
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        description="Veja abaixo as respostas para as perguntas mais comuns"
        heading={
          <>
            Quais são as suas <HighlightedText>Dúvidas?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "O QUE É?",
            answer:
              "É uma plataforma 100% digital para publicidade virtual de produtos e/ou serviços, patrocinadores, fornecedores, com interação via mídias sociais e ações de marketing voltadas ao crescimentos nas suas vendas.",
          },
          {
            question: "COMO FUNCIONA?",
            answer: `É muito simples, vivemos na era digital e assim nós empreendedores precisamos nos adequar as novas práticas, dessa forma aos nos contratar você conta com uma equipe que:                 
                  Produzirá sua web página para exposição do seu empreendimento;
                  Construirá uma estratégia de marketing digital personalizada ao seu empreendimento;
                  Fornecerá relatórios para que você acompanhe o crescimento da exposição de seu empreendimento;
                  Inovará no seu relacionamento com clientes, fornecedores e colaboradores;`,
          },
          {
            question: "QUAL O ALCANCE?",
            answer:
              "Você decide, sua cidade, seu estado... Nosso papel é te levar onde você quer chegar.",
          },
          {
            question: "QUAL O OBJETIVO?",
            answer:
              "Incluir, orientar, desenvolver e acompanhar o seu empreendimento por meio da publicidade digital.",
          },
          {
            question: "POR QUE DEVO CRIAR O MEU?",
            answer:
              "Descubra o perfil de seu cliente, esteja ao alcance dele 24hs por dia, alcance milhares de pessoas sem a necessidade de material gráfico impresso, conecte seu empreendimento ao mundo digital, inove, tenha mais informações para a tomada de decisão no dia-a-dia.",
          },
          {
            question: "COMO CRIAR O MEU?",
            answer: "Fale conosco no (83) 99360-9556.",
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
