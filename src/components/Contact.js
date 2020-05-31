import React, { Component } from 'react'



 class Contact extends Component {
    render() {
        return (

  <div>
          
    <div className="breadcrumb-area " 
                  style={{backgroundImage: 'url("/new/img/bg-img/2.jpg")'}}>
      <div style={{marginTop:'1rem'}} className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="breadcrumb-text">
              <h2>Байланышуу</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* ##### Contact Information Area Start ##### */}
          <section className="contact-info-area section-padding-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
              
                  {/* Section Heading */}
                  
                </div>
              </div>
            
              <div className="row">
                {/* Adress Single Information Area */}
                <div className="col-12 col-md-4">
                  <div className="single-information-area text-center mb-100 wow fadeInUp" data-wow-delay="100ms">
                    <div className="contact-icon">
                      <i className="icon_pin_alt" />
                    </div>
                      <h5>Дарек</h5>
                      <h6>Микрорайон Джал, 720038 Бишкек</h6>
                  </div>
                </div>
                
                {/* Number Single Information Area */}
                <div className="col-12 col-md-4">
                  <div className="single-information-area text-center mb-100 wow fadeInUp" data-wow-delay="500ms">
                    <div className="contact-icon">
                        <i className="icon_phone" />
                    </div>
                      <h5>Телефон номер</h5>
                      <h6>996 556 64 06 74</h6>
                  </div>
                </div>
                
                {/*  Email Single Information Area */}
                <div className="col-12 col-md-4">
                  <div className="single-information-area text-center mb-100 wow fadeInUp" data-wow-delay="1000ms">
                    <div className="contact-icon">
                        <i className="icon_mail_alt" />
                    </div>
                      <h5>Email</h5>
                      <h6>manas.edu.kg@gmail.com</h6>
                  </div>
                </div>
              </div>
            <div className="c-border" />
          </div>
        </section>



        {/* ##### Contact Area Start ##### */}
        <section className="contact-area gray-bg ">
            <div className="container">
              <div className="row align-items-end">
                  <div className="col-12 col-lg-12">
                    <div className="contact-content section-padding-0-100">
                      <div className="section-heading">
                            <h2><span>Суроолоруңуз</span> болсо</h2>
                              <img src="new/img/core-img/decor.png" alt="" />
                      </div>
                <div className="contact-form-area">
                    <form action="index.html" method="post">
                      <div className="row">
                          <div className="col-lg-6">
                            <input type="text" className="form-control" name="name" placeholder="Сиздин атыңыз" />
                          </div>

                          <div className="col-lg-6">
                            <input type="email" className="form-control" name="email" placeholder="Сиздин Email почтаңыз" />
                          </div>
                    
                          <div className="col-12">
                            <textarea name="message" className="form-control" cols={30} rows={10} placeholder="Ой-пикир билдирүү" defaultValue={""} />
                          </div>
                      
                          <div className="col-12">
                          <button type="submit" className="btn famie-btn">Жиберүү</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </section>

  </div>
        )
    }
}

export default Contact;