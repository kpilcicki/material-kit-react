import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import GoogleMap from "components/GoogleMap/GoogleMap.js"

import styles from "assets/jss/material-kit-react/views/contactPageSections/contactStyle.js";

const useStyles = makeStyles(styles);

export default function MapSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Masz pytania? Napisz do nas!</h2>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridContainer
                className={classes.buttonContainer}
                justify="center"
              >
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button color="primary">Send Message</Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={12}>
          <h2 className={classes.title}>Odwiedź nas</h2>
        </GridItem>
        <GridItem cs={12} sm={12} md={7} className={classes.map}>
          <GoogleMap></GoogleMap>
        </GridItem>
        <GridItem cs={12} sm={12} md={5}>
          <h4 className={classes.description}>TvNetCom</h4>
          <h4 className={classes.description}>ul. Wólczańska 216</h4>
          <h4 className={classes.description}>96-420, Łódź</h4>
          <h4 className={classes.description}>Tel. 666 123 666</h4>
          <h4 className={classes.description}>e-mail: lubisz@tv.pl</h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
