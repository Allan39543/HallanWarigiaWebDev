import React, { useState, useContext } from "react";
import { UserContext } from '../../App'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import axios from 'axios'

function AddEvents({ closeModal }) {

  const user = useContext(UserContext)

  const [details, setDetails] = useState({ title: "", displayName: "", venue: "", date: "", time: "", type: "", loading: false })


  const HandleSubmit = async (e) => {
    e.preventDefault();
    setDetails({ loading: true });

    const eventDetails = {
      title: details.title,
      displayName: details.displayName,
      date: details.date,
      time: details.time,
      type: details.type,
      venue: details.venue,
      organiser: user.email

    };

    if (eventDetails.title && eventDetails.displayName && eventDetails.date && eventDetails.time && eventDetails.type && eventDetails
      .venue && eventDetails.organiser) {

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/event/`,
          eventDetails
        );

        setDetails({ loading: false })

      } catch (error) {

      }
    }
    else {
      setDetails({ loading: false })
    }
  };

  console.log(details)

  return (
    <div className="transparent-modal-wrapper">
      <div className='close-modal' onClick={() => closeModal(false)} >

        <div className='close-text'>
          Close
        </div>

        <div className='close-icon'>
          <AiOutlineCloseCircle size="1.5em" />
        </div>

      </div>

      <div className="form-wrapper">

        <div className="add-object">

          <h1>Add Event</h1>

          <form onSubmit={HandleSubmit}>

            <div className="form-details">
              <label> Event Title</label>

              <input type="text" onChange={e => setDetails({ ...details, title: e.target.value })} required />
            </div>

            <div className="form-details">
              <label> Event Display Name </label>


              <input type="text" onChange={e => setDetails({ ...details, displayName: e.target.value })} required />
            </div>

            <div className="form-details">
              <label> Event Venue</label>


              <input type="text" onChange={e => setDetails({ ...details, venue: e.target.value })} required />
            </div>

            <div className="form-details">
              <label> Date </label>


              <input type="date" id="dateInput" name="dateInput" onChange={e => setDetails({ ...details, date: e.target.value })} />
            </div>

            <div className="form-details">
              <label> Time </label>
              <input type="time" id="timeInput" name="timeInput" onChange={e => setDetails({ ...details, time: e.target.value })} />
            </div>

            <div className="form-details">
              <label> Event Type </label>


              <select id="selectInput" name="selectInput" onChange={e => setDetails({ ...details, type: e.target.value })} >
                <option value="">Select</option>
                <option value="professional">Professional Development</option>
                <option value="networking">networking</option>
                <option value="campusevents">campus events</option>
              </select>
            </div>






            {/* <div className="form-details">

                <label> Media </label>

                <input type="file" required/>

                </div> */}

            <div className="form-details">
              <button type="submit" disabled={details.loading}>
                {
                  details.loading ? "Please Wait..."
                    :
                    "Register"

                }
              </button>
            </div>

          </form>

        </div>


      </div>

    </div>
  )
}

export default AddEvents