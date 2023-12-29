import React from 'react'
import footerlogo from '../images/Logo .svg'

function Footer() {
  const footer_section ={
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gridGap: "20px",
    minHeight: "417px",
    backgroundColor: "var(--primary-color)",
    paddingTop: "120px",
  }
  return (
    <section style={footer_section}>
      <div className='footer_content footer_logo'>
        <img src={footerlogo} alt='litle lemon logo' />
      </div>
      <div className='footer_content'>
        <div className='title'>
          <h4>Doormat Nav igation</h4>
        </div>
        <ul className='usefull_links'>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className='footer_content'>
         <div className='title'>
          <h4>Contact</h4>
         </div>
         <ul className='usefull_links'>
          <li>26,jame road, chicago, us</li>
          <li>+1 45 646 256</li>
          <li>contact@litlelemon.com</li>
         </ul>
      </div>
      <div className='footer_content'>
         <div className='title'>
          <h4>Social Media Links</h4>
         </div>
         <ul className='usefull_links'>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
         </ul>
      </div>
    </section>
  )
}

export default Footer
