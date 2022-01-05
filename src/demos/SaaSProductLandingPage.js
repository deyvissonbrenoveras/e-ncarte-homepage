import React from "react";
import tw from "twin.macro";
// import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
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
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
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
      />
      <FeatureWithSteps
        subheading={<Subheading>Passo a passo</Subheading>}
        heading={
          <>
            É muito fácil ter a sua <HighlightedText>Página.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />

      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our{" "}
            <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description:
              "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`,
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description:
              "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`,
          },
        ]}
      />
      <Pricing
        subheading={<Subheading>Preços</Subheading>}
        heading={
          <>
            Os melhores e flexíveis <HighlightedText>Planos.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Básico",
            price: "199 R$",
            duration: "Mensal",
            mainFeature: "Plano inicial",
            features: [
              "25 produtos",
              "2 espaços para patrocinadores",
              "Trabalho nas redes sociais",
              "Site, App, Qrcode",
              "1 baner virtual mensal",
              "Relatórios mensais",
            ],
          },
          {
            name: "Avançado",
            price: "599 R$",
            duration: "Mensal",
            mainFeature: "Para pequenas empresas",
            features: [
              "80 produtos",
              "6 espaços para patrocinadores",
              "Trabalho nas redes sociais",
              "Site, App, Qrcode",
              "1 baner virtual mensal",
              "Relatórios mensais",
            ],
            featured: true,
          },
          {
            name: "Personalizado",
            price: "Variável",
            duration: "Monthly",
            mainFeature: "Para pequenas e médias empresas",
            features: [
              "Nos fale suas necessidades e iremos elaborar um projeto sob medida para você",
            ],
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
