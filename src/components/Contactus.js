 import React,{useState} from 'react'
 import './Contactus.css'
const Contactus = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div>
      <div className='row'>
        <div className='contact-form col-lg-6 col-sm-12'>
        <center><h1> Contact Form</h1></center>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-primary btn-lg" type="submit">
          {formStatus}
        </button>
      </form>

    </div>
    
    <div className='contact-img col-lg-6 col-sm-12'>
<img className="contact-img" src="contactImg.png" alt='imag' />
    </div>
    </div>
    </div>
    
  )
}
export default Contactus;