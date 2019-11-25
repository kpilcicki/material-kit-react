import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "70px 0",
    // margin: "0 -26px",
    textAlign: "center",
    backgroundColor: "papayawhip"
  },
  title: {
    ...title,
    // marginBottom: "1rem",
    // marginTop: "30px",
    // marginLeft: "50px",
    // marginRight: "50px",
    // minHeight: "32px",
    textDecoration: "none",
    color: "palevioletred"
  },
  promoTitle: {
    color: "Sienna"
  },
  promoPrice: {
    color: "palevioletred"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
};

export default teamStyle;
