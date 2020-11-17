import React from 'react';

import styles from './PageSection.module.scss';

interface PageSectionProps {
  height?: string;
  width?: string;
  theme?: 'yellow' | 'pink' | 'white';
  title: string;
  subtitle?: string;
  message?: string;
}

const PageSection: React.FC<PageSectionProps> = ({ 
  height = '100%',
  width = 'auto',
  theme = 'white',
  title,
  message,
  children,
}) => {
  return (
    <div
      className={[styles.pageContainer, styles[theme]].join(' ')}
      style={{ height, width }}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {message && <p className={styles.sectionMessage}>{message}</p>}
        {children}
    </div>
  );
}

export default PageSection;
