import React, { useState, useContext } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logo from '../SiteMedia/logo-removebg.png'
import { UserContext } from '../App'

function MainNav({ closeMenu }) {

    const user = useContext(UserContext)

    const logOut = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/logout`,
            "_self"
        )
    }

    return (
        <nav className='main-nav'>

            <div className='close-modal' onClick={() => closeMenu(false)} >

                <div className='close-text'>
                    Close
                </div>

                <div className='close-icon'>
                    <AiOutlineCloseCircle size="1.5em" />
                </div>

            </div>


            <div className='menu'>

                <div className="logo">

                    <img src={logo} alt="logo" />

                </div>

                <ComponentLinks to="/" onClick={() => closeMenu(false)}>
                    <div className='links'>
                        Home
                    </div>

                </ComponentLinks >

                <ComponentLinks to="/about" onClick={() => closeMenu(false)}>
                    <div className='links'>
                        About Us
                    </div>
                </ComponentLinks >
                    {
                        user &&
                <ComponentLinks to="/registration" onClick={() => closeMenu(false)}>

                    <div className='links'>
                        Registration
                    </div>

                </ComponentLinks >
                    }
                {
                    user &&
                    <ComponentLinks to="/events" onClick={() => closeMenu(false)}>

                        <div className='links'>
                            Events
                        </div>

                    </ComponentLinks >
                }



{
                    user &&
                    <ComponentLinks to="/yourevents" onClick={() => closeMenu(false)}>

                        <div className='links'>
                           Your Events
                        </div>

                    </ComponentLinks >
                }

{
                    user &&
                    <ComponentLinks to="/savedevents" onClick={() => closeMenu(false)}>

                        <div className='links'>
                           Saved Events
                        </div>

                    </ComponentLinks >

                    
                }

{
                    user &&
                    <div className='sign-out-details' style={{ background: "white" }}>
                        <button onClick={logOut} className="sign-out">Sign Out</button>
                    </div>
                }

            </div>
        </nav>
    )
}

export default MainNav

function ComponentLinks({ to, children, ...props }) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (


        <Link to={to} {...props} className={isActive ? 'main-active' : ""}>
            {children}
        </Link>

    )

}