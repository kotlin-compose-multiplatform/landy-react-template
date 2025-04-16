import {lazy} from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import {Col, Row, Space} from "antd";
import DownloadButtons from "../../components/ContentBlock/DownloadButtons";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
    return (
        <Container>
            <ScrollToTop/>
            <ContentBlock
                direction="right"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="bee_3.png"
                id="intro"
            />
            <MiddleBlock
                title={MiddleBlockContent.title}
                content={MiddleBlockContent.text}
                button={MiddleBlockContent.button}
            />
            <ContentBlock
                direction="left"
                title={AboutContent.title}
                content={AboutContent.text}
                section={AboutContent.section}
                icon="bee_2.png"
                id="about"
            />
            <ContentBlock
                direction="right"
                title={MissionContent.title}
                content={MissionContent.text}
                icon="bee_1.png"
                id="mission"
            />
            <ContentBlock
                direction="left"
                title={ProductContent.title}
                content={ProductContent.text}
                icon="store.png"
                id="product"
                actions={<DownloadButtons/>}
            />
            <Contact
                title={ContactContent.title}
                content={ContactContent.text}
                id="contact"
            />
        </Container>
    );
};

export default Home;
