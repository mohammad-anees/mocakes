import React from 'react';

import styles from './Header.module.scss';

interface HeaderProps {
  activeRoute?: string;
}

enum Path {
  HOME='/',
  CAKES='/cakes',
  CUPCAKES='/cupcakes',
  COOKIES='/cookies',
  CUSTOMS='/customs',
  FAQ='/faq',
}

const NavButton: React.FC<{ route: Path, label: string }> = ({ route, label }) => {
  const isActive = window.location.pathname === route;
  const className = isActive ? `${styles.navButton} ${styles.active}` : styles.navButton;

  return (<a className={className} href={route}>{label}</a>)
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.headerContainer}>
      <a className={styles.logoButton} href={Path.HOME}>Mo' Cakes</a>
      <div className={styles.navContainer}>
        <NavButton route={Path.CAKES} label='Cakes' />-
        <NavButton route={Path.CUPCAKES} label='Cupcakes' />-
        <NavButton route={Path.COOKIES} label='Cookies' />-
        <NavButton route={Path.CUSTOMS} label='Customs' />-
        <NavButton route={Path.FAQ} label='FAQ' />
      </div>
    </div>
  )
}

export default Header;
