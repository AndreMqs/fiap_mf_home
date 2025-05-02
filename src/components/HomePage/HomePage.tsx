import HeaderHomePage from './HeaderHomePage/HeaderHomePage';
import ContentHomePage from './ContentHomePage/ContentHomePage';
import FooterHomePage from './FooterHomePage/FooterHomePage';

import styles from "./HomePage.module.scss"


export default function HomePage(props: HomePageProps) {
  const {} = props;

  return (
    <div id='homePageMainContainer' className={styles.homePageMainContainer}>
      <HeaderHomePage />
      <ContentHomePage />
      <FooterHomePage />
    </div>
  );
}

interface HomePageProps {
}