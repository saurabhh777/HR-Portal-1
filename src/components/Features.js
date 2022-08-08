import React from 'react'
import './Features.css'



function Features() {
  return (
    <div className='container1'>

    <div className="left-container">
      <div className="top-row">
        <div className="row1">
          <div className="new-joinings">
            New Joinings
          </div>
          <div className="sticky-notes">
            Sticky Notes
          </div>
        </div>
        <div className="row2">
          <div className="holidays">
            Holidays
          </div>
          <div className="birthday">
            Birthday & Anniversary
          </div>
        </div>

      </div>

      <div className="bottom-row">
        <div className="pending-review">
          Pending Reviews
        </div>
      </div>
    </div>

    <div className="right-container">
      <div className="left-col">
        <div className="on-leave">
          On Leave
        </div>
        <div className="leave-application">
          Leave Application
        </div>
        <div className="pending-action">
          Pending Actions
        </div>
      </div>


      <div className="right-col">
        <div className='employee'>
          Employee of the month
        </div>
        <div className='aanncouncement'>
          Announcement
        </div>
      </div>
    </div>
  </div>
  )
}

export default Features

