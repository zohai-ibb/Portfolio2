import React from 'react'
import { useNavigate } from 'react-router-dom'

const Feedback = () => {
    const navigate = useNavigate();

    const handleClickGoBack = () =>{
        navigate('/');
    }

  return (
    <div className='feedBackPage'>
      <div className='messageSubmit'>Response has been captured successfully, I will contact you soon...</div>
      <button onClick={handleClickGoBack} className='messageButtonBack'>&nbsp;Go Back&nbsp;</button>
    </div>
  )
}

export default Feedback
