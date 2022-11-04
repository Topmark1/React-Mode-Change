import React from 'react'
export function Contact(){
    return <>
   <div className='contactbody'>
    <h1>Contact Me</h1>
    <p>Hi there, contact me to ask about anything you have in mind.</p>
    <br></br>

    <div className='form-group'>
            <div className='names'>
                <div className='fdiv'>
                <label htmlFor='firstName' className='l'>First Name </label> <br />
                <input type='text'  name='firstName' className='fname' placeholder='Enter your first name'/>
                </div>
                <div className='fdiv'>
                <label htmlFor='lastName' className='l'>Last Name </label> <br />
                <input type='text' name='lastName' className='fname' placeholder='Enter your last name'/><br />
                </div>
            </div>
                <label htmlFor='email' className='l'>Email </label> <br />
                <input type='email' name='email' className='email' placeholder='yourname@email.com'/><br />
              
              <label htmlFor='message' className='l'>Message </label> <br />
              <textarea type='textarea' name='message' placeholder="Send me a message and I'll reply you as soon as possible..."/><br />
           
                <input type='checkbox' id='checkbox' name='checkbox' value='checkbox'
                />
                <label htmlFor='gender' className='checkbox'>You agree to providing your data to Topmark who may contact you. </label>
             </div>   
    </div>
    </>
}