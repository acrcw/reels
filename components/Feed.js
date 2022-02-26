import React from 'react'
import Navbar from './Navbar'
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Upload from './Upload'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
function Feed() {
  return (
    <div className='feed-container'>
      <Navbar/>
    <Upload/>
    <div className="video-container">
      <div className="post-container">
        <video/>
        <div className="videos-info">
        <div className="avatar_container"> <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{margin:"0.5rem"}}/>
        <p>Name</p></div>
        <div className='post-like'>
          <FavoriteBorder fontSize="large"/>10
        </div>
        </div>
      </div>
      <div className="post-container">
        <video/>

      </div>
    </div>
    </div>
  )
}

export default Feed