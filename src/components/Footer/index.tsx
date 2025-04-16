import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="40px" height="40px" />
      </a>
    );
  };

  return (
    <>

      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="151px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>

              <SocialLink
                href="https://www.instagram.com/balarymarket/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://vk.com/balarymarket"
                src="vk.svg"
              />
              <a
                href="https://g.co/kgs/okZaKSa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  height="36"
                  style={{ border: 0, height: 36 }}
                  src="/img/svg/googlemaps.png"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
