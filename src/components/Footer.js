import React, { Component } from 'react'

 class Footer extends Component {
    render() {
        return (
  
  
  <div>
    {/* ##### Footer Area Start ##### */}
      <footer className="footer-area">
        <div className="main-footer bg-img bg-overlay"
           style={{backgroundImage: 'url(/new/img/bg-img/3.jpg)'}}>
           <div className="container">
                
            <div className="row"> {/* Single Footer Widget Area */}
               
               <div className="col-12 ">
                  <div className="footer-widget mb-80">
                    <a href="/home" className="foo-logo mb-30"><img src="new/img/core-img/decor2.png" alt="" /></a>
                      <p>Айыл чарба факультети Кыргыз-түрк “Манас” университетинин 23.10.2007 күнү жана 2007 / 3-4 номердүү чечими менен уюштурулуп, 2008-2009 - окуу жылында даярдоо курсуна кабыл алынган студенттер менен биргеликте ѳз иш-аракетин баштаган. </p>
                      <div className="contact-info">
                        <p><i className="fa fa-map-pin" aria-hidden="true" /><span>Jal</span></p>
                        <p><i className="fa fa-envelope" aria-hidden="true" /><span>manas.edu.kg@gmail.com</span></p>
                        <p><i className="fa fa-phone" aria-hidden="true" /><span>555 48 57 58</span></p>
                      </div>
                  </div>
                </div>
                           

                </div>
              </div>
          </div>
          
          {/* Copywrite Area  */}
           
           <div className="copywrite-area">
              <div className="container">
               <div className="copywrite-text">
                  <div className="row align-items-center">
                     <div className="col-md-6">
                        <p>manas.edu.kg |   
                          <i className="fa fa-heart-o" aria-hidden="true" /> 
                          <a href="/home" target="_blank">Айыл чарба факультети</a>
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p>
                          Product by|   
                          <a href="/home" target="_blank">Nurlida Abdumalikova</a>
                        </p>
                    </div>
                    
                  </div>
                </div>
              </div>
           </div>
        
      </footer>

  </div>
        )
    }
}
export default Footer;