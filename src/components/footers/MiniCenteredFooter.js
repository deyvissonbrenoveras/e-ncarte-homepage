import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import env from "react-dotenv";
import { HashLink } from "react-router-hash-link";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logoImage from "images/logo-2.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as WhatsappIcon } from "images/whatsapp-icon.svg";
import { ReactComponent as InstagramIcon } from "images/instagram-icon.svg";

const Container = tw(ContainerBase)`bg-footer text-gray-100 -mx-8 -mb-8 py-6`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const HsLink = tw(
  HashLink
)`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-8 md:mt-5 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center text-sm sm:text-base mt-8 md:mt-5 font-medium text-gray-400`;
export default () => {
  const nowYear = new Date().getFullYear();
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logoImage} />
            <LogoText>e-ncarte publicidade</LogoText>
          </LogoContainer>
          <LinksContainer>
            <HsLink to="/#">Início</HsLink>
            <HsLink to="/#quem-somos">Quem somos</HsLink>
            {/* <HsLink to="/#clientes">Clientes</HsLink> */}
            <HsLink to="/#planos">Planos</HsLink>
            <Link href={env.contact_us}>Fale conosco</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/agenciaencarte">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/e_ncarte/">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://api.whatsapp.com/send?phone=558393609556">
              <WhatsappIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; {nowYear} e-ncarte publicidade. Todos os direitos reservados.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
