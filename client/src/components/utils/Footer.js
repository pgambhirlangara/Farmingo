import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-left">
            <div className="logo">
            </div>
            <div className="data">Subscribe to keep up with the latest news </div>
            <div className="form_email">
                <form className='email_form1'>
                    <input type="email" placeholder='Email' />
                    <button type="submit" ><i class="fa-solid fa-arrow-right-long"></i>Submit</button>
                </form>
            </div>
            <div className="data2">By Submitting this form you acknowledge that, you have read the terms of our Policy Statement</div>
        </div>


        <div className="footer-right">
            <div class="menu">
            <a href="#">Solutions</a>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            </div>

        </div>

    </div>
  )
}
