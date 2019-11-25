/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from "react-router-dom";

// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PDF from "./rules.pdf";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(styles);

function onResumeClick() {
  window.open(PDF);

}

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <a onClick={onResumeClick} className={classes.a}>Regulamin</a>
          {/*<Link className={classes.a} to={"../../assets/rules.pdf"}>*/}
          {/*    Regulamin*/}
          {/*</Link>*/}
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} TvNetCom
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
