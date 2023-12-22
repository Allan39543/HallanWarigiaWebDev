import React, { useEffect, useState, useContext } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { nanoid } from 'nanoid';
import { GrUpdate } from 'react-icons/gr'
import { AiTwotoneDelete } from 'react-icons/ai'
import { UserContext } from '../../App'
import axios from "axios";
import UpdateAlumni from "./UpdateAlumni";

function AlumniList(props) {

    const user = useContext(UserContext)

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [updateAlumni, setUpdateAlumni] = useState(false)
    const [userUpdate, setUserUpdate] = useState(null)





    const fetchUsers = async () => {

        try {

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/allUsers`)

            setUsers(response.data)

            setLoading(false)

        }
        catch (err) {

            setLoading(false)
        }

    }

    const dltuser = async (id) => {

        try {


            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/deleteUser?userId=${id}`)



            fetchUsers()

            setLoading(false)



        }
        catch (err) {

            setLoading(false)
        }
    }

    useEffect(() => {


        fetchUsers()

    }, [])

    const objlength = (id) => {

        return (id)
    }

    console.log(users)

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

            <div className="form-wrapper" id="list-div">

                <table id="table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Names</th>
                            <th>User Type</th>
                            <th>Course</th>
                            <th>Graduation Year</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>


                    <tbody>

                        {
                            loading ?

                                <div class='loading-status-event'>
                                    <h1>Loading...</h1>
                                    <div class="loading-spinner"></div>
                                </div>

                                :
                                users.map(user => (
                                    <tr key={nanoid()}>

                                        <td>{user.email}</td>
                                        <td>{user.names}</td>
                                        <td>{user.type}</td>
                                        <td>{user.course}</td>
                                        <td>{user.gradyr}</td>
                                        <td ><GrUpdate size="1.1em" className="center-td-content" onClick={() => {

                                            setUpdateAlumni(true);
                                            setUserUpdate(user)
                                            objlength(user._id);
                                        }} /></td>
                                        <td ><AiTwotoneDelete size="1.1em" color="red" className="center-td-content" onClick={() => dltuser(user._id)} /></td>



                                    </tr>
                                ))
                        }

                    </tbody>

                </table>

            </div>

            {
                updateAlumni && <UpdateAlumni closeModal={setUpdateAlumni} userData={userUpdate} id={objlength} />
            }

        </div>
    )
}

export default AlumniList