import React from "react";
import { withStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Colors from "../constants/colors";

const StyledChip = withStyles({
  root: {
    backgroundColor: Colors.header,
  },
})(Chip);

const ChipCloud = () => {
  return (
    <div
      style={{
        display: "grid",
        gridGap: 20,
        gridTemplateColumns: "repeat(3, 160px)",
        paddingTop: 15,
      }}
    >
      <StyledChip
        avatar={
          <Avatar
            src={
              "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
            }
          ></Avatar>
        }
        label="HTML"
        color="primary"
      />
      <StyledChip
        avatar={
          <Avatar
            src={
              "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            }
          ></Avatar>
        }
        label="CSS"
        color="primary"
      />
      <StyledChip
        avatar={
          <Avatar
            src={
              "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            }
          ></Avatar>
        }
        label="JavaScript"
        color="primary"
      />
      <StyledChip
        avatar={
          <Avatar
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            }
          ></Avatar>
        }
        label="React"
        color="primary"
      />
      <StyledChip
        avatar={
          <Avatar
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            }
          ></Avatar>
        }
        label="React Native"
        color="primary"
      />

      <StyledChip
        avatar={
          <Avatar
            src={
              "https://turbologo.ru/blog/wp-content/uploads/2018/10/wordpress-600x381.png"
            }
          ></Avatar>
        }
        label="WordPress"
        color="primary"
      />
      <StyledChip
        avatar={
          <Avatar
            src={
              "https://banner2.cleanpng.com/20180802/vty/kisspng-clip-art-microsoft-azure-sql-database-microsoft-sq-skills-5b63119fd6c064.4634905815332192318796.jpg"
            }
          ></Avatar>
        }
        label="SQL"
        color="primary"
      />
      <StyledChip
        avatar={
          <Avatar
            src={"https://git-scm.com/images/logos/logomark-orange@2x.png"}
          ></Avatar>
        }
        label="Git"
        color="primary"
      />
      <StyledChip
        avatar={
          <Avatar
            src={
              "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            }
          ></Avatar>
        }
        label="GitHub"
        color="primary"
      />
    </div>
  );
};

export default ChipCloud;
