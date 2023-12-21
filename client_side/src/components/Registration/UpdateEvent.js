import React, { useState,useContext } from "react";
import { UserContext } from '../../App'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import axios from 'axios'

function UpdateEvent(props) {

  const user = useContext(UserContext)

  console.log("props",props.eventData)

  const [details, setDetails] = useState({ title: props.eventData[0].title , displayName:props.eventData[0].displayName , venue: props.eventData[0].venue, date: props.eventData[0].date, time:props.eventData[0].time, type:props.eventData[0].type, loading: false })
  

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setDetails({ loading: true });

    const eventDetails = {
      title: details.title,
      displayName: details.displayName,
      date: details.date,
      time: details.type,
      type: details.type,
      venue: details.venue,
      organiser:user.email

    };
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/UpdateEvent/`,
        eventDetails
      );

      setDetails({ title: props.eventData.title , displayName:props.eventData.displayName , venue: props.eventData.venue, date: props.eventData.date, time:props.eventData.time, type:props.eventData.type, loading: false });
    } catch (error) {
      setDetails({ title: props.eventData.title , displayName:props.eventData.displayName , venue: props.eventData.venue, date: props.eventData.date, time:props.eventData.time, type:props.eventData.type, loading: false });
    }
  };

  console.log('details',details)

  return (
    <div className="transparent-modal-wrapper">
      <div className='close-modal' onClick={() => props.closeModal(false)} >

        <div className='close-text'>
          Close
        </div>

        <div className='close-icon'>
          <AiOutlineCloseCircle size="1.5em" />
        </div>

      </div>

      <div className="form-wrapper">

        <div className="add-object">

          <h1>Update Event</h1>

          <form onSubmit={HandleSubmit}>

          <div className="form-details">
  <label> Event Title</label>
  <input
    type="text"
    value={details.title}
    onChange={e => setDetails({ ...details, title: e.target.value })}
    required
  />
</div>

<div className="form-details">
  <label> Event Display Name </label>
  <input
    type="text"
    value={details.displayName}
    onChange={e => setDetails({ ...details, displayName: e.target.value })}
    required
  />
</div>

<div className="form-details">
  <label> Event Venue</label>
  <input
    type="text"
    value={details.venue}
    onChange={e => setDetails({ ...details, venue: e.target.value })}
    required
  />
</div>

<div className="form-details">
  <label> Date </label>
  <input
    type="date"
    id="dateInput"
    name="dateInput"
    value={details.date}
    onChange={e => setDetails({ ...details, date: e.target.value })}
  />
</div>

<div className="form-details">
  <label> Time </label>
  <input
    type="time"
    id="timeInput"
    name="timeInput"
    value={details.time}
    onChange={e => setDetails({ ...details, time: e.target.value })}
  />
</div>

<div className="form-details">
  <label> Event Type </label>
  <select
    id="selectInput"
    name="selectInput"
    value={details.type}
    onChange={e => setDetails({ ...details, type: e.target.value })}
  >
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
                  "Update"
              
}
              </button>
            </div>

          </form>

        </div>


      </div>

    </div>
  )
}

export default UpdateEvent