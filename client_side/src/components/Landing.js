import React, { Fragment } from 'react'
import "./style.css"
import "./responsive.css"
import bgvideo from '../SiteMedia/bg2.mp4'
import { BiDownArrow } from 'react-icons/bi'
import Header from './Header'
import TopFourEvents from './TopFourEvents'

function Landing() {

    return (

        <Fragment>

            <div className='landing-container'>

                {/* <Header /> */}

                <video autoPlay muted loop>
                    <source src={bgvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="overlay"></div>

                <div className='landing-text'>

                    <h1>Alumni Connect</h1>

                    <p>Explore, Experience, Enjoy: Events That Inspire</p>

                    <div className='arrow-down'><BiDownArrow size="5em" /></div>

                </div>
            </div>

            <TopFourEvents />

        </Fragment>
    )
}

export default Landing