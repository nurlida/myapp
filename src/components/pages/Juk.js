import React, { Component } from 'react'
import {MDBCol, MDBRow}from 'mdbreact';
import Lightbox from "react-image-lightbox";
import {NavLink} from 'react-router-dom'
import './Practice.css'


    const images = [
        
      "/new/img/bg-img/gl.jpg",
      "/new/img/bg-img/gl.jpg"
     
    ];

    const smallImages = [
      "/new/img/bg-img/gl.jpg",
      "/new/img/bg-img/gl.jpg"
      
       ];

 
 class Practice extends Component {

       constructor(props) {
         super(props);
          this.state = {
            photoIndex: 0,
            isOpen: false
          };
      }
          render() {
            const { photoIndex, isOpen } = this.state;
              return (
    
<div>  

    <div className="famie-breadcrumb">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><NavLink to="/ziy">Зыянкечтер
            </NavLink></li>
            <li className="breadcrumb-item active" aria-current="page">Коңуз</li>
          </ol>
        </nav>
      </div>
    </div>

  {/* ##### About Us Area Start #####  surot*/}      
    <section className="about-us-area">
          <div className="container">
            <div className="row align-items-center">
            
              <div className="col-12 col-lg-6">
                <div className="about-us-thumbnail mb-80">
                  <img src="new/img/bg-img/jukg.jpg" alt="" />
                </div>
              </div>
            
                        {/* About Us Content text */}
              <div className="col-12 col-lg-6">
                <div className="about-us-content mb-80">
                    <div className="section-heading">
                      <h2><span>Коңуз</span></h2>
                      <img src="new/img/core-img/decor.png" alt="" />
                    </div>
                  <p>Коңуздар, катуу канаттуулар - курт-кумурскалардын эң чоң түркүмдөрүнүн бири. Дене узундугу 0,35 метрден (катуу канаттуулар) 180 миллиметрге (эбелек муруттуулар) чейин, өңү бир өңчөй түстө же чаар ала болот. Жашоо чөйрөсүнө жараша дене формасы да ар түрдүүчө. Денеси катуу кабык менен капталган, чанда жумшак (жумшак денелүүлөр тукуму). Башы, көкүрөгү жана курсагы даана бөлүнүп турат.
                   Көпчүлүгүнүн башы тегерек, жалпак. Муруту 2-4 (көпчүлүгү он бир) муунактуу. Көзү татаал (айрымдарыныкы жөнөкөй) түзүлүштүү, үңкүрдө жана башка жайларда жашаган коңуздардын көзү болбойт. Коңуздардын 1-жуп катуу канаты 2-жуп учуучу канатын жана курсагын коргоп турат.</p>
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
                      <h2><span>Коңуз жөнүндө</span> жалпы маалымат</h2>
                      <img src="new/img/core-img/decor2.png" alt="" />
                    </div>
                </div>
              </div> 


  {/* Single Accordian Area row*/}
      <div className="row">
        <div className="col-12">
            <div className="accordions" id="accordion" role="tablist" aria-multiselectable="true">
                  
            {/* Single Accordian Area */}
              <div className="panel single-accordion">
                      <h6>
                          <a data-toggle="collapse" href="#C1">Коңуздан кутулуунун жолдору
                          <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                          <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span></a>
                      </h6>
                      <div id="C1" className="accordion-content collapse show">
                        <p>Оңтойлуу аба ырайынын шартында бадыраң 4-5-күндө өнүп чыгат. Эгерде урук убагында өнүп чыкпаса, анын себебин урук тигилген жерди этияттап казып аныктайт.
                        Кээде урук чирип кетет, кээде аны зыянкечтер жок кылышат же чымчыктар чукуп ташташат.Мындай учурларда кошумча уруктар тигилет. 1-2 нака жалбырак пайда болгондо биринчи 
                        суюлтууну, 4-5 нака жалбырак пайда болгондо экинчи суюлтууну өткөрөт. Өнгөн бадыраңды жулбайт, аны тамырын калтырып үзөт. Өсүмдүктү суюлткандан кийин жалбырактын урук үлүшүнөн
                        өйдөлөбөй аны этияттап түптөйт. Түшүмдү жогорулатуудагы маанилүү ык - бул өсүмдүктөгүургаачы гүлдү көбөйтүү, анткени андан жашылча өсүп чыгат. Ургаачы гүлдөрдүн санын көбөйтүүнүн
                        ыгынын бири - бул каптал жагындагы жаш бутактарды алып таштоо жана
                        өстүрүлүп жаткан сорттун пландаштырылган узундугуна жеткенде негизги сабагын кыркып 
                        салуу керек.Түшүмдү жогорулатуудагы маанилүү ык - бул өсүмдүктөгүургаачы гүлдү көбөйтүү, анткени андан жашылча өсүп чыгат. Ургаачы гүлдөрдүн санын көбөйтүүнүн
                        ыгынын бири - бул каптал жагындагы жаш бутактарды алып таштоо жана
                        өстүрүлүп жаткан сорттун пландаштырылган узундугуна жеткенде негизги сабагын кыркып 
                        салуу керек.</p>
                      </div>
                </div>


            {/* Single Accordian Area */}
                <div className="panel single-accordion">
                    <h6>
                        <a data-toggle="collapse" href="#C2">Коңуз менен күрөшүү
                          <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                          <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span>
                        </a>
                    </h6>
                  <div id="C2" className="accordion-content collapse">
                    <p>Бадыраң оңой сиңүүчү азыктардын көп өлчөмүн талап кылат. Ошондуктан семиз, органикалык
                    заттарга бай, сууну жакшы өткөрө турган, жер астындагы суулары терең болгон жер керек.Бадыраңга жеңил чополуу жана кумдуу топурак, же кумдак жер керек; сууну жакшы өткөрбөгөн,
                    муздак, абдан суулуу, жер астындагы суулар топурактын үстүнө жакыныраак жаткан, оор жана кычкыл топурак бадыраң өстүрүүгө көп жарактуу эмес. Топурак канчалык оорураак болсо,
                    түшүм ошончолук кеч жыйналат. Бадыраң туздуу топуракка таптакыр чыдай албайт.Ал көлөкөлүү жерде жакшы өспөйт, ошондуктан жакшы жарык тийген жерди тандоо зарыл. 
                    Бадыраң оңой сиңүүчү азыктардын көп өлчөмүн талап кылат. Ошондуктан семиз, органикалык заттарга бай, сууну жакшы өткөрө турган, жер астындагы суулары терең болгон жер керек.Бадыраңга жеңил чополуу жана кумдуу топурак, же кумдак жер керек; сууну жакшы өткөрбөгөн,
                    муздак, абдан суулуу, жер астындагы суулар топурактын үстүнө жакыныраак жаткан, оор жана кычкыл топурак бадыраң өстүрүүгө көп жарактуу эмес. Топурак канчалык оорураак болсо,
                    түшүм ошончолук кеч жыйналат. Бадыраң туздуу топуракка таптакыр чыдай албайт.Ал көлөкөлүү жерде жакшы өспөйт, ошондуктан жакшы жарык тийген жерди тандоо зарыл</p>
                  </div>
                </div>


            {/* Single Accordian Area */}
                <div className="panel single-accordion">
                    <h6>
                      <a data-toggle="collapse" href="#C3">Коңузга каршы заттар 
                        <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                        <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span>
                      </a>
                    </h6>
                    <div id="C3" className="accordion-content collapse">
                      <p>Жердин үстүнө жакын жайгашкан бадыраңдын тамыр системасы, өзгөчө анын гүлдөө жана 
                      чоңоюу мезгилинде, топурактын жогорку нымдуулугун талап кылат. Топуракта нымдуулук жетишпеген учурда түшүмү ачуу болуп, жаңы мөмө байлагычтары деформацияланып, күбүлүп 
                      түшүп калат. Сугат аба ырайынын шарттарына жана топурактын мүнөзүнө жараша болот.Топуракка жараша жай мезгил бою 6-10 же андан ашык сугат жүргүзүлөт. Жеңил топуракта
                      сугатты тез-тез, ал эми оор топуракта - анда-санда өткөрөт.Сугат нормасын өсүмдүктүн жашына жараша аныктайт: жаш өсүмдүктөрдү азыраак сугарат, ал эми түшүм берүү мезгилинде
                      тез-тез жана кандыра сугарат.Топурак 10-15 см ден кем эмес тереңдикте сугарылуусу маанилүү.Түшүм жыйноо мезгилинде бадыраң ар бир 2-3 күндө чогултулат. Сугатты күндүн
                      экинчи жарымында, кечки 6-7ден кечирээк эмес, ал эми суук түндөрдө эртең менен өткөрүү абдан жакшы болот.
                     </p>
                    </div>
                </div>


            {/* Single Accordian Area */}
                <div className="panel single-accordion">
                <h6>
                    <a data-toggle="collapse" href="#C5">Коңуз кандай өсүмдүктөрдө болот?
                      <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                      <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span>
                    </a>
                </h6>

                <div id="C5" className="accordion-content collapse">
                  <div>
                    <div className="col-12">
                      <div className="accordions" id="accordion" role="tablist" aria-multiselectable="true">
                  
                    {/* Ildet ak keber Single Accordian Area */}
                      <div className="panel single-accordion">
                            <h6>
                              <a data-toggle="collapse" data-parent="" href="#C11">Картошка
                                <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                                <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span>
                              </a>
                            </h6>

                      <div id="C11" className="accordion-content collapse show">
                        <div className="mdb-lightbox no-margin">

                          <MDBRow>
                            <MDBCol md="3">
                              <figure> <img src={smallImages[0]} alt="Gallery" className="img-fluid"  onClick={() =>
                                  this.setState({ photoIndex: 0, isOpen: true }) }/>
                              </figure>
                            </MDBCol>

                            <MDBCol md="3">
                                <figure> <img src={smallImages[1]} alt="Gallery" className="img-fluid" onClick={() =>
                                  this.setState({ photoIndex: 1, isOpen: true })  }  />
                                </figure>
                            </MDBCol>
                
                
                            
                          </MDBRow> 
                      
                      </div>

                          {isOpen && (
                            <Lightbox
                              mainSrc={images[photoIndex]}
                              nextSrc={images[(photoIndex + 1) % images.length]}
                              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                              imageTitle={photoIndex + 1 + "/" + images.length}
                              onCloseRequest={() => this.setState({ isOpen: false })}
                              onMovePrevRequest={() =>
                              this.setState({
                              photoIndex: (photoIndex + images.length - 1) % images.length
                          })
                        }
                              onMoveNextRequest={() =>
                              this.setState({
                              photoIndex: (photoIndex + 1) % images.length
                                })
                          }
                      />
                  )}
                        <p className="text-justify">  
                          Ак кебер - гриб илдети. Абанын жогорку нымдуулугунда, сугаттын жетишсиздик
                          шарттарында өтө билинет. Адегенде жылбырактарда ундай, боз-ак мом менен 
                          капталган сыяктуу темгилдер пайда болот. Акырындык менен ун мому жалбырактын
                          баарын каптайт. Жалбырактын кара-көк өңү ачык түскө айланат. Жалбырак чүрүшүп, 
                          кургап калат. Жабыркаган сабактар хлоротикалык болуп толугу менен куурап калат. 
                          Түшүмдөрү кеч байланат, жакшылап өнбөйт жана формасы бузулат. Инфекция топуракта 
                          өсүмдүктүн калдыктарында сакталат.</p> 
                            
                        <p className="text-justify">Ак кебер - гриб илдети. Абанын жогорку нымдуулугунда, сугаттын жетишсиздик
                          шарттарында өтө билинет. Адегенде жылбырактарда ундай, боз-ак мом менен 
                          капталган сыяктуу темгилдер пайда болот. Акырындык менен ун мому жалбырактын
                          баарын каптайт. Жалбырактын кара-көк өңү ачык түскө айланат. Жалбырак чүрүшүп, 
                          кургап калат. Жабыркаган сабактар хлоротикалык болуп толугу менен куурап калат.
                          Түшүмдөрү кеч байланат, жакшылап өнбөйт жана формасы бузулат. Инфекция топуракта 
                          өсүмдүктүн калдыктарында сакталат.</p>
                      </div>
                    </div>
                


    
                    {/* Ildet Single Accordian Area */}
                    <div className="panel single-accordion">
                            <h6>
                              <a data-toggle="collapse" data-parent="" href="#C12"> Баклажан
                                <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                                <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span>
                              </a>
                            </h6>

                          <div id="C12" className="accordion-content collapse show">
                          <div className="mdb-lightbox no-margin">
                          <p>Бадыраң оңой сиңүүчү азыктардын көп өлчөмүн талап кылат. Ошондуктан семиз, органикалы заттарга бай, сууну жакшы өткөрө турган, жер астындагы суулары терең болгон жер керек.  Бадыраңга жеңил чополуу жана кумдуу топурак, же кумдак жер керек; сууну жакшы өткөрбөгөн,
                            муздак, абдан суулуу, жер астындагы суулар топурактын үстүнө жакыныраак жаткан, оор жана кычкыл топурак бадыраң өстүрүүгө көп жарактуу эмес. Топурак канчалык оорураак болсо, түшүм ошончолук кеч жыйналат. Бадыраң туздуу топуракка таптакыр чыдай албайт. Ал көлөкөлүү жерде жакшы өспөйт, ошондуктан жакшы жарык тийген жерди тандоо зарыл.</p>
                        </div>
                      </div>
                    </div>
                  

                    {/* Ildet Single Accordian Area */}
                    <div className="panel single-accordion">
                            <h6>
                              <a data-toggle="collapse" data-parent="" href="#C12">Перец
                                <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                                <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span>
                              </a>
                            </h6>

                          <div id="C12" className="accordion-content collapse show">
                          <div className="mdb-lightbox no-margin">
                          <p>Бадыраң оңой сиңүүчү азыктардын көп өлчөмүн талап кылат. Ошондуктан семиз, органикалы заттарга бай, сууну жакшы өткөрө турган, жер астындагы суулары терең болгон жер керек.  Бадыраңга жеңил чополуу жана кумдуу топурак, же кумдак жер керек; сууну жакшы өткөрбөгөн,
                            муздак, абдан суулуу, жер астындагы суулар топурактын үстүнө жакыныраак жаткан, оор жана кычкыл топурак бадыраң өстүрүүгө көп жарактуу эмес. Топурак канчалык оорураак болсо, түшүм ошончолук кеч жыйналат. Бадыраң туздуу топуракка таптакыр чыдай албайт. Ал көлөкөлүү жерде жакшы өспөйт, ошондуктан жакшы жарык тийген жерди тандоо зарыл.</p>
                        </div>
                      </div>
                    </div>

                    </div>
                  </div>
                </div>

              </div>  
            </div>
            
            </div>
          </div>
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