import { useState } from 'react';

import HeaderHomePage from './HeaderHomePage/HeaderHomePage';
import ContentHomePage from './ContentHomePage/ContentHomePage';
import FooterHomePage from './FooterHomePage/FooterHomePage';
import LoginModal from './LoginModal/LoginModal'

import styles from "./HomePage.module.scss"

export default function HomePage() {
  const [openLogin, setOpenLogin] = useState(false);

  const toggleLogin = () => setOpenLogin(!openLogin);

  return (
    <div id='homePageMainContainer' className={styles.homePageMainContainer}>
      <LoginModal 
        open={openLogin} 
        onClose={toggleLogin} 
      />
      <HeaderHomePage onOpenLogin={toggleLogin} />
      <ContentHomePage />
      <FooterHomePage />
    </div>
  );
}