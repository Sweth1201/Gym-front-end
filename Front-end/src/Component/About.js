import React from 'react'

const About = () => {
    return (
      <>
            <div className="container-fluid p-5" >
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
                        <div className="position-relative h-100">
                            <img className="position-relative w-100 h-100 rounded" src="img/about.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="mb-4">
                            <h5 className="text-primary text-uppercase">About Us</h5>
                            <h1 className="display-3 text-uppercase mb-0">Welcome to KICK START</h1>
                        </div>
                        <h4 className="text-body mb-4">Join us in our mission to improve lives through fitness and wellness, because at Gym and Fitness, your health is our passion.</h4>
                        <p className="mb-4">
                        At Gym and Fitness, we believe that fitness and wellbeing are the cornerstones of a full and vibrant life. Established in 2002, we began our journey as a family-owned business dedicated to providing exceptional gym equipment at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment supplier; we aspired to lead the industry.
  
                          Two decades later, we are proud to have transformed Gym and Fitness into one of Australia's premier online retailers of fitness equipment. We've moved beyond just supplying gear – we've become advocates for fitness, wellbeing and life enrichment. Our commitment to excellence is reflected not only in the quality equipment we provide but also in the lives we've improved.
                          
                          </p>
                          <p className="mb-4">
                        At Gym and Fitness, we believe that fitness and wellbeing are the cornerstones of a full and vibrant life. Established in 2002, we began our journey as a family-owned business dedicated to providing exceptional gym equipment at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment supplier; we aspired to lead the industry.
  
                          Two decades later, we are proud to have transformed Gym and Fitness into one of Australia's premier online retailers of fitness equipment. We've moved beyond just supplying gear – we've become advocates for fitness, wellbeing and life enrichment. Our commitment to excellence is reflected not only in the quality equipment we provide but also in the lives we've improved.
                          
                          </p>
  
                        <div className="rounded bg-dark p-5">
                            <ul className="nav nav-pills justify-content-between mb-3">
                                <li className="nav-item w-50">
                                    <a className="nav-link text-uppercase text-center w-100 active" data-bs-toggle="pill" href="#pills-1">About Us</a>
                                </li>
                                <li className="nav-item w-50">
                                    <a className="nav-link text-uppercase text-center w-100" data-bs-toggle="pill" href="#pills-2">Why Choose Us</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="pills-1">
                                    <p className="text-secondary mb-0">
                                      Our real success lies in the thousands of customers we've empowered to live longer, more joyful, and healthier lives. We're more than just a fitness company – we're your partners in health, your cheerleaders on the sideline, motivating you to reach your personal fitness goals. Embrace the fitness journey with us and see how it transforms your world.</p>
                                </div>
                                <div className="tab-pane fade" id="pills-2">
                                    <p className="text-secondary mb-0">You've voted us as one of the best in fitness equipment! Our top ranking on Judge.Me, Product Review and Trustpilot just goes to show that we're here to give you the honest, reliable service you deserve</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
  
      
      
      </>
    )
  }
  
  export default About
  
