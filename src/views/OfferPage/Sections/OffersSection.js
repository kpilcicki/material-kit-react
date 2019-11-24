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
import basicCard from "assets/jss/material-kit-react/components/cardStyle.js";

const useStyles = makeStyles(styles);
const basicCardStyles = makeStyles(basicCard);

export default function OfferSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Telewizja</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card classes={basicCardStyles()}>
              {/* <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem> */}
              <h2 className={classes.cardTitle}>
                PODSTAWOWY
                {/* <br /> */}
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h2>
              <CardBody>
                <p className={classes.description}>
                  Pakiet PODSTAWOWY jest idealny dla osób, które nie potrzebują duzego wyboru róznorodnych stacji, lecz czasami relaksują się przed swoim ulubionym programem.
                </p>

                <GridContainer>
                  <GridItem lg={12} className={classes.offerListItem}>
                    25 podstawowych programów
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    5 programów muzycznych
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    3 programy sportowe
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <CardFooter className={classes.justifyCenter}>
                  <h4>
                    15 PLN/msc
                  </h4>
                </CardFooter>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card classes={basicCardStyles()}>
              {/* <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem> */}
              <h2 className={classes.cardTitle}>
                STANDARD
                {/* <br /> */}
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h2>
              <CardBody>
                <p className={classes.description}>
                  Pakiet STANDARD zapewni rozrywke dla całej rodziny. Wiele kanałów tematyczych i sportowych oraz kanały dla dzieci pozwolą każdemu cieszyć się jego ulubionym programem.
                </p>
                <GridContainer>
                  <GridItem lg={12} className={classes.offerListItem}>
                    25 podstawowych programów
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    15 programów muzycznych
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    30 programów sportowych
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    10 programów popularnonaukowych
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    10 programów dla dzieci
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <CardFooter className={classes.justifyCenter}>
                  <h4>
                    35 PLN/msc
                  </h4>
                </CardFooter>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card classes={basicCardStyles()}>
              {/* <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem> */}
              <h2 className={classes.cardTitle}>
                PREMIUM
                {/* <br /> */}
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h2>
              <CardBody>
                <p className={classes.description}>
                  Pakiet PREMIUM przeznaczony jest dla największych kinomanów. Każdy fan telewizyjnych show oraz seriali znajdzie tutaj coś dla siebie.
                </p>
                <GridContainer>
                  <GridItem lg={12} className={classes.offerListItem}>
                    25 podstawowych programów
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    15 programów muzycznych
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    30 programów sportowych
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    20 programów popularnonaukowych
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    20 programów dla dzieci
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    10 programów dla kinomanów
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <CardFooter className={classes.justifyCenter}>
                  <h4>
                    70 PLN/msc
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
