import React from 'react';

import { Routes } from '../../utils/Routes';
import styles from './Header.module.scss';

interface HeaderProps {
  activeRoute?: string;
}

const NavButton: React.FC<{ route: Routes, label: string }> = ({ route, label }) => {
  const isActive = typeof window !== 'undefined' ? window.location.pathname === route : false;
  const className = isActive ? `${styles.navButton} active` : styles.navButton;

  return (<a className={className} href={route}>{label}</a>)
}

const navButtons = () => (
  <>
    <NavButton route={Routes.CAKES} label='Cakes' />
    <NavButton route={Routes.CUPCAKES} label='Cupcakes' />
    <NavButton route={Routes.COOKIES} label='Cookies' />
    <NavButton route={Routes.GALLERY} label='Gallery' />
    <NavButton route={Routes.FAQ} label='FAQ' />
  </>
)

const Header: React.FC<HeaderProps> = () => {

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <a className={styles.logoButton} href={Routes.HOME}>Mo' Cakes</a>
        <div className={styles.navContainer}>{navButtons()}</div>
        <div className={styles.mobileNavContainer}>
          <div className={styles.navIcon}><a>Menu</a></div>
          <div className={styles.navOptions}>{navButtons()}</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
