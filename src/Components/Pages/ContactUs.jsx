import React from 'react'
import './contact.css'

function ContactUs() {
  return (
    <>
    <section className='section-white'>
      <div className='container'>
        <div className='row'>

          <div className='col-md-12 text-center'>
            <h2 className='section-title'>
              The Team behind Eve
            </h2>
          </div>
          
          <div className='col-sm-6 col-md-4 '>
            <div className='team-item'>

              <img src="anshu2.jpg" className='team-img' alt="pic" />
              <h3>Anshita Kushwaha</h3>
              <div className='team-info'>
                <p>Developer</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita atque tempore officiis? Ducimus vel cumque tempore quos, dolore qui!</p>

                <ul className='team-icon'>
                  <li><a href="https://www.linkedin.com/in/anshita-kushwaha-0793a5183/" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                  </a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 '>
            <div className='team-item'>

              <img src="./shreyapic (2).jpg" className='team-img' alt="pic" />
              <h3>Shreya Agnihotri</h3>
              <div className='team-info'>
                <p>Founder</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita atque tempore officiis? Ducimus vel cumque tempore quos, dolore qui!</p>

                <ul className='team-icon'>
                  <li><a href="https://www.linkedin.com/in/shreyaagnihotri29" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                    </a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 '>
            <div className='team-item'>

              <img src="./mahicas2.jpg" className='team-img' alt="pic" />
              <h3>Mahendra Dabi</h3>
              <div className='team-info'>
                <p>Designer</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita atque tempore officiis? Ducimus vel cumque tempore quos, dolore qui!</p>

                <ul className='team-icon'>
                  <li><a href="https://www.linkedin.com/in/mahendra-dabi-1b6252181/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                    </a></li>
                </ul>
              </div>
            </div>
          </div>

          
        </div>

      </div>

    </section>
    </>
  )
}

export default ContactUs