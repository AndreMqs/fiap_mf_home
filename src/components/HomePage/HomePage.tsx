import { useState } from 'react';

import HeaderHomePage from './HeaderHomePage/HeaderHomePage';
import ContentHomePage from './ContentHomePage/ContentHomePage';
import FooterHomePage from './FooterHomePage/FooterHomePage';
import LoginModal from './LoginModal/LoginModal'
import RegisterModal from './RegisterModal/RegisterModal'

import styles from "./HomePage.module.scss"

export default function HomePage() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const toggleLogin = () => {
    setOpenLogin(!openLogin);
  };

  const toggleRegister = () => {
    setOpenRegister(!openRegister);
  };

  return (
    <div id='homePageMainContainer' className={styles.homePageMainContainer}>
      <LoginModal 
        open={openLogin} 
        onClose={toggleLogin} 
      />
      <RegisterModal 
        open={openRegister} 
        onClose={toggleRegister} 
      />
      <HeaderHomePage 
        onOpenLogin={toggleLogin} 
        onOpenRegister={toggleRegister}
      />
      <ContentHomePage />
      <FooterHomePage />
    </div>
  );
}