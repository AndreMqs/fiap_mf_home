import { useState } from 'react';
import { clientOnly } from 'vike-react/clientOnly';

const HeaderHomePage = clientOnly(() => import("./HeaderHomePage/HeaderHomePage"));
const ContentHomePage = clientOnly(() => import("./ContentHomePage/ContentHomePage"));
import FooterHomePage from './FooterHomePage/FooterHomePage';
const LoginModal = clientOnly(() => import("./LoginModal/LoginModal"));
const RegisterModal = clientOnly(() => import("./RegisterModal/RegisterModal"));

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
      <ContentHomePage fallback={<>Loading...</>}/>
      <FooterHomePage />
    </div>
  );
}