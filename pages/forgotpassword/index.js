import React, { useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image'
import { router } from 'next/router';
import insta from '../../assets/insta.png'
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../assets/img2.jpg'
import bg2 from '../../assets/img3.jpg'
import bg3 from '../../assets/img4.jpg'
import bg4 from '../../assets/img5.jpg'
import {AuthContext} from '../../context/auth'
import {useRouter} from 'next/router'
import Link from 'next/link';
function Index() {
    const router = useRouter()
    const [email,setEmail]= React.useState('')
    const [password,setPassword]=React.useState('')
    const [error,setError] = React.useState('')
    const[loading,setLoading] = React.useState('')
    const {forgot,user}= useContext(AuthContext)
    const handleClick = async() => {
        try{
            setLoading(true)
            setError('')
            await forgot(email)
            console.log("Email sent")
            router.push('/login')
        }
        catch(err)
        {
            console.log(err)
            setError(err.message)
            setTimeout(()=>{
                setError('')
            },2000)

        }
        setLoading(false)
    }
    useEffect   (()=>
    {
        if(user)
        {
                router.push('/')
        }
        else
        {
            console.log("user not found")
        }
    },[user])
    return (
        <div className="login-container">
            <div className="carbg" >
                <div className='car'>
                <Carousel showIndicators={false}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                showArrows={false}
                interval={2000}
                autoPlay={true}>
                <Image src={bg1} alt={"hello"}></Image>
                <Image src={bg2} alt={"hello2"}></Image>
                <Image src={bg3} alt={"hello3"}></Image>
                <Image src={bg4} alt={"hello4"}></Image>
            </Carousel></div>
            </div>
            <div>
                <div className='login-card'>
                    <Image src={insta} alt={"hello9"}/>
                    <TextField size="small" id="outlined-basic" margin='dense' fullWidth label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {/* <TextField size="small" id="outlined-basic" margin='dense' fullWidth label="Password" type="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} /> */}
                    {/* <TextField size="small" id="outlined-basic" margin='dense' fullWidth label="Full Name" variant="outlined" /> */}
                    {/* <Button variant="outlined" fullWidth component="label" style={{marginTop:'1rem'}}>
        <input type="file" accept="image/*" style={{display:'none'}}/>
          Upload
        </Button> */}
                    {
                        error != '' && 
                        <div style={{ color: 'red' }}>{error}</div>
                    }
                    <Button variant="contained" fullWidth component="span" onClick={handleClick} disabled={loading} style={{ marginTop: '1rem' }}>

                       Send Password on Email
                    </Button>
                    {/* <div style={{ color: 'blue', marginTop: '0.5 rem' }}>Forgot Password</div> */}
                </div>
                <div className='bottom-card'>
                    Don&apos;t Have an Account? <span style={{ color: 'blue' }}><Link href="/signup"> Sign up</Link></span>
                </div>
            </div>
        </div>

    )
}

export default Index