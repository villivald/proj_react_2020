import { FunctionComponent } from "react";
import logo from "../images/logo/103.webp";
import { Link } from "react-router-dom";
import { Frame } from "framer";

const Logo: FunctionComponent = () => {
  const variants = {
    variantA: { scale: 1, rotate: 0 },
    variantB: { scale: 1.2, rotate: 90 },
  };

  return (
    <div className="header">
      <Frame
        initial={"variantA"}
        whileHover={"variantB"}
        variants={variants}
        size={150}
        radius={30}
        background={"hsla(0, 100%, 50%, 0)"}
      >
        <Link to="/">
          <div>
            <img className="logo" src={logo} alt="Logo" width="150px" />
          </div>
        </Link>
      </Frame>
    </div>
  );
};

export default Logo;
