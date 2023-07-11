import React from 'react'

const Testimonial = () => {
    return (
      <>
            {/* Testimonial Start */}
            <div className="container-fluid p-0 my-5">
                <div className="row g-0">
                    <div className="col-lg-6" style={{ minHeight: 500 }}>
                        <div className="position-relative h-100">
                            <img className="position-relative w-100 h-100" src="img/testimonial-4.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-6 bg-dark p-5">
                        <div className="mb-5">
                            <h5 className="text-primary text-uppercase">Reviews/Testimonial</h5>
                            <h1 className="display-3 text-uppercase text-light mb-0">Our Client Say</h1>
                        </div>
                        <div className="owl-carousel testimonial-carousel">
                            <div className="testimonial-item">
                                <p className="fs-10 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3" />I absolutely love Kickstart Gym! It's an amazing place to work out and achieve my fitness goals. The gym has top-notch equipment that allows me to target different muscle groups and challenge myself in various ways. The trainers at Kickstart are incredibly knowledgeable and supportive.</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid rounded-circle" src="img/feedback.jpeg" alt />
                                    <div className="ps-4">
                                        <h5 className="text-uppercase text-light">Sasikumar</h5>
                                        <span className=" text-secondary">Software Engineer</span>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="testimonial-item">
                                <p className="fs-10 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3" /> I absolutely love Kickstart Gym! It's an amazing place to work out and achieve my fitness goals. The gym has top-notch equipment that allows me to target different muscle groups and challenge myself in various ways. The trainers at Kickstart are incredibly knowledgeable and supportive. </p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt />
                                    <div className="ps-4">
                                        <h5 className="text-uppercase text-light">HariPriya</h5>
                                        <span className="text-uppercase text-secondary">Freelancer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <p className="fs-10 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3" /> I absolutely love Kickstart Gym! It's an amazing place to work out and achieve my fitness goals. The gym has top-notch equipment that allows me to target different muscle groups and challenge myself in various ways. The trainers at Kickstart are incredibly knowledgeable and supportive. </p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt />
                                    <div className="ps-4">
                                        <h5 className="text-uppercase text-light">Harry</h5>
                                        <span className="text-uppercase text-secondary">Freelancer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
  
      
      </>
    )
  }
  
  export default Testimonial
  
