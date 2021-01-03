import React from 'react';

import styles from './ListSection.module.scss';

interface ListItem {
  label: string;
  description: string;
}

interface ListSectionProps {
  title?: string;
  listItems: ListItem[];
  id?: string;
}

const ListSection: React.FC<ListSectionProps> = ({ title, listItems, id }) => {
  return (
    <div className={styles.listSection} id={id ?? 'list-section'}>
      {title && <h2>{title}</h2>}
      {listItems.map(({ label, description }) => (
        <p key={`${label}-${description}`}>
          <b>{label}</b><br/>
          {description}
        </p>
      ))}
    </div>
  );
}

export default ListSection;
