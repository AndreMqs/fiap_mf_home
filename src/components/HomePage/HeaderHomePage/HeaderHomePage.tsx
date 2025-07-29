import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../../../images/Logo.svg";
import LogoIcon from "../../../images/LogoIcon.svg";

interface HeaderHomePageProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}


export default function HeaderHomePage({ onOpenLogin, onOpenRegister }: HeaderHomePageProps) {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateDevice = () => {
      setIsMobile(window.innerWidth <= 425);
      setIsTablet(window.innerWidth <= 768);
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  if (!isClient) return null;

  const styles: { [key: string]: React.CSSProperties } = {
    headerContainer: {
      backgroundColor: "#000000",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 96,
      padding: isMobile ? "0px 24px" : isTablet ? "0px 60px" : undefined,
      justifyContent: isMobile ? "space-between" : "space-around",
    },
    logoAndLinks: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    links: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    link: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: "22px",
      textAlign: "center",
      color: "#47A138",
      textDecoration: "none",
      marginRight: 40,
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    button: {
      height: 48,
      borderRadius: 8,
      cursor: "pointer",
      fontSize: 16,
      fontWeight: 600,
    },
    btnOpenAccount: {
      backgroundColor: "#47A138",
      color: "#fff",
      border: "none",
    },
    btnLogin: {
      border: "2px solid #47A138",
      color: "#47A138",
      backgroundColor: "#000000",
    },
    menuIcon: {
      color: "#47A138",
      fontSize: 32,
    },
  };

  const goToInit = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/inicio";
    }
  };

  const getLogo = () => {
    if (!isTablet || isMobile) {
      return (
        <img
          src={Logo}
          onClick={goToInit}
          alt="Logo"
          style={{
            marginRight: isTablet ? 56 : 72,
            cursor: "pointer",
          }}
        />
      );
    }

    return <img src={LogoIcon} alt="Logo" />;
  };

  const getBtnOpenAccountText = () => {
    return !isTablet ? "Abrir minha conta" : "Abrir Conta";
  };

  const renderDesktopHeader = () => {
    return (
      <>
        <div style={styles.logoAndLinks}>
          {getLogo()}
          <div style={styles.links}>
            <a style={styles.link} href="">
              Sobre
            </a>
            <a style={styles.link} href="">
              Serviços
            </a>
          </div>
        </div>
        <div style={styles.buttons}>
          <button
            style={{
              ...styles.button,
              ...styles.btnOpenAccount,
              width: isTablet ? 144 : 180,
            }}
            onClick={onOpenRegister}
          >
            {getBtnOpenAccountText()}
          </button>
          <button
            style={{
              ...styles.button,
              ...styles.btnLogin,
              width: isTablet ? 144 : 180,
              marginLeft: isTablet ? 16 : 24,
            }}
            onClick={onOpenLogin}
          >
            Já tenho conta
          </button>
        </div>
      </>
    );
  };

  const renderMobileHeader = () => {
    return (
      <>
        <IconButton>
          <MenuIcon style={styles.menuIcon} />
        </IconButton>
        {getLogo()}
      </>
    );
  };

  return (
    <div
      id="headerContainer"
      style={styles.headerContainer}
    >
      {isMobile ? renderMobileHeader() : renderDesktopHeader()}
    </div>
  );
}
