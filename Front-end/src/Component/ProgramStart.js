import React from 'react'
import { Link } from 'react-router-dom'

const ProgramStart = () => {
  return (
    <>
          {/* Programe Start */}
          <div className="container-fluid programe position-relative px-5 mt-5" style={{ marginBottom: 135 }}>
              <div className="row g-5 gb-5">
                  <div className="col-lg-4 col-md-6">
                      <div className="bg-light rounded text-center p-5">
                          <i className="flaticon-six-pack display-1 text-primary" />
                          <h3 className="text-uppercase my-4">Body Building</h3>
                          <p>Strength training can help increase muscle size and strength, says Dr. Matarazzo. It also helps increase power—the combination of speed and strength—and can help the person training perform better in sports or other physical activities.</p>
                          <a className="text-uppercase" href="#">Read More <i className="bi bi-arrow-right" /></a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="bg-light rounded text-center p-5">
                          <i className="flaticon-barbell display-1 text-primary" />
                          <h3 className="text-uppercase my-4">Weight Lifting</h3>
                          <p>Strength training can help increase muscle size and strength, says Dr. Matarazzo. It also helps increase power—the combination of speed and strength—and can help the person training perform better in sports or other physical activities.</p>
                          <a className="text-uppercase" href="#">Read More <i className="bi bi-arrow-right" /></a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <div className="bg-light rounded text-center p-5">
                          <i className="flaticon-bodybuilding display-1 text-primary" />
                          <h3 className="text-uppercase my-4">Muscle Building</h3>
                          <p>Strength training can help increase muscle size and strength, says Dr. Matarazzo. It also helps increase power—the combination of speed and strength—and can help the person training perform better in sports or other physical activities.</p>
                          <a className="text-uppercase" href="#">Read More <i className="bi bi-arrow-right" /></a>
                      </div>
                  </div>
                  <div className="col-lg-12 col-md-6 text-center">
                      <h1 className="text-uppercase text-light mb-4">25% Discount For College Students</h1>
                      <Link to='/login' className="btn btn-primary py-3 px-5">Become A Member</Link>
                  </div>
              </div>
          </div>
          {/* Programe Start */}

    
    </>
  )
}

export default ProgramStart
