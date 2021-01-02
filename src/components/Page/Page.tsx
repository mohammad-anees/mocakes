import React, { ReactNode, useMemo } from 'react';
import Header from '../Header';
import Footer from '../Footer';

import styles from './Page.module.scss';

interface PageProps {
  title?: string;
  subtitle?: ReactNode;
}

const Page: React.FC<PageProps> = ({ children, title, subtitle }) => {
  const displayHeader = useMemo(() => !!title || !!subtitle, [title, subtitle]);
  const renderedSubtitle = useMemo(() => {
    if (!subtitle) return null;

    if (typeof subtitle === 'string') return <p>{subtitle}</p>;
    return {subtitle};
  }, [subtitle]);

  return (
    <div>
      <Header />
      {displayHeader && (
        <div className={styles.pageTitle}>
          {title && <h1>{title}</h1>}
          {subtitle && renderedSubtitle}
        </div>
      )}
      <div className={`${styles.contentContainer} ${displayHeader ? '' : styles.topPadding}`}>{children}</div>
      <Footer />
    </div>
  )
}

export default Page;
