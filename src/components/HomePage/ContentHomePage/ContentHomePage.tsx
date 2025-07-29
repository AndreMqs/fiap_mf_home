import { useEffect, useState } from "react";
import Dispositivos from "../../../images/Dispositivos.svg";
import Estrela from "../../../images/Estrela.svg";
import IlustracaoBanner from "../../../images/IlustracaoBanner.svg";
import Presente from "../../../images/Presente.svg";
import Saque from "../../../images/Saque.svg";

export default function ContentHomePage() {
  const [isClient, setIsClient] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateDevice = () => {
      const width = window.innerWidth;
      setIsTablet(width <= 768);
      setIsMobile(width <= 425);
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  if (!isClient) return null;

  const goToInit = () => {
    window.location.href = "/inicio";
  };

  const styles: { [key: string]: React.CSSProperties } = {
    contentContainerStyle: {
      background: "linear-gradient(180deg, #004D61 0%, #FFFFFF 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: isMobile ? "40px 24px" : isTablet ? "40px 60px" : "24px",
      minHeight: "calc(100% - 320px)",
      overflowY: isMobile ? "hidden" : "auto",
      height: isTablet ? "100%" : undefined,
    },
    contentStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      maxWidth: 1200,
      width: "100%",
    },
    bannerStyle: {
      display: "flex",
      flexDirection: isTablet ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    bannerTextStyle: {
      fontSize: isMobile ? 25 : 28,
      fontWeight: isMobile ? 700 : 600,
      lineHeight: isMobile ? "30px" : "34px",
      textAlign: isMobile ? "center" : "left",
      color: "#000",
      paddingRight: !isTablet ? 80 : 0,
      padding: isTablet ? "0px 80px 16px" : "0px",
      width: isMobile ? "100%" : "auto",
    },
    buttonsStyle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: "16px 24px 32px 24px",
      width: "100%",
      gap: 24,
    },
    baseButtonStyle: {
      width: isTablet ? 144 : 180,
      height: 48,
      borderRadius: 8,
      cursor: "pointer",
      fontSize: 16,
      fontWeight: 600,
    },
    openAccountButtonStyle: {
      width: isTablet ? 144 : 180,
      height: 48,
      borderRadius: 8,
      cursor: "pointer",
      fontSize: 16,
      fontWeight: 600,
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
    },
    loginButtonStyle: {
      width: isTablet ? 144 : 180,
      height: 48,
      borderRadius: 8,
      cursor: "pointer",
      fontSize: 16,
      fontWeight: 600,
      backgroundColor: "transparent",
      color: "#000",
      border: "2px solid #000",
    },
    benefitsContainerStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    titleTextStyle: {
      fontSize: isMobile ? 20 : 25,
      fontWeight: 700,
      lineHeight: isMobile ? "24px" : "30px",
      textAlign: "center",
      paddingBottom: 40,
    },
    iconsContainerStyle: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 24,
      width: "100%",
    },
    iconItemContainerStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 16,
      maxWidth: 260,
    },
    itemTitleStyle: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "24px",
      textAlign: "center",
      color: "#47A138",
    },
    itemTextStyle: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "19px",
      textAlign: "center",
      color: "#768676",
    },
  };

  const getImgSize = () => {
    if (isTablet && !isMobile) {
      return { height: 375, width: 600 };
    }
    if (!isTablet) {
      return { height: 412, width: 660 };
    }
    return { height: 194, width: 312 };
  };

  return (
    <div id="contentContainer" style={styles.contentContainerStyle}>
      <div style={styles.contentStyle}>
        <div style={styles.bannerStyle}>
          <span style={styles.bannerTextStyle}>
            Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
          </span>
          <img src={IlustracaoBanner} alt="Banner" {...getImgSize()} />
        </div>

        {isMobile && (
          <div style={styles.buttonsStyle}>
            <button style={styles.openAccountButtonStyle}>Abrir conta</button>
            <button style={styles.loginButtonStyle} onClick={goToInit}>Já tenho conta</button>
          </div>
        )}

        <div style={styles.benefitsContainerStyle}>
          <span style={styles.titleTextStyle}>Vantagens do nosso banco:</span>
          <div style={styles.iconsContainerStyle}>
            {[{
              icon: Presente,
              title: "Conta e cartão gratuitos",
              text: "Nossa conta é digital, sem custo fixo e sem tarifa de manutenção."
            }, {
              icon: Saque,
              title: "Saques sem custo",
              text: "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
            }, {
              icon: Estrela,
              title: "Programa de pontos",
              text: "Acumule pontos com suas compras no crédito sem pagar mensalidade!"
            }, {
              icon: Dispositivos,
              title: "Seguro Dispositivos",
              text: "Seus dispositivos móveis protegidos por uma mensalidade simbólica."
            }].map((item, i) => (
              <div key={i} style={styles.iconItemContainerStyle}>
                <img src={item.icon} alt={item.title} />
                <span style={styles.itemTitleStyle}>{item.title}</span>
                <span style={styles.itemTextStyle}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
