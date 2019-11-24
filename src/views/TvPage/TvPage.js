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

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function TvPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <OfferSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
