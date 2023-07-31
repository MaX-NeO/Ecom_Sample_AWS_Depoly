import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { getFeedback, deleteFeedback } from '../../../service/api';
import { Trash, PlusCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
const ViewFeedbacks = () => {

  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const response = await getFeedback();
      setFeedbacks(response.data);
    }

    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchFeedbacks();
  }, [])


  const handleDeleteFeedback = async (id) => {
    try {
      const res = await deleteFeedback(id);
      console.log(res.status)
      if (res.status == 200) {
        toast.success('Successfully Feedback Deleted !');
      }
      fetchFeedbacks();
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <Layout />
      <div className='mainx'>

        <div className='shadow bg-white'>
          <table className='data-table'>
            <thead>
              <tr>
                <th>
                  Feedback ID
                </th>
                <th>
                  User Name
                </th>
                <th>
                  User Email
                </th>
                <th>
                  Question
                </th>
                <th>
                  Answers
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <tr key={feedback.fid}>
                  <td>{feedback.fid}</td>
                  <td>{feedback.uname}</td>
                  <td>{feedback.uemail}</td>
                  <td>Rate Your Experience</td>
                  <td>{feedback.answer}</td>
                  <td>
                    <button className='data-btn-mini bg-white shadow' onClick={() => handleDeleteFeedback(feedback.fid)}><Trash color="#ff0000" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Toaster />
      </div>

    </>
  )
}
export default ViewFeedbacks;