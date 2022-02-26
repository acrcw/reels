import React, { useContext, useEffect,router } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image'
import insta from '../../assets/insta.png'
import Link from 'next/link';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { getStorage, ref } from "firebase/storage";
// import { router } from 'next/router';
import {useRouter} from 'next/router';
import {AuthContext} from '../../context/auth'
import {getDownloadURL,uploadBytesResumable} from 'firebase/storage'
import {storage} from '../../firebase'
import { speedDialActionClasses } from '@mui/material';
import { SelectUnstyledContext } from '@mui/base';
function Index() {
  const router = useRouter()
  const storage = getStorage()
  const [email,setEmail]= React.useState('')
  const [password,setPassword]=React.useState('')
  const [name,setName]=React.useState('')
  const [file,setFile]=React.useState(null)
  const [error,setError] = React.useState('')
  const[loading,setLoading] = React.useState('')
  const {signup,user}= useContext(AuthContext)
  const handleClick = async() => {
    
    try{
        setLoading(true)
        setError('')
        const user = await signup(email,password)
        console.log("Signed up")

        const storageRef = ref(storage, `${user.uid}/Profile`);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      console.log('File available at', downloadURL);
      let obj={
        name:name,
        email:email,
        uid:user.user.uid,
        photoURL : downloadURL
      }
      console.log(await setDoc(doc(db,'users',user.user.uid),obj));
      console.log("document added");
    });
  }
);

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
            console.log("Not Logged in")
        }
    },[user])
  

  return (

      <div className="signup-container">
    <div className='signup-card'>
        <Image src={insta} alt={hdeb} height="300px"/>
    <TextField size="small" id="outlined-basic" margin='dense' fullWidth label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <TextField size="small" id="outlined-basic" margin='dense' fullWidth label="Password" type="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} />
    <TextField size="small" id="outlined-basic" margin='dense' fullWidth label="Full Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
    <Button variant="outlined" fullWidth component="label" style={{marginTop:'1rem'}}>
        <input type="file" accept="image/*" style={{display:'none'}} onChange={(e)=>setFile(e.target.files[0])}/>
          Upload
        </Button>
        <Button variant="contained" fullWidth component="span" style={{marginTop:'1rem'}} onClick={handleClick} disabled={loading}>
        
          Sign up
        </Button>
    </div>
    <div className='bottom-card'>
        Already Have an Account? <span style={{color:'blue'}}><Link href="/login">Login</Link></span>
    </div>
    </div>
  )
}

export default Index;