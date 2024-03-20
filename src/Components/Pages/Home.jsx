import React from 'react'
import './Home.css'
import "C:/Users/acer/OneDrive/Desktop/Web Dev/Reactjs/reactlec/node_modules/bootstrap/dist/css/bootstrap.min.css"



function Home() {
  return (
    <>
       <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid nav-bg'>
          <div className='row '>
            <div className="col-10 mx-auto">
              <div className='row mx-4 justify-content-between'>
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Welcome to <strong className='brand-name'>Eve</strong>
                </h1>
                <h2 className="my-3">
                  we are team of talented developers making websites
                </h2>
                <div className="mt-3">
                  <a href="" className="btn-get-started">Get Started</a>
                </div>
              </div>

              <div className="col-md-4 order-1 order-lg-2 header-img">
                <img src="/welcome1.jpeg" className='img-fluid animated' alt="img" />
              </div>
              </div>

            </div>

          </div>

        </div>
        
      </section>

    
    </>
  )
}

export default Home

/*

      <section id='header' className=''>
        <div className='container-fluid nav-bg'>
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className='row'>
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                  Welcome
                </h1>
                <h2 className="my-3">
                  we are team of talented developers making websites
                </h2>
                <div className="mt-3">
                  <a href="" className="btn btn-primary">Get Started</a>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src="/welcome1.jpeg" className='img-fluid animated' alt="img" />
              </div>
              </div>

            </div>

          </div>

        </div>
        
      </section>

*/
