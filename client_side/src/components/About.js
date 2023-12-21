import React, { Fragment } from "react";
import aboutimg from '../SiteMedia/aboutbg.png'
import TopFourEvents from "./TopFourEvents";

function About(){

    return(
        <Fragment>
            <div className="about">

        <div className="about-container">

            <div className="about-wrapper">

                <div className="about-text">

                    <h1>About AlumniConnect</h1>

                    <p>
                        Welcome to our vibrant alumni community, where connections thrive beyond graduation. Our alumni website is a dynamic platform designed to foster a sense of belonging and shared experiences among former students. Whether you're a recent graduate or reconnecting after years, this space is your digital hub for networking, event organization, and reminiscing about the good old days. Here, you can create, organize, and participate in a variety of events that celebrate achievements, foster professional growth, and simply allow you to relive the camaraderie of your alma mater. Join us in building lasting connections, making memories, and celebrating the journey that unites us as proud alumni. Welcome home!
                        </p>


                </div>

                <div className="about-img">

                    <img src={aboutimg} alt="image"/>

                    <h1>Alumni Unity Hub</h1>

</div>

            </div>

           

        </div>
        <TopFourEvents />
        </div>

        

        </Fragment>
    )
}

export default About