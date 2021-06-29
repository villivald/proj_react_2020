import { FunctionComponent } from "react";
import { withStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Colors from "../constants/colors";
import chipCloudData from "../data/chipCloudData";

const ChipCloud: FunctionComponent<{ ChipColor: string }> = (props) => {
  const StyledChip = withStyles({
    root: {
      backgroundColor: props.ChipColor,
      color: Colors.richBlack,
      fontFamily: "Mate, serif",
    },
  })(Chip);
  return (
    <div className="chip-grid">
      {chipCloudData.map((item) => (
        <StyledChip
          key={item.label}
          avatar={<Avatar alt={`${item.label} logo`} src={item.src}></Avatar>}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default ChipCloud;
