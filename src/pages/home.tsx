import React from 'react';

interface ContactItem {
  medium: string;
  label: string;
  link?: URL;
}

const CONTACTS_LIST: ContactItem[] = [
  { medium: 'instagram', label: '@mocakesmoproblems', link: new URL(`https://www.google.com`) },
  { medium: 'email', label: 'mocakes@gmail.com', link: new URL(`mailto:mocakes@gmail.com`) },
];

const Home: React.FC = () => {
  return (
    <>
    </>
  );
};

export default Home;
