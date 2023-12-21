import React,{useState,useContext,useEffect} from "react";
import logo from '../SiteMedia/logo-removebg.png'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import MainNav from "./MainNav";
import { AiOutlineLogin } from 'react-icons/ai'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import SignIn from "./SignIn";
import { UserContext } from '../App'


function Header() {

    const user = useContext(UserContext)

    const [menu, setMenu] = useState(false)
    const [signIn,setSignIn]=useState(false)
    

    return (

        <div className="header">


            <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo" />
                </Link>
            </div>
            
            <div className="nav-sidebar-modal">

                {
                    user ?
                    <div className="search" onClick={() => setSignIn(true)} >


                    <div className="icon">
                        <img src={user.picture} alt="profile" />
                    </div>

                    {/* <div className="text" id="signed-in-name">
                       {user.name}
                    </div> */}

                </div>
:
                <div className="search" onClick={() => setSignIn(true)}>

                    <div className="icon">
                        <AiOutlineLogin size="1.5em" />
                    </div>

                    <div className="text">
                        Sign In
                    </div>

                </div>
}

                <div className="menu-modal" onClick={() => setMenu(true)}>

                    <div className="icon">
                        <GiHamburgerMenu size="1.5em" />
                    </div>

                    <div className="text">
                        Menu
                    </div>

                </div>

            </div>

            {
                menu && <MainNav closeMenu={setMenu} />
            }

{
                signIn && <SignIn />
            }

        </div>
    )
}

export default Header