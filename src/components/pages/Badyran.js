import React, { Component } from 'react'
import {MDBTable,MDBTableBody,MDBTableHead, MDBCol, MDBRow}from 'mdbreact';
import Lightbox from "react-image-lightbox";
import {NavLink} from 'react-router-dom'
import './Practice.css'



    const images = [
        
      "https://frukti-yagodi.ru/wp-content/uploads/2019/03/muchnistaya-rosa-ogurcov-2.jpg",
      "https://blabto.com/img/lechenieiprofilaktikamuchnistoyrosinaogu_00111F1D.jpg",
      "https://dachamechty.ru/wp-content/uploads/2017/12/na-listyah-ogurtsov-poyavilis-belye-pyatna_6.jpg",
      "https://blabto.com/img/lechenieiprofilaktikamuchnistoyrosinaogu_00111F1D.jpg"
    ];

    const smallImages = [
      "https://frukti-yagodi.ru/wp-content/uploads/2019/03/muchnistaya-rosa-ogurcov-2.jpg",
      "https://blabto.com/img/lechenieiprofilaktikamuchnistoyrosinaogu_00111F1D.jpg",
      "https://dachamechty.ru/wp-content/uploads/2017/12/na-listyah-ogurtsov-poyavilis-belye-pyatna_6.jpg",
      "https://blabto.com/img/lechenieiprofilaktikamuchnistoyrosinaogu_00111F1D.jpg"
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
                    <img src="new/img/bg-img/badyran.jpg" alt="" />
                  </div>
                </div>
              
            {/* About Us Content text */}
                <div className="col-12 col-lg-6">
                  <div className="about-us-content mb-100">
                      <div className="section-heading">
                        <h2><span>Бадыраң</span> </h2>
                        <img src="img/core-img/decor.png" alt="" />
                      </div>
                    <p>Бадыраң - (лат. Cucumis sativus) ашкабактар тукумундагы бир же көп жылдык чөп өсүмдүк. Өзөк тамырлуу (1 мдей), сабагы (1-2 м) жерге төшөлүп же оролуп өсөт. Жалбырагы жазы, беш бурчтуу, учтуу; кезектешип жайгашат. Гүлү коңгуроо сымал, өңү сары. Негизинен бир үйлүү, айрым ;жыныстуу өсүмдүк. Мөмөсү сүйрү, көп (100-400) уруктуу. Анын 30дай түрү негизинен Африкада, айрым түрү Азияда кезигет. Ал жарык, нымдуу, жылуу жерде жакшы өсөт. Эгилме бадыраң Индиядан таралган. Бардык жерде өстүрүлөт. Жаңы кезинде, туздалган, маринаддалган түрдө желет.</p>
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
            <div className="col-12">
                <div className="accordions" id="accordion" role="tablist" aria-multiselectable="true">
                    
                {/* Single Accordian Area */}
                  <div className="panel single-accordion">
                        <h6>
                            <a data-toggle="collapse" href="#C1">Бадыраңды өстүрүү жөнүндө
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
                          <a data-toggle="collapse" href="#C2">Бадыраңга аймакты жана жерди тандоо 
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
                        <a data-toggle="collapse" href="#C3"> Бадыраң сугаты жөнүндө
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
                        экинчи жарымында, кечки 6-7ден кечирээк эмес, ал эми суук түндөрдө эртең менен өткөрүү абдан жакшы болот.</p>
                      </div>
                  </div>

              
                {/* Single Accordian Area */}
                  <div className="panel single-accordion">
                    <h6>
                      <a data-toggle="collapse" href="#C4">
                        Бадырыңды өстүрүүдөгү жер семирткичтер 
                        <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                        <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span>
                      </a>
                    </h6>
                    <div id="C4" className="accordion-content collapse">
                        <p>Бадыраң топурактан салыштырмалуу азык заттарды көп албайт.
                        Бадыраңдын тамыр системасы көп терең эмес жайгашат, б. а. алар азык заттарды жалаң гана жердин айдалган катмарынан алат. Бадыраң көп массадагы сабагы менен жалбыракты 
                        жана интенсивдүү түрдө жемиши пайда болот, кыска вегетациялык мезгил ичинде топурактан азык заттарды бат керектөөгө шарт коет. Ошондуктан жогору түшүм алуу үчүн, бадыраң азык 
                        заттар менен жакшы камсыз кылынып, семиз жерде өсүшү керек. Бадыраңдын эң жакшы жер семирткичи кык жана компост болот. Органикалык жер семирткичтер өсүмдүктү жалаң гана 
                        азыктандырбастан, топурактын структурасын да жакшыртат, тамыр системасына ылайыктуу шарт түзөт, айланадагы абада көмүр кычкыл газдын концентрациясын көбөйтөт. Органикалык жер
                        семирткичтерди адатта негизги айдоодо күздө же жазда себүүдөн мурда жээктерге же чуңкурларга (40 т/га) чачат.</p>
                        
                      <MDBTable bordered>
                        <MDBTableHead>
                            <tr>
                              <th>Эсептелген түшүм, ц/га</th>
                              <th>N, кг к.з</th>
                              <th>P, кг к.з</th>
                              <th>K, кг к.з</th>
                            </tr>
                          </MDBTableHead>
                          
                          <MDBTableBody>
                            <tr>
                              <td>300</td>
                              <td>90</td>
                              <td>60</td>
                              <td>135</td>
                            </tr>
                            <tr>
                              <td>400</td>
                              <td>120</td>
                              <td>80</td>
                              <td>180</td>
                            </tr>
                            <tr>
                              <td>500</td>
                              <td>150</td>
                              <td>100</td>
                              <td>225</td>
                            </tr>
                            <tr>
                              <td>600</td>
                              <td>180</td>
                              <td>120</td>
                              <td>270</td>
                            </tr>
                          </MDBTableBody>
                      </MDBTable>
              
                      <p>к. з. - катышуучу зат (д. в. - действующее вещество) Минералдык 
                  жер семирткичтердин дозасы айлана-чөйрөнүн шарттарына жана топуракка жараша аныкталат. 
                  Азык заттар ийкемдүүлүгү жана сиңимдүүлүгү менен айырмаланат. Мисалы, азот абдан ийкемдүү
                  жана жеңил сиңирилет, фосфор жана калий анчалык ийкемдүү болбогондуктан, оорураак сиңирилет.
                  Фосфор-калий жер семирткичтерин топуракка кык менен бирге күзүндө чачат, ал эми азот жер 
                  семирткичин - жазында чачат. Республиканын базарларында пайда болгон чет өлкөлүк селекциянын
                  гибриддери интенсивдүүрөөк багууну, көбүрөөк жер семирткичти жана сугатты талап кылат.
                  Бадыраң үчүн кошумча азыктандыруу абдан маанилүү. Арык жерде аны 3-4 жолу, семизирээк
                  жерде аны 1-2 жолу өткөрөт. Биринчи кошумча азыктандыруу бадыраңдын үчүнчү нака жалбырагы
                  өнгөндө керектелет. Аны органикалык жер семирткичтер менен өткөрсө болот: сууга 
                  эритилген уйдун кыгы (4:1), суу менен аралыштырылган тооктун кыгы (10:1 же 15:1).
                  Ошол жер семирткичтерге алдын ала аз өлчөмдө суу кошуп, андан кийин ал эритмени 
                  белгилүү бир концентрацияга чейин суу менен аралаштырып, ачытуу үчүн бир нече күнгө 
                  жыгач идишке калтырып коёт.</p>
                      <p>Адатта, өсүмдүктү сугаргандан же жаан-чачындан кийин кошумча
                  азыктандырат. Өсүмдүктү минералдык жер семирткичтер менен азыктандыруу үчүн, аны төмөнкүчө 
                  даярдайт: 16-24г аммоний сульфатын жана 20г суперфосфатты 10 литр сууга аралаштырат. 
                  Анын ордуна 15-20 г нитрофосту же нитроаммофонду 10 литр сууга эритип даярдаса болот.
                  2 литр эритме 1кв/м жерге жетет. Кийинки азыктандырууну 10-14 күн өткөндөн кийин 
                  минералдык жер семирткичтерден дозасын 1,5-2 эсеге көбөйтүп өткөрөт. Жер семирткичтердин 
                  ролу абдан жогору, анткени азоттун жетишсиздиги өсүмдүктүн сабагынын жана жалбырактарынын 
                  жаман өсүшүнө, натыйжада түшүмдүн төмөндөшүнө алып келет. Бирок азоттун көптүгү да зыяндуу,
                  анткени жашылчанын бышып жетилүүсүн кечиктирет, өсүмдүктүн илдеттерге жана төмөн температурага
                  туруштук берүүсүн азайтат да, жашылчадагы кургак заттын жана канттын өлчөмүн төмөндөтөт.
                  Фосфор жашылчанын тезирээк бышып жетилишине жана анын канттуулугунун көбөйүшүнө түрткү
                  берет. Бадыраңдын тамыр системасы фосфорду жакшы сиңире албастыгы менен айырмаланат.</p>

                    </div>
                </div>

                {/* Single Accordian Area */}
                  <div className="panel single-accordion">
                      <h6>
                        <a data-toggle="collapse" href="#C8">Зыянкечтер
                          <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                          <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span>
                        </a>
                      </h6>
                      <div id="C8" className="accordion-content collapse">
                        <p>Жердин үстүнө жакын жайгашкан бадыраңдын тамыр системасы, өзгөчө анын гүлдөө жана 
                        чоңоюу мезгилинде, топурактын жогорку нымдуулугун талап кылат. Топуракта нымдуулук жетишпеген учурда түшүмү ачуу болуп, жаңы мөмө байлагычтары деформацияланып, күбүлүп 
                        түшүп калат. Сугат аба ырайынын шарттарына жана топурактын мүнөзүнө жараша болот.Топуракка жараша жай мезгил бою 6-10 же андан ашык сугат жүргүзүлөт. Жеңил топуракта
                        сугатты тез-тез, ал эми оор топуракта - анда-санда өткөрөт.Сугат нормасын өсүмдүктүн жашына жараша аныктайт: жаш өсүмдүктөрдү азыраак сугарат, ал эми түшүм берүү мезгилинде
                        тез-тез жана кандыра сугарат.Топурак 10-15 см ден кем эмес тереңдикте сугарылуусу маанилүү.Түшүм жыйноо мезгилинде бадыраң ар бир 2-3 күндө чогултулат. Сугатты күндүн
                        экинчи жарымында, кечки 6-7ден кечирээк эмес, ал эми суук түндөрдө эртең менен өткөрүү абдан жакшы болот.</p>
                      </div>
                  </div>


                {/* Single Accordian Area */}
                  <div className="panel single-accordion">
                  <h6>
                      <a data-toggle="collapse" href="#C5">Бадыраң илдеттери
                        <span className="accor-open"><i className="arrow_carrot-up" aria-hidden="true" /></span>
                        <span className="accor-close"><i className="arrow_carrot-down" aria-hidden="true" /></span>
                      </a>
                  </h6>

                <div id="C5" className="accordion-content collapse">
                      
                      
                  <div className="row padding-left-50">
                      <div className="col-12">
                        <div className="accordions" id="accordion" role="tablist" aria-multiselectable="true">
                    
                      {/* Ildet ak keber Single Accordian Area */}
                        <div className="panel single-accordion">
                              <h6>
                                <a data-toggle="collapse" data-parent="" href="#C11">Ак-кебер
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
                  
                              <MDBCol md="3">
                                <figure> <img src={smallImages[2]} alt="Gallery" className="img-fluid" onClick={() =>
                                    this.setState({ photoIndex: 2, isOpen: true }) }/>
                                </figure>
                              </MDBCol>

                              <MDBCol md="3">
                                <figure> <img src={smallImages[0]} alt="Gallery" className="img-fluid"  onClick={() =>
                                    this.setState({ photoIndex: 0, isOpen: true }) }/>
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
                            Ак кебер- гриб илдети. Абанын жогорку нымдуулугунда, сугаттын жетишсиздик
                            шарттарында өтө билинет. Адегенде жылбырактарда ундай, боз-ак мом менен 
                            капталган сыяктуу темгилдер пайда болот. Акырындык менен ун мому жалбырактын
                            баарын каптайт. Жалбырактын кара-көк өңү ачык түскө айланат. Жалбырак чүрүшүп, 
                            кургап калат. Жабыркаган сабактар хлоротикалык болуп толугу менен куурап калат. 
                            Түшүмдөрү кеч байланат, жакшылап өнбөйт жана формасы бузулат. Инфекция топуракта 
                            өсүмдүктүн калдыктарында сакталат.</p> 
                              
                          <p className="text-justify">
                            <p class="font-weight-bold">Белгилери</p>Абанын жогорку нымдуулугунда, сугаттын жетишсиздик
                            шарттарында өтө билинет. Адегенде жылбырактарда ундай, боз-ак мом менен 
                            капталган сыяктуу темгилдер пайда болот. Акырындык менен ун мому жалбырактын
                            баарын каптайт. Жалбырактын кара-көк өңү ачык түскө айланат. Жалбырак чүрүшүп, 
                            кургап калат. Жабыркаган сабактар хлоротикалык болуп толугу менен куурап калат.
                            Түшүмдөрү кеч байланат, жакшылап өнбөйт жана формасы бузулат. Инфекция топуракта 
                            өсүмдүктүн калдыктарында сакталат.</p>

                          <p className="text-justify">
                          <p class="font-weight-bold">Коргоо чарасы</p> Жалган ак кебер (пероноспороз) - гриб илдети. Кээ бир жылдарда 
                            айдалган бадыраңдын баарын жок кылат. Жалбырактарда ачык түстүү кичинекей темгилдер же 
                            узатасынан жайгашкан тамырчаларда хлоротикалык темгилдер пайда болот. Жалбырактын төмөн
                            жагында дабдаан көрүнгөн кара чекиттерспоралары көрүнгөн грибница пайда болот. Илдет
                            өзгөчө нымдуу мезгилде бат өөрчүйт. Өсүмдүктүн жабыркаган бөлүктөрү күрөң түстүү болуп,
                            кургап калышат. Инфекция өсүмдүктүн калдыктарында жана топуракта 4-5 жылга чейин сакталат.
                          </p>

                          <p className="text-justify">
                          <p class="font-weight-bold">Зыяндуулугу</p> Жалган ак кебер (пероноспороз) - гриб илдети. Кээ бир жылдарда 
                            айдалган бадыраңдын баарын жок кылат. Жалбырактарда ачык түстүү кичинекей темгилдер же 
                            узатасынан жайгашкан тамырчаларда хлоротикалык темгилдер пайда болот. Жалбырактын төмөн
                            жагында дабдаан көрүнгөн кара чекиттерспоралары көрүнгөн грибница пайда болот. Илдет
                            өзгөчө нымдуу мезгилде бат өөрчүйт. Өсүмдүктүн жабыркаган бөлүктөрү күрөң түстүү болуп,
                            кургап калышат. Инфекция өсүмдүктүн калдыктарында жана топуракта 4-5 жылга чейин сакталат.
                          </p>

                        </div>
                      </div>
                  
      
                      {/* Ildet Single Accordian Area */}
                      <div className="panel single-accordion">
                              <h6>
                                <a data-toggle="collapse" data-parent="" href="#C12"> Антракноз
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