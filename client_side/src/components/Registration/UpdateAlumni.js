import React,{useState} from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import axios from 'axios'

function UpdateAlumni(props){


    console.log('user update',props.userData)

    const[details,setDetails]=useState({email:props.userData.email,names:props.userData.names,userType:props.userData.type,course:props.userData.course,gradyr:props.userData.gradyr,loading:false})

    const HandleSubmit = async (e) => {
        e.preventDefault();
        setDetails({ loading: true });
    
        const userDetails = {
          email: details.email,
          names: details.names,
          course:details.course,
          gradyr:details.gradyr,
          type:details.userType,
          objId:props.userData._id
          
        };
        try {
          const response = await axios.put(
            `${process.env.REACT_APP_API_URL}/api/UpdateUsers/`,
            userDetails
          );
          props.closeModal(false)
          setDetails({email:props.userData.email,names:props.userData.names,userType:props.userData.type,course:props.userData.course,gradyr:props.userData.gradyr,loading:false}); 
          
       
        } catch (error) {
          setDetails({email:props.userData.email,names:props.userData.names,userType:props.userData.type,course:props.userData.course,gradyr:props.userData.gradyr,loading:false});
          props.closeModal(false)
        }
      };

      console.log(details)

    return(
        <div className="transparent-modal-wrapper">
        <div className='close-modal' onClick={()=>props.closeModal(false)} >

<div className='close-text'>
    Close
</div>

<div className='close-icon'>
    <AiOutlineCloseCircle size="1.5em" />
</div>

</div>

<div className="form-wrapper">

    <div className="add-object">

<h1>Update Alumni</h1>

                <form onSubmit={HandleSubmit}>

                <div className="form-details">
                <label> Email</label>

                <input type="email" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })}  required/>
                </div>

                <div className="form-details">
                <label> Names </label>
                

                <input type="text" value={details.names} onChange={e => setDetails({ ...details, names: e.target.value })}  required/>
                </div>

                <div className="form-details">

                <label> User Type </label>
                
                <input type="text" value={details.userType}  onChange={e => setDetails({ ...details, userType: e.target.value })}  required/>

                </div>

                <div className="form-details">

                <label> Course </label>

                <input type="text" value={details.course}  onChange={e => setDetails({ ...details, course: e.target.value })}  required/>

                </div>

                <div className="form-details">

                <label> Grad Year </label>

                <input type="text" value={details.gradyr}  onChange={e => setDetails({ ...details, gradyr: e.target.value })}  required/>

                </div>

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

export default UpdateAlumni