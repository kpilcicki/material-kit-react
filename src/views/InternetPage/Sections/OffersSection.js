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
      <h2 className={classes.title}>Internet</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.internetCard}>
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
                  Pakiet PODSTAWOWY jest idealny dla osób, które potrzebują stablinego łącza do przeglądania internetu.
                </p>

                <GridContainer>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Internet światłowodowy
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Limit danych 100 GB
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Umowa na q2 miesiące
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Prędkość do 10 Mb/s
                  </GridItem>
                </GridContainer>
                

              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <CardFooter className={classes.justifyCenter}>
                <h4>
                  20 PLN/msc
                </h4>
              </CardFooter>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.internetCard}>
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
                  Pakiet STANDARD jest przeznaczony dla miłośników wszelkiego rodzaju multimediów. Świetnie sprawdzi się do oglądania filmów nawet na kilku urządzeniach jednocześnie.
                </p>

                <GridContainer>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Internet światłowodowy
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Bez limitów danych
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Umowa na 24 miesiące
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Prędkość do 50 Mb/s
                  </GridItem>
                </GridContainer>
                

              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <CardFooter className={classes.justifyCenter}>
                <h4>
                  39 PLN/msc
                </h4>
              </CardFooter>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.internetCard}>
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
                  Pakiet PREMIUM przeznaczonych jest dla najbardziej wymagających. Gry, multimedia oraz obsługa wielu urządzeń nie będzie problemem dla takiego łącza.
                </p>

                <GridContainer>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Internet światłowodowy
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Bez limitów danych
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Umowa na 24 miesiące
                  </GridItem>
                  <GridItem lg={12} className={classes.offerListItem}>
                    Prędkość do 100 Mb/s
                  </GridItem>
                </GridContainer>

              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <CardFooter className={classes.justifyCenter}>
                <h4>
                  65 PLN/msc
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
