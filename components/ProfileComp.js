import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
function ProfileComp() {
  return (
    <div><Navbar/>
    <div>
        <div className='profile_upper'>
            <Image src='https://lh3.googleusercontent.com/-4weFyupH6Wg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm_hznvM4cc-mrKa6c7b0lsvmSTcA/photo.jpg?sz=46' alt={fdgsd} style={{height:"8rem",width:"8rem", borderRadius:"50%"}}/>
            <div style={{flexBasis:"40%"}}>
                <h1>name</h1>
                <h1>posts:!0</h1>
            </div>
            </div>
            <hr/>
            <div className='profile_videos'>
            <video src="https://www.youtube.com/watch?v=SFcvX2rENL4"/>
            <video/>
            <video/>
            <video/>
            <video/>
        </div>
    </div>
    </div>
  )
}

export default ProfileComp