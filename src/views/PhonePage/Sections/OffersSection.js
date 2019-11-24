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
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/offersStyle.js";

const useStyles = makeStyles(styles);

export default function OfferSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Telefon</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              {/* <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem> */}
              <h2 className={classes.cardTitle}>
                PODSTAWOWY
                {/* <br /> */}
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h2>
              <CardBody>

                <GridContainer>
                  <GridItem lg={12} className={classes.offerListItem}>
                    100 darmowych minut na numery stacjonarne i komórkowe w Polsce
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Połączenia na numery stacjonarne w Polsce — 10 gr/min
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Połączenia na numery polskich sieci komórkowych — 20 gr/min.
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Połączenia na numery stacjonarne w UE, Stanach Zjednoczonych, Kanadzie, Australii, Norwegii i wielu innych — 30 gr/min.
                  </GridItem>
                </GridContainer>

              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <CardFooter className={classes.justifyCenter}>
                <h4>
                  8,99 PLN/msc
                </h4>
              </CardFooter>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              {/* <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem> */}
              <h2 className={classes.cardTitle}>
                STANDARD
                {/* <br /> */}
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h2>
              <CardBody>

                <GridContainer>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Darmowe, nielimitowane rozmowy na krajowe numery stacjonarne
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    100 darmowych minut na krajowe numery komórkowe
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Połączenia na numery polskich sieci komórkowych — 15 gr/min.
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Połączenia na numery stacjonarne w UE, Stanach Zjednoczonych, Kanadzie, Australii, Norwegii i wielu innych — 20 gr/min.
                  </GridItem>
                </GridContainer>
                

              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <CardFooter className={classes.justifyCenter}>
                <h4>
                  15,99 PLN/msc
                </h4>
              </CardFooter>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              {/* <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem> */}
              <h2 className={classes.cardTitle}>
                PREMIUM
                {/* <br /> */}
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h2>
              <CardBody>

                <GridContainer>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Darmowe, nielimitowane rozmowy na krajowe numery stacjonarne i komórkowe
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Połączenia na numery stacjonarne w UE, Stanach Zjednoczonych, Kanadzie, Australii, Norwegii i wielu innych — 15 gr/min.
                  </GridItem>
                </GridContainer>

              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <CardFooter className={classes.justifyCenter}>
                <h4>
                  25,99 PLN/msc
                </h4>
              </CardFooter>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
