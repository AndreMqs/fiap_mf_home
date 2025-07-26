import { useEffect, useState } from "react";
import LogoWhite from "../../../images/LogoWhite.svg";
import Instagram from "../../../images/Instagram.svg";
import WhatsApp from "../../../images/WhatsApp.svg";
import Youtube from "../../../images/Youtube.svg";

const footerContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "40px 24px",
  gap: "16px", // default gap for desktop
  backgroundColor: "#000",
  color: "#fff",
  textAlign: "left", // default desktop
  flexDirection: "row", // default desktop
};

const links: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const linkHeader: React.CSSProperties = {
  fontWeight: "bold",
  color: "white",
  marginBottom: 8,
};

const singleLink: React.CSSProperties = {
  color: "white",
  fontSize: "14px",
  margin: "4px 0",
};

const logoLinks: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // default desktop
};

const logo: React.CSSProperties = {
  width: 120,
  height: "auto",
  marginBottom: 16,
};

const icons: React.CSSProperties = {
  display: "flex",
  gap: "16px",
};

const iconImage: React.CSSProperties = {
  width: 24,
  height: 24,
};

export default function FooterHomePage() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) {
    return null;
  }

  // Ajustes dinâmicos para mobile
  const footerContainerStyle = {
    ...footerContainer,
    flexDirection: (isMobile ? "column" : "row"),
    gap: isMobile ? "32px" : "16px",
    textAlign: isMobile ? "center" : "left",
  };

  const logoLinksStyle = {
    ...logoLinks,
    alignItems: isMobile ? "center" : "flex-start",
  };

  return (
    <div id="footerContainer" style={footerContainerStyle}>
      <div style={links}>
        <span style={linkHeader}>Serviços</span>
        <span style={singleLink}>Conta corrente</span>
        <span style={singleLink}>Conta PJ</span>
        <span style={singleLink}>Cartão de crédito</span>
      </div>

      <div style={links}>
        <span style={linkHeader}>Contato</span>
        <span style={singleLink}>0800 004 250 08</span>
        <span style={singleLink}>meajuda@bytebank.com.br</span>
        <span style={singleLink}>ouvidoria@bytebank.com.br</span>
      </div>

      <div style={logoLinksStyle}>
        <span style={linkHeader}>Desenvolvido por André Câmara</span>
        <img src={LogoWhite} alt="Logo" style={logo} />
        <div style={icons}>
          <img src={Instagram} alt="Instagram" style={iconImage} />
          <img src={WhatsApp} alt="WhatsApp" style={iconImage} />
          <img src={Youtube} alt="Youtube" style={iconImage} />
        </div>
      </div>
    </div>
  );
}
