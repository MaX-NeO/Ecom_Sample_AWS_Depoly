import React from 'react'
import { useState, useEffect } from 'react';
import { getUser, deleteUser } from '../../../service/api';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Trash, FileEdit, PlusCircle, Mail, Power } from 'lucide-react';
import Layout from '../Layout/Layout';
const ViewUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await getUser()
      setUsers(response.data);
    }

    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, [])

  const handleEdit = (id) => {
    navigate(`/admin/user/edit/${id}`);
  }
  const handleDelete = async (id) => {
    try {
      const res = await deleteUser(id);
      console.log(res.status)
      if (res.status == 200) {
        toast.success('Successfully User Deleted !');
      }
      fetchusers();
    }
    catch (error) {
      console.log(error);
    }
  }

  // const routeAdd = () => {
  //   navigate('/admin/user/add')
  // }
  // const routeLogout = () => {
  //   navigate('/')
  // }
  return (
    <>
      <Layout />
      <div className='mainx'>
        <div className='shadow bg-white'>
          <table className='data-table'>
            <thead>
              <tr>

                <th>
                  Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Phone
                </th>
                <th>
                  Password
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.uid}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td>
                  <td>
                    <button className='data-btn-mini bg-white shadow' onClick={() => handleEdit(user.uid)}><FileEdit color="#0040ff" /></button>
                    <button className='data-btn-mini bg-white shadow' onClick={() => handleDelete(user.uid)}><Trash color="#ff0000" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Toaster />

        {/* <button onClick={routeLogout} className='route-btn-2 bg-white'><Power color="#ff0000" /></button> */}
        {/* <button onClick={routeAdd} className='route-btn-1 bg-white'><PlusCircle color="#25db00" /></button> */}
      </div>

    </>
  )
}
export default ViewUsers;