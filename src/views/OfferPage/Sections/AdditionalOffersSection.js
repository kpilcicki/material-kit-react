import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/additionalOffersStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function AdditionalOffersSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Pakiety telewizji kablowej</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card className={classes.card}>
              <CardBody>
                <GridContainer justify="space-between">
                  <GridContainer direction="column" justify="center" md={4} className={classes.additionalOfferHeaderContainer}>
                    <h3 className={classes.cardTitle}>
                      Pakiet Extra
                    </h3>
                    <h5>
                      9 kanałów 8 HD
                    </h5>
                  </GridContainer>
                  <GridContainer direction="column" justify="center" md={5} className={classes.additionalOfferHeaderContainer}>
                    <img src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_428,h_92/https://astralmedia.pl/wp-content/uploads/2019/01/extra2.jpg" />
                  </GridContainer>
                  <GridContainer md={3} direction="column" justify="center" className={classes.footerContainer}>
                    <h4>
                      15,90 zł
                    </h4>
                  </GridContainer>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
