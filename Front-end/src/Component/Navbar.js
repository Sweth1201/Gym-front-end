import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
     <>
            <div className="container-fluid bg-dark px-0">
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <Link to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 display-4 text-success text-uppercase" style={{fontStyle:'italic'}}>
                              
                              &Kick Start</h1>
                        </Link>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-0 bg-secondary d-none d-lg-flex">
                            <div className="col-lg-7 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <i className="fa fa-envelope text-dark me-2" />
                                    <h6 className="mb-0 ">kickstart@gmail.com</h6>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2">
                                    <i className="fa fa-phone-alt text-dark me-2" />
                                    <h6 className="mb-0 text-dark">+012 345 6789</h6>
                                </div>
                            </div>
                            <div className="col-lg-5 px-5 text-end">
                                <div className="d-inline-flex align-items-center py-2">
                                    <a className="btn btn-light btn-square rounded-circle me-2" href="https://www.facebook.com/sasi.sanjay.31" target='_blank' >
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="btn btn-light btn-square rounded-circle me-2" href="https://github.com/Sasikuma-2002" target='_blank'>
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="btn btn-light btn-square rounded-circle me-2" href="https://www.linkedin.com/in/sasi-kumar-k-89040024b/" target='_blank'>
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a className="btn btn-light btn-square rounded-circle me-2" href="https://www.instagram.com/sasisanjay_02/" target='_blank'>
                                        <i className="fab fa-instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                            <a href="index.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 display-4 text-primary text-uppercase">Gymster</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav m-auto py-0">
                                    <Link to="/" className="nav-item nav-link active">Home</Link>
                                    <Link to="/register" className="nav-item nav-link">Register</Link>
                                    <Link to="/login" className="nav-item nav-link">Login</Link>
                                    <Link to="/about" className="nav-item nav-link">About</Link>
                                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                                </div>
                                <Link to='/login' className="btn btn-primary py-md-6 px-md-5 d-none d-lg-block">Join Us</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
      
     
     </>
    )
  }
  
  export default Navbar