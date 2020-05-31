import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'


class Home extends Component {
  render() {
    return (

<div>
  
  {/* slider_area_start */}
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
       
        <div class="carousel-item active">
          <img class="d-block w-100" src="/Navbar/img/banner/banner4.png" alt="First slide"/>
        </div>
       
        <div class="carousel-item">
          <img class="d-block w-100" src="/Navbar/img/banner/banner1.jpg" alt="Second slide"/>
        </div>
       
        <div class="carousel-item">
          <img class="d-block w-100" src="/Navbar/img/banner/banner2.jpg" alt="Third slide"/>
        </div>
      </div>
      
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>


  <section className="about-us-area" style={{paddingTop:'2rem'}}>
    <div className="container">
      <div className="row align-items-center">

        {/* About Us Content */}
        <div className="col-12 col-md-8">
            <div className="about-us-content mb-100">
              <div className="section-heading">
                <h2><span> Өсүмдүктөрдү</span> коргоо</h2>
                <img src="/new/img/core-img/decor.png" alt="" />
              </div>
                <p>Өсүмдүктөр дүйнөсү (өсүмдүктөр) – жер бетинде же анын айрым аймактарында өсүп турган,
                   алардын саны жана өсүмдүктөрдүн артүркүн топтору, алардын аймактары, түзүмү жана 
                   өнүгүүсү, ошондой эле өсүмдүктөрдүн жашоо тариздери менен мүнөздөлгөн, табигый курамы, 
                   түзүмү, абалы жана мааниси аркыл, жаралуу мезгили артүркүн жана фитоценогенездин 
                   арбашка бөлүмдөрүнө бириктирилген өсүмдүктөрдүн же өсүмдүк түркүмдөрүнүн жыйындысы.жаралуу мезгили артүркүн жана фитоценогенездин 
                   арбашка бөлүмдөрүнө бириктирилген өсүмдүктөрдүн же өсүмдүк түркүмдөрүнүн жыйындысы.</p>
                <a href="/osumduk" className="btn famie-btn mt-30">улантыңыз</a>
            </div>
        </div>

          {/* Famie Video Play */}
        <div className="col-12 col-md-4">
            <div className="famie-video-play mb-100">
              <img src="/new/img/bg-img/gl.jpg" alt="" />
              <a href="http://www.youtube.com/watch?v=7HKoqNJtMTQ" className="play-icon"><i className="fa fa-play" /></a>
            </div>
        </div>
       
       </div>
    </div>
</section>


  {/* ##### kategoriya charba start Area Start ##########################################*/}
  <section className="services-area d-flex flex-wrap bg-gray ">
    <div className="services-thumbnail bg-img jarallax" style={{backgroundImage: 'url("new/img/bg-img/27.jpg")'}} />
      <div className="services-content section-padding-100-50 px-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
              <p>Категория</p>
              <NavLink to='jashylcha'><h2><span>Жашылча</span> жемиштер</h2></NavLink>
              <img src="/new/img/core-img/decor.png" alt="" />
            </div>
          </div>
        </div>
      <div className="row">
        <div className="col-12 mb-50">
          <p>Жашылча айдалма өсүмдүктөрдүн тамак-аш катары колдонулуучу бөлүгү. Жашылча капусталар азык тамырлуу, түймөк тамырлуу, уруктуу, чанактуу, томат, салат өсүмдүктөрү татымал, пияз түп жана башка топторго бөлүнөт. Чоң кишинин тамак рационунун составында  суткасына 600 гдан кем эмес жашылча болушу керек.Составы, аш болумдуулугу жашылчанын  түрүнө, өстүрүү шартына жараша болот.</p>
        </div>

        {/* Single Service Area */}
        <div className="col-12 col-lg-6">
          <div className="single-service-area mb-50 wow fadeInUp" data-wow-delay="100ms">
            <div className="service-title mb-3 d-flex align-items-center">
              <NavLink to='/jashylcha'><h5>Мөмө жемиштер</h5></NavLink>
            </div>
            <p> Мөмө – жабык уруктуу өсүмдүктөрдүн көбөйүү органы. Ал гүлдөн өөрчүп, урук пайда болуу менен аяктайт. Мөмө уруктун калыптануу, коргонуу, таралуу кызматын аткарат.</p>
          </div>
        </div>

        {/* Single Service Area */}
        <div className="col-12 col-lg-6">
          <div className="single-service-area mb-50 wow fadeInUp" data-wow-delay="300ms">
            <div className="service-title mb-3 d-flex align-items-center">
              <NavLink to='/jashylcha'><h5>Дан өсүмдүктөр</h5></NavLink>
            </div>
            <p>Дан өсүмдүктөрү (лат. Gramineae) – өсүмдүктөрдүн бир үлүштүүлөр классындагы тукуму. Бир, эки же көп жылдык чөп, айрымдары бадал же дарак (бамбук). </p>
          </div>
        </div>

        {/* Single Service Area */}
        <div className="col-12 col-lg-6">
          <div className="single-service-area mb-50 wow fadeInUp" data-wow-delay="500ms">
            <div className="service-title mb-3 d-flex align-items-center">
              <NavLink to='/jashylcha'><h5>Ийне жалбырактуулар</h5></NavLink>
            </div>
            <p>Ийне жалбырактуулар - (лат. Coniferales) жылаңач уруктуу өсүмдүктөрдүн классчасы (Pinidae) же классы (Pinopsida). Дарак, кээде бадал, бийиктиги 150 м, диаметри 6-10 мге (секвойя) жетет да, кээ бири 4 миң жылга чейин өсөт. </p>
          </div>
        </div>

        {/* Single Service Area */}
        <div className="col-12 col-lg-6">
          <div className="single-service-area mb-50 wow fadeInUp" data-wow-delay="700ms">
            <div className="service-title mb-3 d-flex align-items-center">
              <NavLink to='/jashylcha'><h5>Гүлдөр</h5></NavLink>
            </div>
            <p>Гүл - аткарган функциясына байланыштуу түрүн өзгөртүп кыскарган өркүн. Эволюциялык өнүгүү мезгилинде анын кай бир жалбырактары спора пайда кылууга ылайыктанышса, калгандары стерилдик жабуучу жалбырактарга — гүл коргонго айланган. </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>



  {/* ##### Ayil charba start Area Start ##########################################*/}
  <section className="our-products-area" style={{marginTop:'2rem'}}>
    <div className="container">
      <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2><span>Айыл чарба </span> факультети</h2>
              <img src="/new/img/core-img/decor2.png" alt="" />
            </div>
          </div>
      </div>

            <div className="container h-50">
                <div className="row h-50 align-items-center">
                  <div className="col-12"></div>
                </div>
            </div>
      

       <p>Айыл чарба факультети Кыргыз-түрк “Манас” университетинин 23.10.2007 күнү жана 2007 / 3-4 номердүү чечими менен уюштурулуп, 2008-2009 - окуу жылында даярдоо курсуна кабыл алынган студенттер менен биргеликте ѳз иш-аракетин баштаган. “Мѳмѳ -жемиш жана талаа ѳсүмдүктѳрү” жана “ Ѳсүмдүктѳрдү коргоо” бѳлүмдѳрү - бакалаврдык билим берүүд ѳ . Бакалавр түрүндѳ берилген сапаттуу билим менен ѳнүккѳн дүйнѳлүк стандартта айыл чарба техникаларын жакшы ѳздѳштүргѳн жана аны иш жүзүнд ѳ колдоно билген, ѳ ндүрүү планын жасап, аны менен катар проект түзѳ билген, чечкиндүү, ѳз ишине кѳңүл коюу менен мамиле кылган айыл чарба инженерлерин даярдоо максатындабыз. Факультетибиз 2012-2013-окуу жылынын соңунда алгачкы бүтүрүүчүлѳрүбүздү уядан учурду.
        Факультетибизде бакалаврдык билим алуу мѳѳнѳт ү 4 жыл, тил билүү деңгээли жетишт үү болбогон студенттерге 1 жылдык даярдоо курсу берилет. Балон системасына ылайык окууну аяктаган студенттерибиз Түркия мамлекетине жана Кыргызстанга жарактуу бакалаврдык диплом жана эл аралык аренага жарактуу диплом тиркемесин алуу укугуна ээ болушат. Учурда бүтүрүүчүлѳрүбүз “Айыл чарба инженери ” адистиги боюнча кызматка орношушууда. Факультетибизде жүргүзүлг ѳн сабактар теория түрүндѳ, участоктордо жана лабораторияларда практика жүзүндѳ ѳтүлѳт. Бѳлүмдѳрдүн окуу пландары эл аралык стандартка ылайык даярдалган. Окуу имараттары, корпустар, аудиториялар, лабораториялар, дыйканчылыкты изилдѳѳ жана башка базанын түзүлүүсүндѳ да учурдагы илимий талаптардын алкагында пландоо жана инвестициялоо жүргүзүлүүдѳ.</p>
    </div>
  </section>


  {/* ##### Ziyankechter Area Start ###############################################*/}
  <section className="news-area bg-gray" style={{paddingTop:'3rem'}}>
    <div className="container">
       <div className="row">
         {/* Featured Post Area */}
          <div className="col-12 col-lg-6">
             <div className="featured-post-area mb-100 wow fadeInUp" data-wow-delay="100ms">
                <img src="new/img/bg-img/home.jpg" alt="" />
                  <div className="post-content">
                   
                   <a href="/home" className="post-title">Зыянкечтер</a>
                  </div>
             </div>
          </div>
               
          <div className="col-12 col-lg-6 mb-100">
            {/* Single Blog Area */}
              <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">
                <div className="post-content">
               
                   <a href="/ziy" className="post-title">Зыянкечтер жөнүндө</a>
                   <p>Зыянкечтерден жана илдеттерден өсүмдүктөрдү коргоодо жүргүзүлүүчү химиялык 
                      пестициддердин классификациясы. Инсектоакарапиддер-зыянкечтер менен (инсектицид)
                      жана өсүмдүк бүргөлөрү үчүн;</p>
                </div>
             </div>

             <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">
                <div className="post-content">
               
                    <p>Реппеленттер-курт-кумурскаларды качыруу үчүн;Ларвициддер-кумурсканын личинкасына 
                      жана гусеницаларына;Аттрактанттар-курт-кумурскаларды чакыруу үчүн; Нематициддер-
                      өсүмдүк нематоддоруна( майда тегерек курттарга); Родентициддер(зоодид)-кемирүүчү 
                      зыянкечтерге; Фунгициддер-козу карын илдеттерине каршы; Бактеринид-
                      бактерияларга каршы; Гербицид-отоо чөптөргө каршы;  </p>
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

export default  Home