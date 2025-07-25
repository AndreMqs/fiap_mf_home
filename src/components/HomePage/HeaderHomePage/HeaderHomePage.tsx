import cn from "classnames";

import { IconButton } from "@mui/material";

import Logo from "../../../images/Logo.svg";
import LogoIcon from "../../../images/LogoIcon.svg";
import MenuIcon from '@mui/icons-material/Menu';

import styles from "./HeaderHomePage.module.scss"

interface HeaderHomePageProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}

export default function HeaderHomePage({ onOpenLogin, onOpenRegister }: HeaderHomePageProps) {

  const goToInit = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/inicio";
    }
  }

  const getLogo = () => {
    if (typeof window !== "undefined") {
      if (window.screen.width > 768 || window.screen.width <= 425) {
        return (
          <img 
            src={Logo} 
            className={styles.logo} 
            onClick={() => goToInit()} 
            alt="Logo" 
          />
        );
      }
    }

    return (
      <img 
        src={LogoIcon} 
        alt="Logo" 
      />
    );
  }

  const getBtnOpenAccountText = () => {
    if (typeof window !== "undefined" && window.screen.width > 768) {
      return 'Abrir minha conta';
    }

    return 'Abrir Conta';
  }

  const renderDesktopHeader = () => {
    return (
      <>
        <div className={styles.logoAndLinks}>
          {getLogo()}
          <div className={styles.links}>
            <a className={styles.link} href="">Sobre</a>
            <a className={styles.link} href="">Serviços</a>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={cn(styles.button, styles.btnOpenAccount)} onClick={onOpenRegister}>{getBtnOpenAccountText()}</button>
          <button className={cn(styles.button, styles.btnLogin)} onClick={onOpenLogin}>Já tenho conta</button>
        </div>
      </>
    );
  }

  const renderMobileHeader = () => {
    return (
      <>
        <IconButton>
          <MenuIcon className={styles.menuIcon}/>
        </IconButton>
        {getLogo()}
      </>
    );
  }

  const renderHeader = () => {
    if (typeof window !== "undefined" && window.screen.width <= 425) {
      return renderMobileHeader();
    }

    return renderDesktopHeader();
  }

  return (
    <div id='headerContainer' className={styles.headerContainer}>
      {renderHeader()}
    </div>
  );
}