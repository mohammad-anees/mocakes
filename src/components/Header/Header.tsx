import React from 'react';

import { Routes } from '../../utils/Routes';
import styles from './Header.module.scss';

interface HeaderProps {
  activeRoute?: string;
}

const NavButton: React.FC<{ route: Routes, label: string }> = ({ route, label }) => {
  const isActive = window.location.pathname === route;
  const className = isActive ? `${styles.navButton} ${styles.active}` : styles.navButton;

  return (<a className={className} href={route}>{label}</a>)
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.headerContainer}>
      <a className={styles.logoButton} href={Routes.HOME}>Mo' Cakes</a>
      <div className={styles.navContainer}>
        <NavButton route={Routes.CAKES} label='Cakes' />-
        <NavButton route={Routes.CUPCAKES} label='Cupcakes' />-
        <NavButton route={Routes.COOKIES} label='Cookies' />-
        <NavButton route={Routes.CUSTOMS} label='Customs' />-
        <NavButton route={Routes.FAQ} label='FAQ' />
      </div>
    </div>
  )
}

export default Header;
