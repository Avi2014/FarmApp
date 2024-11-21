import React from 'react'
import Navbar from '../Components/Navbar'

const Messagesc = () => {
  return (
    <div>
      <Navbar/>
      <div id="messaging-page">
        <div id="messages">
            <div className="message">
                <div className="sender">User 1</div>
                <div className="content">Hello, How are u from?</div>
            </div>
            <div className="message">
                <div className="sender">User 2</div>
                <div className="content">I'm from good, thanks!</div>
            </div>
        </div>
        <div id="message-input">
            <input type="text" id="message-text" placeholder="Type your message here..." />
            <button id="send-button">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Messagesc