import React from "react"
import { ImageCard, Page } from '../components';

import stlyes from '../styles/index.module.scss';
import { Routes } from "../utils/Routes";

import cakesImage from '../../static/cakes.png';
import cookiesImage from '../../static/cookie-cake.png';
import cupcakesImage from '../../static/cupcakes.png';
import customsImage from '../../static/custom.png';

export default function Home() {
  return (
    <Page>
      <div className={stlyes.imageCardsContainer}>
        <ImageCard
          title='The Cakes'
          subtitle='Order one of our signature designs.'
          route={Routes.CAKES}
          image={cakesImage}
        />
        <ImageCard
          title='The Cupcakes'
          subtitle='Order one of our signature sets.'
          route={Routes.CUPCAKES}
          image={cupcakesImage}
        />
        <ImageCard
          title='The Cookies'
          subtitle='Cookies and cookie cakes available.'
          route={Routes.COOKIES}
          image={cookiesImage}
        />
        <ImageCard
          title='The Customs'
          subtitle='Inquire about custom cakes.'
          route={Routes.CUSTOMS}
          image={customsImage}
        />
      </div>
    </Page>
  )
}
