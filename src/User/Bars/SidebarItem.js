import { ListItemButton, ListItemIcon } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorUser from "../Configuser/colorConfigs";
import { RootState } from "../../redux/store";
import { RouteType } from "../../Super/routes/config";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState);

  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&: hover": {
            backgroundColor: colorUser.sidebar.hoverBg
          },
          backgroundColor: appState === item.state ? colorUser.sidebar.activeBg : "unset",
          paddingY: "35px",
          paddingX: "30px",
          borderRadius: "10px",
        }}
      >
        <ListItemIcon sx={{
          color: colorUser.sidebar.color
        }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        {item.sidebarProps.displayText}
      </ListItemButton>
    ) : null
  );
};

export default SidebarItem;