import React, { useContext } from "react";
import { FcGoogle } from 'react-icons/fc'
import { UserContext } from '../App'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function SignIn() {

    const user = useContext(UserContext)

    const googleAuth = () => {
        window.location.href = `${process.env.REACT_APP_API_URL}/auth/google/callback`;
    }

    return (

        <div className="sign-in">
            <Link to="/">
                  <div className='close-modal' id="close-modal" >

<div className='close-text'>
  Close
</div>

<div className='close-icon'>
  <AiOutlineCloseCircle size="1.5em" />
</div>

</div>
</Link>

            {
                user && <h1>Switch Accounts</h1>
            }

            <div className='sign-in-page'>

                {/* */}
                <button onClick={googleAuth}  ><FcGoogle size='1.5em' className='google-icon' /> <h4>Continue With Google</h4> </button>



            </div>

        </div>
    )
}

export default SignIn