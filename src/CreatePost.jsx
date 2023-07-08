import { Avatar } from "@mui/material";
import React, { useState } from "react";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import Icons from "./Icons";
import PhotoSizeSelectActualRoundedIcon from "@mui/icons-material/PhotoSizeSelectActualRounded";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import SendIcon from "@mui/icons-material/Send";

import { db } from "./firebase";
import { useSelector } from "react-redux";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
function CreatePost() {
  const [caption, setCaption] = useState("");

  const user = useSelector((state) => state.user.userInfo);
  
  const postRef = collection(db, "Posts");

  

  const handleClick = async () => {
    if (caption.length > 3) {
      const data = await addDoc(postRef, {
        postText: caption,
        postBy: user.displayName,
        time: serverTimestamp(),
      });
      setCaption("");
    }
  };

  return (
    <div className="createpost">
      <div className="createpost__top">
        {
          <Avatar>
            {user && user.displayName ? user.displayName[0] : ""}
            </Avatar>
        }
        <div className="createpost__input">
          <ModeEditRoundedIcon className="createpost__icon" />
          <input
            value={caption}
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            type="text"
            placeholder="Start a Post"
          />
          <div onClick={handleClick}>
            <SendIcon className="createpost__icon" />
          </div>
        </div>
      </div>
      <div className="createpost__bottom">
        <Icons
          type={"createpost"}
          IconComponent={PhotoSizeSelectActualRoundedIcon}
          iconColor="#378fe9"
          text={"Photo"}
        />
        <Icons
          type={"createpost"}
          iconColor="#5f9b41"
          IconComponent={SmartDisplayRoundedIcon}
          text={"Video"}
        />
        <Icons
          type={"createpost"}
          iconColor={"#c37d16"}
          IconComponent={EventNoteRoundedIcon}
          text={"Events"}
        />
        <Icons
          type={"createpost"}
          iconColor={"#e16745"}
          IconComponent={NewspaperRoundedIcon}
          text={"Article"}
        />
      </div>
    </div>
  );
}

export default CreatePost;
