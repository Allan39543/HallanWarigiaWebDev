import React, { Fragment, useState, useEffect,useContext } from 'react'
import event1 from '../SiteMedia/event8.jpeg'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { UserContext } from '../App'
import { TiTick } from 'react-icons/ti'
import axios from 'axios'

function Events() {

    const user = useContext(UserContext)

    const [events, setAllEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const[loadingEv,setLoadingEv]=useState(false)

    const fetchEvents = async () => {

        try {

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/all`)

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

    const AttendEvent=async(id)=>{

        
        setLoadingEv(true)

        const userDetails = {

            email: user.email,
            eventId:id

            
          };

        try {

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/attend`,userDetails)

            

            setLoadingEv(false)


        }
        catch (err) {

            setLoadingEv(false)
        }
    }

    const SaveEvent=async(id)=>{

        
        setLoadingEv(true)

        const userDetails = {

            email: user.email,
            eventId:id

            
          };

        try {

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/save`,userDetails)

            


            setLoadingEv(false)


        }
        catch (err) {

            setLoadingEv(false)
        }
    }

    console.log('events', events)

    return (

        <Fragment>

            <h1 className='top-eventsh1' id='h1white' >Events</h1>

            <div className='top-events' id='all-events'>

                <h1 className='top-eventsh1' id='top-eventsh1'>Events</h1>


{
    loading? 
    <div class='loading-status-event'>
  <h1>Loading...</h1>
  <div class="loading-spinner"></div>
</div>
    :
    events.map((details)=>(

                <div className='post'>

                    <div className='image'>

                        <img src={event1} alt="event-img" />

                    </div>

                    <div className='event-details'>

                        <h3>{details.displayName}</h3>

                        <div className='btns' >

                            <button onClick={()=>AttendEvent(details._id)}><TiTick />{loadingEv?
                            
                            <div class="request-process-overlay">
                            <div class="request-process-message">
                              Processing Your Request...
                            </div>
                          </div>
                            

                            :"Attend"  }</button>

                            <button onClick={()=>SaveEvent(details._id)}>< BsFillBookmarkFill />{loadingEv?
   <div class="request-process-overlay">
   <div class="request-process-message">
     Processing Your Request...
   </div>
 </div>
                            :"Save"  }</button>

                        </div>

                    </div>



                </div>
      )  )

}



            </div>
        </Fragment>
    )
}

export default Events