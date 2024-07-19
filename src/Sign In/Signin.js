import React from 'react'

const Signin = () => {
  return (
    <div className='signin'>
      <div className='body'>
        <div className='title'>
          <h1>Sign In</h1>
        </div>
        <div className='zones'>
          <div className='name'>
            <input type='text' name='name' placeholder='First Name' />
          </div>
          <div className='name'>
            <input type='text' name='name' placeholder='Last Name' />
          </div>
          <div className='name'>
            <input type='emai;' name='name' placeholder='Enter your Email' />
          </div>
          <div className='name'>
            <input type='password' name='name' placeholder='Enter your Password' />
          </div>
          <div className='name'>
            <input type='password' name='name' placeholder='Enter again your password' />
          </div>
        </div>
        <div className='button'>
          <a href='Home.js'>Send <i className='fa fa-right-arrow'></i></a>
        </div>
      </div>
    </div>
  )
}

export default Signin
