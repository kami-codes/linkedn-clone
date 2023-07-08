import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Icons from "./Icons";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import "./header.css";
import { useSelector } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {

  const user = useSelector((state)=> state.user)


  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png?20210220164014"
          alt=""
        />
        <div className="header__search">
          <SearchIcon className="header__searchIcon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <Icons IconComponent={HomeRoundedIcon} text={"Home"} type={"header"} />
        <Icons
          IconComponent={SupervisorAccountRoundedIcon}
          text={"Network"}
          type={"header"}
        />
        <Icons
          IconComponent={BusinessCenterRoundedIcon}
          text={"Jobs"}
          type={"header"}
        />
        <Icons
          IconComponent={CommentRoundedIcon}
          text={"Messages"}
          type={"header"}
        />
        <Icons
          IconComponent={NotificationsRoundedIcon}
          text={"Notifications"}
          type={"header"}
        />
        <Icons
          isavatar={true}
          text={"me"}
        />
        <Icons
          logout={true}
          IconComponent={LogoutIcon}
          text={"Logout"}
          type={"header"}
        />
      </div>
    </div>
  );
}

export default Header;
