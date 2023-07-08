import { Avatar } from '@mui/material'
import React, { forwardRef, useRef } from 'react';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import Icons from './Icons';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Post =forwardRef((props, ref)=>{


  return (
    <div ref={ref} className='post'>
      <div className="post__top">
      { <Avatar> {props.name[0]} </Avatar>
        }
        <p>{props.name}</p>
      </div>
      <div className="post__middle">
        <p>{props.text}</p>
      </div>
      <div className="post__bottom">
      <Icons
          IconComponent={ThumbUpRoundedIcon}
          text={"Like"}
          type={"postIcons"}
        />
      <Icons
          IconComponent={CommentRoundedIcon}
          text={"Comment"}
          type={"postIcons"}
        />
      <Icons
          IconComponent={AutorenewRoundedIcon}
          text={"Repost"}
          type={"postIcons"}
        />
      <Icons
          IconComponent={SendRoundedIcon}
          text={"Send"}
          type={"postIcons"}
        />
      </div>
    </div>
  )
})

export default Post
