import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/contactPage.js";
import OfferSection from "./Sections/OffersSection";
import { useMediaQuery } from "@material-ui/core";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function InternetPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const isBig = useMediaQuery('(min-width:600px)');
  return (
    <div>
      <Header
        color="primary"
        routes={dashboardRoutes}
        brand="TvNetCom"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div className={classes.container}>
        <div className={classNames(classes.main, isBig ? classes.mainRaised : classes.smallMainRaised)}>
          <div className={classes.container}>
            <OfferSection />
          </div>
        </div>
      </div>
       <Footer />
    </div>
  );
}
