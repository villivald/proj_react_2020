import { lazy, Suspense, FunctionComponent } from "react";
import Toggle from "./Toggle";
import Dropdown from "./Dropdown";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import BeatLoader from "react-spinners/BeatLoader";
import Colors from "../constants/colors";
import "../css/menu.css";

const Logo = lazy(() => import("./Logo"));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Menu: FunctionComponent<{
  menuStyle: string;
  ButtonDisplay: any;
  mainStyle: any;
  Pic: string;
  setMainStyle: any;
}> = (props) => {
  const classes = useStyles();

  return (
    <div className="stickyHeader">
      <div className="wrapper">
        <div className={props.menuStyle}>
          <div className="switch">
            <Toggle />
          </div>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 100,
                }}
              >
                <BeatLoader color={Colors.blog} size={30} loading={true} />
              </div>
            }
          >
            <Logo />
          </Suspense>
          <button
            style={{ display: props.ButtonDisplay }}
            className="theme-btn"
            onClick={() => {
              props.setMainStyle(!props.mainStyle);
            }}
          >
            <Avatar
              src={props.Pic}
              className={classes.large}
              alt={"dark theme button"}
            />
          </button>
          <div className="drop">
            <Dropdown
              DropDownMenuColor={props.mainStyle ? "orange" : "dark"}
              DropDownMenuStyle={props.mainStyle ? "filled" : "outline"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
