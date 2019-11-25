import React, { useState } from "react";
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
import basicsStyles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/core/SvgIcon/SvgIcon";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(styles);
const useBasicsStyles = makeStyles(basicsStyles);



export function ContactForm() {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();
  const basicsClasses = useBasicsStyles();
  console.log(basicsClasses);
  const handleToggle = value => {
    console.log(value)
    const newChecked = !value;
    setChecked(newChecked);
  };
  return (
    <GridContainer justify="center">
      <GridItem cs={ 12 } sm={ 12 } md={ 8 }>
        <h2 className={ classes.title }>Masz pytania? Napisz do nas!</h2>
        <form>
          <GridContainer>
            <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
              <CustomInput
                labelText="Twoje imię"
                id="name"
                formControlProps={ {
                  fullWidth: true
                } }
              />
            </GridItem>
            <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
              <CustomInput
                labelText="Email"
                id="email"
                formControlProps={ {
                  fullWidth: true
                } }
              />
            </GridItem>
            <CustomInput
              labelText="Wiadomość"
              id="message"
              formControlProps={ {
                fullWidth: true,
                className: classes.textArea
              } }
              inputProps={ {
                multiline: true,
                rows: 5
              } }
            />
            <GridContainer
              className={ basicsClasses.buttonContainer }
              justify="center"
            >
              <GridItem xs={ 12 } sm={ 12 } md={ 12 } className={ basicsClasses.textCenter }>
                <div
                  className={
                    basicsClasses.checkboxAndRadio +
                    " " +
                    basicsClasses.checkboxAndRadioHorizontal
                  }
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={ -1 }
                        onClick={ () => handleToggle(checked) }
                        checkedIcon={ <Check className={ basicsClasses.checkedIcon }/> }
                        icon={ <Check className={ basicsClasses.uncheckedIcon }/> }
                        checked={checked}
                        classes={ {
                          checked: basicsClasses.checked,
                          root: basicsClasses.checkRoot
                        } }
                      />
                    }
                    classes={ { label: basicsClasses.label, root: basicsClasses.labelRoot } }
                    label="Wyrażam zgodę na przetwarzanie danych osobowych zawartych w formularzu przez TvNetCom, w celu kontaktu ze mną odnośnie mojego zapytania. Więcej przeczytaj w polityce prywatności. Zgodnie z artykułem 6 ust. 1 lit Rozporządzenia Parlamentu Europejskiego i Rady UE 2016/679 z dnia 27 kwietnia 2016 w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchyleniem dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)."
                  />
                  </div>
                </GridItem>
              <GridItem xs={ 12 } sm={ 12 } md={ 12 } className={ basicsClasses.textCenter }>
                <Button color="primary">Wyślij</Button>
              </GridItem>
            </GridContainer>
          </GridContainer>
        </form>
      </GridItem>
    </GridContainer>
  )
}

export default function MapSection() {
  const classes = useStyles();
  return (
    <div className={ classes.section }>
      <ContactForm/>
      <GridContainer justify="center">
        <GridItem cs={ 12 } sm={ 12 } md={ 12 }>
          <h2 className={ classes.title }>Odwiedź nas</h2>
        </GridItem>
        <GridItem cs={ 12 } sm={ 12 } md={ 7 } className={ classes.map }>
          <GoogleMap></GoogleMap>
        </GridItem>
        <GridItem cs={ 12 } sm={ 12 } md={ 5 }>
          <h4 className={ classes.description }>TvNetCom</h4>
          <h4 className={ classes.description }>ul. Wólczańska 216</h4>
          <h4 className={ classes.description }>96-420, Łódź</h4>
          <h4 className={ classes.description }>Tel. 666 123 666</h4>
          <h4 className={ classes.description }>e-mail: lubisz@tv.pl</h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
