import React, { useState, useContext, useEffect, Fragment } from "react";
import { AiOutlineUserAdd } from 'react-icons/ai'
import { VscDiffAdded } from 'react-icons/vsc'
import { CiCircleList } from 'react-icons/ci'
import { CgUserList } from 'react-icons/cg'
import AddAlumniModal from "./AddAlumniModal";
import AlumniList from "./AlumniList";
import EventList from "./EventList";
import AddEvents from "./AddEvents";
import { UserContext } from '../../App'
import axios from "axios";

function RegistrationPanel() {

    const user = useContext(UserContext)

    const [addAlumni, setAddAlumni] = useState(false)
    const [alumniList, setAlumniList] = useState(false)
    const [events, setEvents] = useState(false)
    const [eventList, setEventList] = useState(false)
    const [loading, setLoading] = useState(true)
    const [verify, setVerify] = useState([])

    useEffect(() => {

        const verifyUser = async () => {

            try {


                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/verify?user=${user ? user.email : ""}`)

                setVerify(response.data)

                setLoading(false)

            }
            catch (err) {

                setLoading(false)
            }

        }

        verifyUser()

    }, [])

    console.log(verify.message)
    return (

        <Fragment>
            {
                loading ? <h1 className="loading">Loading...</h1>
                    :
                    <div className="regcont">
                        {
                            user && verify.message === "UserExists"
                                ?
                                <div className="event-modals">
                                    {
                                        verify.type === "Admin" ?
                                            <div className="reg-modal" onClick={() => setAddAlumni(true)} ><AiOutlineUserAdd size='6em' /> <h1>Add Alumni</h1> </div>
                                            :
                                            ""
                                    }

                                    {
                                        verify.type === "Admin" ?
                                            <div className="reg-modal" onClick={() => setAlumniList(true)}><CgUserList size='6em' /> <h1>Alumni List</h1></div>
                                            :
                                            ""
                                    }

                                    <div className="reg-modal" onClick={() => setEvents(true)}><VscDiffAdded size='6em' /> <h1>Add Events</h1></div>

                                    <div className="reg-modal" onClick={() => setEventList(true)}><CiCircleList size='6em' /> <h1>Event List</h1></div>

                                </div>

                                :
                                <h1>User Not Registered</h1>
                        }

                        {addAlumni && <AddAlumniModal closeModal={setAddAlumni} />}
                        {alumniList && <AlumniList closeModal={setAlumniList} />}
                        {events && <AddEvents closeModal={setEvents} />}
                        {eventList && <EventList type={verify.type} closeModal={setEventList} />}

                    </div>
            }

        </Fragment>


    )
}

export default RegistrationPanel