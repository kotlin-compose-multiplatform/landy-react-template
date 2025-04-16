import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";
import { ContactContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {


  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={24} md={24} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
            <p>
              <strong>«Balary» — онлайн-супермаркет с доставкой по Ашхабаду.</strong>
              <br />
              У нас вы найдёте свежие продукты и товары для дома с удобной доставкой —
              в день заказа или по расписанию. Заказать можно через мобильное приложение,
              сайт или по телефону.
            </p>

            <h6>Контакты:</h6>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color:"#18216d", fontSize:"18px" }}>
              <li>📍  <strong>Адрес:</strong> г. Ашхабад, ул. 2028 (Ата Говшудова), дом 47А, 1-й этаж</li>
              <li>☎️ <strong>Городской телефон:</strong> +993 (12) 92-40-71</li>
              <li>📱 <strong>Сотовый:</strong> +993 (61) 47-09-39</li>
              <li>📞 <strong>Доп. телефон:</strong> +993 (62) 07-38-30</li>
              <li>✉️ <strong>E-mail:</strong> <a href="mailto:info@balary.net">info@balary.net</a></li>
            </ul>

          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
