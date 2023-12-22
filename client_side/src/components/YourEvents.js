import React, { Fragment, useState, useEffect, useContext } from 'react'
import event1 from '../SiteMedia/event8.jpeg'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { UserContext } from '../App'
import { TiTick } from 'react-icons/ti'
import axios from 'axios'

function YourEvents() {

    const user = useContext(UserContext)

    const [events, setAllEvents] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchEvents = async () => {

        try {

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/attend?userData=${user ? user.email : "invalid-email"}`)

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



    return (

        <Fragment>

            <h1 className='top-eventsh1' id='h1white' >Your Events</h1>

            <div className='top-events' id='all-events'>

                <h1 className='top-eventsh1' id='top-eventsh1'>Your Events</h1>


                {
                    loading ?

                        <div class='loading-status-event'>
                            <h1>Loading...</h1>
                            <div class="loading-spinner"></div>
                        </div>

                        :
                        events.map((details) => (

                            <div className='post' key={details._id}>

                                <div className='image'>

                                    <img src={event1} alt="event-img" />

                                </div>

                                <div className='event-details'>

                                    <h3>{details.eventId.displayName}</h3>

                                    <h3>{DateStringFormat(details.eventId.date)}</h3>

                                    <h3>{details.eventId.time}</h3>



                                </div>



                            </div>
                        ))

                }



            </div>
        </Fragment>
    )
}

export default YourEvents