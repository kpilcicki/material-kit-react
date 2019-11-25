import { title } from "assets/jss/material-kit-react.js";

const contactStyle = {
  section: {
    padding: "70px 0",
    marginTop: "100px"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#2b2b2b",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center",
    padding: "20px 15px"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  buttonContainer: {
    width: "100%",
  },
  map: {
    height: "400px",
    paddingLeft: "60px"
  },
  "@media (max-width: 992px)": {
    map: {
      paddingLeft: "0"
    }
  }
};

export default contactStyle;
