import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { ChevronLeftCircle } from 'lucide-react';
import { addFeedback } from '../../service/api';
const Feedback = () => {
    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({
      uname: '',
      uemail: '',
      answer: ''
    })
  
    const handleChange = (e) => {
      e.preventDefault();
      setFormdata({ ...formdata, [e.target.id]: e.target.value })
    }
    const handleSubmit =  async(e) => {
      e.preventDefault();
  
      try {
        const res = await addFeedback(formdata);
        if (res.status == 200) {
          toast.success('Feedback Added Successfully !');
          setTimeout(() => {
            navigate('/')
          }, 1000)
        }
      }
      catch (error) {
        console.log(error);
      }
  
    }
  
    const routeBack = () => {
      navigate(-1)
    }
    return (
      <>
        <div className='main'>
  
          <form className='data-content shadow bg-white' onSubmit={handleSubmit}>
            <h3 className='data-title primary'>Feedback</h3>
            <input type="text" name="uname" id="uname" placeholder='Name' className='data-input bg-secondary black' onChange={handleChange} required />
            <input type="email" name="uemail" id="uemail" placeholder='Email' className='data-input bg-secondary black' onChange={handleChange} required />
            <h5>Describe your experince</h5>
            <input type='text' name='answer' id='answer' placeholder='Answer' className='data-input bg-secondary black' onChange={handleChange} required/>
            <button type="submit" className='data-btn bg-primary white'>Submit</button>
  
          </form>
  
  
          <button onClick={routeBack} className='route-btn-1 bg-white'><ChevronLeftCircle color="#25db00" /></button>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 500,
          }}
        />
      </>
    )
}

export default Feedback