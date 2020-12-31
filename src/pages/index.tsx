import React from "react"
import { Header } from '../components';
import Main from './home';

import stlyes from '../styles/index.module.scss';

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}
