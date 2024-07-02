import React, { useEffect } from 'react'
import homeFunc from './Effect'
import './Effect.css'

const Front = (props) => {
    useEffect(()=>{
        homeFunc();
    }, [])
  return (
    <div className="main-container">
      <section className="AboutFrontHead">
        <div class="big-dot"></div>
        <div className="AboutFrontHeadText">{props.pageName}</div>
      </section>
    </div>
  )
}

export default Front
