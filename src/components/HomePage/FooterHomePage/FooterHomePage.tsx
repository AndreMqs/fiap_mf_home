import LogoWhite from "../../../images/LogoWhite.svg";
import Intagram from "../../../images/Instagram.svg";
import WhatsApp from "../../../images/WhatsApp.svg";
import Youtube from "../../../images/Youtube.svg";

import styles from "./FooterHomePage.module.scss"


export default function FooterHomePage() {

  return (
    <div id='footerContainer' className={styles.footerContainer}>
      <div className={styles.links}>
        <span className={styles.linkHeader}>Serviços</span>
        <span className={styles.singleLink}>Conta corrente</span>
        <span className={styles.singleLink}>Conta PJ</span>
        <span className={styles.singleLink}>Cartão de crédito</span>
      </div>

      <div className={styles.links}>
        <span className={styles.linkHeader}>Contato</span>
        <span className={styles.singleLink}>0800 004 250 08</span>
        <span className={styles.singleLink}>meajuda@bytebank.com.br</span>
        <span className={styles.singleLink}>ouvidoria@bytebank.com.br</span>
      </div>
      
      <div className={styles.logoLinks}>
        <span className={styles.linkHeader}>Desenvolvido por André Câmara</span>
        <span>
          <img src={LogoWhite} alt="Logo" className={styles.logo}/>
          {/* <LogoWhite
            className={styles.logo}
          /> */}
        </span>
        <div className={styles.icons}>
          <span>
            <img src={Intagram} alt="Intagram" className={styles.logo}/>
            {/* <Intagram
              className={styles.logo}
            /> */}
          </span>
          <span>
            <img src={WhatsApp} alt="WhatsApp" className={styles.logo}/>
            {/* <WhatsApp
              className={styles.logo}
            /> */}
          </span>
          <span>
            <img src={Youtube} alt="Youtube" className={styles.logo}/>
            {/* <Youtube
              className={styles.logo}
            /> */}
          </span>
        </div>
      </div>
    </div>
  );
}