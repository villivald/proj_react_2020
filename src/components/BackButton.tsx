import { useHistory } from "react-router-dom";
import "../css/backbutton.css";

const BackButton = () => {
  const history = useHistory();

  const routeChange = () => {
    history.goBack();
  };
  return (
    <button className="backButton" onClick={routeChange}>
      Back
    </button>
  );
};

export default BackButton;
