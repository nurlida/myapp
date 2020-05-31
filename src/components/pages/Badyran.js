import React, { Component } from 'react'
//import {MDBTable,MDBTableBody,MDBTableHead, MDBCol, MDBRow}from 'mdbreact';
//import Lightbox from "react-image-lightbox";
import {NavLink} from 'react-router-dom'
import './Practice.css'
import axios from 'axios'


 class Practice extends Component {

     constructor(props) {
            super(props);
         
            this.state = {
              posts: [
                {
                  childs:[]
                }
              ]
           
            }
     }
     componentDidMount(){

      axios.get('https://nurlida.herokuapp.com/plants/description/8/')
     
      .then(response => {
        console.log(response)
        this.setState({ posts: response.data })
      })
      
    }

   

      
  
          
     render() {
      
         return (
      

 <div>
    <div className="famie-breadcrumb">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><NavLink to="/jashylcha">Жашылча-жемиштер
              </NavLink></li>
              <li className="breadcrumb-item active" aria-current="page">Бадыраң</li>
            </ol>
          </nav>
        </div>
      </div>
    

     {/* ##### About Us Area Start #####  surot*/}
      <section className="about-us-area ">
            <div className="container">
              <div className="row align-items-center">
              
                <div className="col-12 col-lg-6">
                  <div className="about-us-thumbnail mb-100">
                    <img src="/new/img/bg-img/badyran.jpg" alt="" />
                  </div>
                </div>
              
            {/* About Us Content text */}
                <div className="col-12 col-lg-6">
                  <div className="about-us-content mb-100">
                      <div className="section-heading">
                        <h2><span>{this.state.posts.title}</span> </h2>
                        <img src="img/core-img/decor.png" alt="" />
                      </div>
                    <p>{this.state.posts.description}</p>
                  </div>
                </div>

              </div>
            </div>
        </section>
      

     {/* Single Accordian area mazmunu #################### */}
      <section className="famie-faq-area">
         <div className="container">
                
              <div className="row">
                <div className="col-12">
                  <div className="section-heading text-center">
                    <h2><span>Бадыраң жөнүндө</span> жалпы маалымат</h2>
                      <img src="new/img/core-img/decor2.png" alt="" />
                  </div>
                </div>
              </div> 

     {/* Single Accordian Area row*/}

          <div className="row" >
            {
              this.state.posts.map(plant =>
              
            <div className="col-12">
              <div className="accordions" id="accordion" role="tablist" aria-multiselectable="true">
                    
       
        {/*---------------- Single Accordian Area --------------*/}
              
              <div key={plant.id} className="panel single-accordion">
                <h6>
                  <a data-toggle="collapse" href="#C8">{plant.title}
                  <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                  <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span></a>
                </h6>
                      
                 <div id="C8" classNameч="accordion-content collapse">
                   <p>{plant.description}</p>
                  </div>
              </div>
        
        {/*----------------End Single Accordian Area --------------*/}


        {/* -----------------Ildet --Single Accordian Area----------------- */}
            <div className="panel single-accordion">
                <h6>
                  <a data-toggle="collapse" href="#C5">{plant.title}
                  <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                  <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span></a>
                </h6>

                <div id="C5" className="accordion-content collapse">

                  <div>
                    
                      
                    <div className="col-12">
                      <div className="accordions" id="accordion" role="tablist" aria-multiselectable="true">
                    
            {/*------////////////// Ildet ak keber Single Accordian Area///////// */}
                 
                <div className="panel single-accordion">
                  <h6>
                    <a data-toggle="collapse" data-parent="" href="#C11">{plant.title}
                    <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                    <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span></a>
                  </h6>

              
              <div id="C11" className="accordion-content collapse show">
                    <div className="mdb-lightbox no-margin">
                      <p className="text-justify"> {plant.description}</p>

                <div id="C5" className="accordion-content collapse">
                  <div>
                    <div className="col-12">
                      <div className="accordions" id="accordion" role="tablist" aria-multiselectable="true">
                    
                {/* Ildet ak keber Single Accordian Area childs----------------------------------------*/}
                      
                       <div className="panel single-accordion">
                        <h6>
                          <a data-toggle="collapse" data-parent="" href="#C16">Белгилери
                          <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                          <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span> </a>
                         </h6>
                      </div>
                        
                       <div id="C16" className="accordion-content collapse show">
                         <div className="mdb-lightbox no-margin">
                            <p>топурактын жакшы жарык тийген жерди тандоо зарыл.</p>
                          </div>
                        </div>

                      {/* --------------------------------------------------------------------------*/} 
                        
                        </div>

                      </div>
                    </div>
                 </div>


              </div>
                        
        </div>
      </div>
                      
      
         {/* ---------antraknoz---------Ildet Single Accordian Area */}

              <div className="panel single-accordion">   
                  <h6>
                    <a data-toggle="collapse" data-parent="" href="#C12">Антракноз
                    <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                    <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span></a>
                  </h6>
                             
                  <div id="C12" className="accordion-content collapse show">
                    <div className="mdb-lightbox no-margin">
                      <p>Бадыраң оңой сиңүүчү азыктардын көп өлчөмүн талап кылат. Ошондуктан семиз, органикалы заттарга бай, сууну жакшы өткөрө турган, жер астындагы суулары терең болгон жер керек.  Бадыраңга жеңил чополуу жана кумдуу топурак, же кумдак жер керек; сууну жакшы өткөрбөгөн,
                      муздак, абдан суулуу, жер астындагы суулар топурактын үстүнө жакыныраак жаткан, оор жана кычкыл топурак бадыраң өстүрүүгө көп жарактуу эмес. Топурак канчалык оорураак болсо, түшүм ошончолук кеч жыйналат. Бадыраң туздуу топуракка таптакыр чыдай албайт. Ал көлөкөлүү жерде жакшы өспөйт, ошондуктан жакшы жарык тийген жерди тандоо зарыл.</p>
                    </div>
                   </div>
                  </div>
        {/* ---------antraknoz---------Ildet Single Accordian Area */}
                      
                </div>
               </div>
             
            </div>

           </div>  
         </div>
                
       </div>
     </div>
       )
      }
   </div>
        
  </div>
 </section>


    {/* ##### Contact Area Start ##### */}
      <section className="contact-area bg-gray section-padding-100-0">
        <div className="container">
          <div className="row align-items-end">
              <div className="col-12 col-lg-12">
                <div className="contact-content section-padding-0-100">
                  
                  <div className="section-heading">
                        <h2><span>Суроолоруңуз болсо</span></h2>
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
    
export default Practice;