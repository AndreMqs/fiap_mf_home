import cn from "classnames";

import Dispositivos from "../../../images/Dispositivos.svg";
import Estrela from "../../../images/Estrela.svg";
import IlustracaoBanner from "../../../images/IlustracaoBanner.svg";
import Presente from "../../../images/Presente.svg";
import Saque from "../../../images/Saque.svg";

import styles from "./ContentHomePage.module.scss"


export default function ContentHomePage() {

  const goToInit = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/inicio";
    }
  }

  const shouldRenderButtons = () => {
    if (typeof window !== "undefined") {
      return window.screen.width <= 425;
    }

    return false;
  }

  const getImgSize = () => {
    if (typeof window !== "undefined") {
      if (window.screen.width >= 768) {
        return {
          height: 412,
          width: 660
        }
      }
  
      if (window.screen.width > 425) {
        return {
          height: 375,
          width: 600
        }
      }
  
    }

    return {
      height: 194,
      width: 312
    }
  }

  const renderBanner = () => {
    return (
      <div className={styles.banner}>
        <span className={styles.bannerText}>
          Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
        </span>
        <img src={IlustracaoBanner} alt="Banner" style={{...getImgSize()}}/>
      </div>
    );
  }

  const renderBenefits = () => {
    return (
      <div className={styles.benefitsContainer}>
        <span className={styles.titleText}>
          Vantagens do nosso banco:
        </span>
        <div className={styles.iconsContainer}>
          <div className={styles.iconItemContainer}>
            <img src={Presente} alt="Presente" />
            <span className={styles.itemTitle}>Conta e cartão gratuitos</span>
            <span className={styles.itemText}>Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.</span>
          </div>

          <div className={styles.iconItemContainer}>
            <img src={Saque} alt="Saque" />
            <span className={styles.itemTitle}>Saques sem custo</span>
            <span className={styles.itemText}>Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.</span>
          </div>

          <div className={styles.iconItemContainer}>
            <img src={Estrela} alt="Estrela" />
            <span className={styles.itemTitle}>Programa de pontos</span>
            <span className={styles.itemText}>Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!</span>
          </div>

          <div className={styles.iconItemContainer}>
            <img src={Dispositivos} alt="Dispositivos" />
            <span className={styles.itemTitle}>Seguro Dispositivos</span>
            <span className={styles.itemText}>Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id='contentContainer' className={styles.contentContainer}>
      <div className={styles.content}>
        {renderBanner()}
        {shouldRenderButtons() && (
          <div className={styles.buttons}>
            <button className={cn(styles.button, styles.btnOpenAccount)}>Abrir conta</button>
            <button className={cn(styles.button, styles.btnLogin)} onClick={goToInit}>Já tenho conta</button>
          </div>
        )}
        {renderBenefits()}
      </div>
    </div>
  );
}