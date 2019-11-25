import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/additionalOffersStyle.js";
import addCard from "assets/jss/material-kit-react/components/secondCardStyle.js";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(styles);
const additionalCardStyles = makeStyles(addCard);

export default function AdditionalOffersSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const isBig = useMediaQuery('(min-width:600px)');
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Dodatkowe pakiety</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card classes={additionalCardStyles()} className={classes.card}>
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
                    <img src={require("../../../assets/img/tv/extra2.jpg")} className={classes.additionalImage} />
                  </GridContainer>
                  <GridContainer md={3} direction="column" justify="center" className={isBig ? classes.footerContainer : classes.smallFooterContainer}>
                    <h4>
                      15,90 zł
                    </h4>
                  </GridContainer>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card classes={additionalCardStyles()} className={classes.card}>

              <CardBody>
                <GridContainer justify="space-between">
                  <GridContainer direction="column" justify="center" md={4} className={classes.additionalOfferHeaderContainer}>
                    <h3 className={classes.cardTitle}>
                      Canal + Prestige
                    </h3>
                    <h5>
                      8 kanałów 8 HDXX
                    </h5>
                  </GridContainer>
                  <GridContainer direction="column" justify="center" md={5} className={classes.additionalOfferHeaderContainer}>
                    <img src={require("../../../assets/img/tv/canalp.jpg")} className={classes.additionalImage} />
                  </GridContainer>
                  <GridContainer md={3} direction="column" justify="center" className={isBig ? classes.footerContainer : classes.smallFooterContainer}>
                    <h4>
                      18,90 zł
                    </h4>
                  </GridContainer>
                </GridContainer>

              </CardBody>

            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card classes={additionalCardStyles()} className={classes.card}>
              <CardBody>
                <GridContainer justify="space-between">
                  <GridContainer direction="column" justify="center" md={4} className={classes.additionalOfferHeaderContainer}>
                    <h3 className={classes.cardTitle}>
                      Canal + Select
                    </h3>
                    <h5>
                      6 kanałów 6 HD
                    </h5>
                  </GridContainer>
                  <GridContainer direction="column" justify="center" md={5} className={classes.additionalOfferHeaderContainer}>
                    <img src={require("../../../assets/img/tv/canals.jpg")} className={classes.additionalImage} />
                  </GridContainer>
                  <GridContainer md={3} direction="column" justify="center" className={isBig ? classes.footerContainer : classes.smallFooterContainer}>
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
