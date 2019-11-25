import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Tv from "@material-ui/icons/Tv";
import Wifi from "@material-ui/icons/Wifi";
import Phone from "@material-ui/icons/Phone";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nasze usługi</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Telewizja"
              description="Telewizja Kablowa to az 150 kanałów - w tym 72 HD"
              icon={Tv}
              iconColor="info"
              vertical
              linkTo="tv-page"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Internet"
              description="Bezawaryjny dostęp do szybkiego internetu"
              icon={Wifi}
              iconColor="success"
              vertical
              linkTo="internet-page"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Telefon"
              description="Najlepsze plany telefonów stacjonarnych tylko dla naszych klientów"
              icon={Phone}
              iconColor="danger"
              vertical
              linkTo="phone-page"
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
