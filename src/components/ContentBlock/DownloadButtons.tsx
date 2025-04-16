import { Row, Col } from "antd";
import { useEffect, useState } from "react";

const DownloadButtons = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 576);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <Row
            justify="center"
            style={{
                width: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                gap: isMobile ? "12px" : "24px",
                textAlign: "center"
            }}
        >
            <Col>
                <img
                    onClick={()=> window.open("https://play.google.com/store/apps/details?id=tm.com.balary")}
                    src="/img/svg/playstore.svg"
                    alt="Download on Play Store"
                    style={{
                        width: "100%",
                        maxWidth: "200px",
                        cursor: "pointer"
                    }}
                />
            </Col>
            <Col>
                <img
                    onClick={()=> window.open("https://apps.apple.com/gb/app/balary/id1482230836?l=ru")}
                    src="/img/svg/appstore.svg"
                    alt="Download on App Store"
                    style={{
                        width: "100%",
                        maxWidth: "200px",
                        cursor: "pointer"
                    }}
                />
            </Col>
        </Row>
    );
};

export default DownloadButtons;
