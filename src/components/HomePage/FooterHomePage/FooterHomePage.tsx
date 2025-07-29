import { useEffect, useState } from "react";
import LogoWhite from "../../../images/LogoWhite.svg";
import Instagram from "../../../images/Instagram.svg";
import WhatsApp from "../../../images/WhatsApp.svg";
import Youtube from "../../../images/Youtube.svg";

export default function FooterHomePage() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const updateDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  if (!isClient) {
    return null;
  }

  const styles: { [key: string]: React.CSSProperties } = {
    footerContainer: {
      display: "flex",
      justifyContent: "space-between",
      padding: "40px 24px",
      gap: "16px",
      backgroundColor: "#000",
      color: "#fff",
      textAlign: "left",
      flexDirection: "row",
    },
    links: {
      display: "flex",
      flexDirection: "column",
    },
    linkHeader: {
      fontWeight: "bold",
      color: "white",
      marginBottom: 8,
    },
    singleLink: {
      color: "white",
      fontSize: "14px",
      margin: "4px 0",
    },
    logoLinks: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    logo: {
      width: 120,
      height: "auto",
      marginBottom: 16,
    },
    icons: {
      display: "flex",
      gap: "16px",
    },
    iconImage: {
      width: 24,
      height: 24,
    },
    footerContainerStyle: {
      display: "flex",
      justifyContent: "space-between",
      padding: "40px 24px",
      backgroundColor: "#000",
      color: "#fff",
      flexDirection: (isMobile ? "column" : "row"),
      gap: isMobile ? "32px" : "16px",
      textAlign: isMobile ? "center" : "left",
    },
    logoLinksStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: isMobile ? "center" : "flex-start",
    }
  };

  return (
    <div id="footerContainer" style={styles.footerContainerStyle}>
      <div style={styles.links}>
        <span style={styles.linkHeader}>Serviços</span>
        <span style={styles.singleLink}>Conta corrente</span>
        <span style={styles.singleLink}>Conta PJ</span>
        <span style={styles.singleLink}>Cartão de crédito</span>
      </div>

      <div style={styles.links}>
        <span style={styles.linkHeader}>Contato</span>
        <span style={styles.singleLink}>0800 004 250 08</span>
        <span style={styles.singleLink}>meajuda@bytebank.com.br</span>
        <span style={styles.singleLink}>ouvidoria@bytebank.com.br</span>
      </div>

      <div style={styles.logoLinksStyle}>
        <span style={styles.linkHeader}>Desenvolvido por André Câmara</span>
        <img src={LogoWhite} alt="Logo" style={styles.logo} />
        <div style={styles.icons}>
          <img src={Instagram} alt="Instagram" style={styles.iconImage} />
          <img src={WhatsApp} alt="WhatsApp" style={styles.iconImage} />
          <img src={Youtube} alt="Youtube" style={styles.iconImage} />
        </div>
      </div>
    </div>
  );
}
