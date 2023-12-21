import React, { Fragment, useState, useEffect,useContext } from 'react'
import event1 from '../SiteMedia/event8.jpeg'
import { UserContext } from '../App'
import {BsFillBookmarkFill} from 'react-icons/bs'
import axios from 'axios'


function TopFourEvents(){

    const user = useContext(UserContext)

    const [events, setAllEvents] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchEvents = async () => {

        try {

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/abtevents`)

            setAllEvents(response.data)


            setLoading(false)


        }
        catch (err) {

            setLoading(false)
        }

    }

    useEffect(() => {

        fetchEvents()

    }, [])

    const DateStringFormat = (dateObj) => {

        const StringDate = new Date(dateObj).toLocaleDateString()

        return StringDate
    }

    console.log('about',events)

    return(

        <Fragment>
            
            <h1 className='top-eventsh1'>Latest Events</h1>

        <div className='top-events'>

            

        {
    loading? 

    <div className='loading-status-event'>
  <h1>Loading...</h1>
  <div class="loading-spinner"></div>
</div>

    :
    events.map((details)=>(

                <div className='post' key={details._id}>

                    <div className='image'>

                        <img src={event1} alt="event-img" />

                    </div>

                    <div className='event-details'>

                        <h3>{details.displayName}</h3>

                        <h3>{DateStringFormat(details.date)}</h3>

                        <h3>{details.time}</h3>



                    </div>



                </div>
      )  )

}







        </div>
        </Fragment>
    )
}

export default TopFourEvents