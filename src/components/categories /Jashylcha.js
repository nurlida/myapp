import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Jashylcha extends Component {
  render() {
    return (
            
 <div>

 <section className="famie-benefits-area" style={{paddingTop:'2rem'}}>
    <div className="container">
       <div className="row">
    
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="new/img/bg-img/j1.jpg" class="d-block w-100" alt="..."/>
              </div>
                
              <div class="carousel-item">
                <img src="new/img/bg-img/j4.jpg" class="d-block w-100" alt="..."/>
              </div>
                
              <div class="carousel-item">
                <img src="new/img/bg-img/j5.jpg" class="d-block w-100" alt="..."/>
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

       </div>  
     </div>
  </section>
          

   <div className="row"style={{marginTop:'2rem'}}>
      <div className="col-12">
        <div className="section-heading text-center">
          <h2><span>Жашылча жер-</span>жемиштер</h2>
          <img src="new/img/core-img/decor2.png" alt="" />
        </div>
      </div>
   </div>

  <div className="our-products-area">
    <div className="container">
      <p>Жашылча айдалма өсүмдүктөрдүн тамак-аш катары колдонулуучу бөлүгү. Жашылча капусталар, азык тамырлуу, түймөк тамырлуу, уруктуу, чанактуу, томат, салат өсүмдүктөрү, татымал, пияз түп жана башка топторго бөлүнөт. Чоң кишинин тамак рационунун составында суткасына 600 гдан кем эмес жашылча болушу керек. Составы, аш болумдуулугу жашылчанын түрүнө, өстүрүү шартына жараша болот. Жашылчада белок менен май жаныбарлардан алынган тамак-ашка караганда аз болот. Алар углевод, клетчатка, витамин, орг. кислота, минерал заттарга бай болгондуктан тамак катары баалуу. Кишинин тамакка табити жакшырып, тамак сиңирүү безинин секрет иштеп чыгуусун күчөтөт. Жашылчаны көпкө бышыруу, туура эмес сактоо (жылуу, күн тийген жерде) андагы витаминдин азайышына алып келет. Жашылчада суу көп болгондуктан (90—95%) тез бузулат. Ошондуктан узак убакыт сактоо үчүн жашылчаны туздайт, кургатат, консервалайт, тоңдурат. Мындай жолдор менен жашылны сактоодо деле алардагы витаминдер азаят. Булардын ичинен туздоо, тез тоңдуруу, кургатууда витаминдер көбүрөөк сакталат.</p>
      <p>Жемиштер. Жапайы, эгилме, бадал жана чөп өсүмдүктөрдүн жемиштеринин даамы жакшы, тамак сиңирүүнү жакшыртуучу витамин, клетчатка, кант, органикалык кислота жана пектин заттарына бай. Ичегидеги чиринди заттарды бөлүп чыгарууга жардам берүүчү пектин заты  Дан куурайда 0,5 — 0,9%, Бүлдүркөндө 0,4—1,6%, Карагатта 0,2—0,8% болот.Жемиштердеги клетчатка тамак сиңирүү органынын мотордук жана секрет иштеп чыгуу функциясына таасир этип, организмден ашык холестериндин бөлүнүшүнө жардам берет. Органикалык кислоталардан алма кислотасы бардык жерде болот; клюквада — лимон кислотасы, жүзүмдө — шарап кислотасы, бензой кислотасы брусникада, клюквада көп кезигет. Жемиштерде танин менен катехин бар. Танин ичеги былжыр челинин сезгенишине каршы таасир тийгизет. Катехин Р витамининин касиетине ээ. С витамини менен бирге кан тамырлардын капталынын бышыктыгын арттырат. Жемиштердин составында суу көп болгондуктан тез бузулат. Жемиштерди сактоодо (кыям, компот, кургатылган Ж.) составындагы биологиялык баалуу заттар, өзгөчө витаминдер азаят. Жемиштерди тез тоңдуруу, кургатуу менен баалуу касиеттерин көбүрөөк сактоого болот.</p>
    </div>
  </div>
        

 {/* popular_destination_area_start  */}
 <div className="popular_places_area bg-white">
    <div className="container">
        <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <h2><span>Жашылча жемиштер</span></h2>
                <img src="new/img/core-img/decor2.png" alt="" />
              </div>
            </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single_place">
              <div className="thumb">
                <img src="new/img/bg-img/badyran.jpg" alt="" />
              </div>
                <div className="place_info">
                  <NavLink to="/badyran"><h3>Бадыраң</h3></NavLink>
                </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                  <img src="new/img/bg-img/pomidor.jpg" alt="" />
                </div>
                 <div className="place_info">
                 <NavLink to="/badyran"><h3>Памидор</h3></NavLink>
                </div>
              </div>
          </div>

          <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                <img src="new/img/bg-img/kartoshka.jpg" alt="" />
                </div>
                 <div className="place_info">
                 <NavLink to="/badyran"><h3>Картошка</h3></NavLink>
                </div>
              </div>
          </div>

          <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                <img src="new/img/bg-img/piyaz.jpg" alt="" />
                </div>
                 <div className="place_info">
                   <NavLink to="/badyran"><h3>Пияз</h3></NavLink>
                </div>
              </div>
          </div>

          <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                <img src="new/img/bg-img/kapusta.jpg" alt="" />
                </div>
                 <div className="place_info">
                  <NavLink to="/badyran"><h3>Капуста</h3></NavLink>
                </div>
              </div>
          </div>

          <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                  <img src="new/img/bg-img/sarymsak.jpg" alt="" />
                </div>
                 <div className="place_info">
                   <NavLink to="/badyran"><h3>Сарымсак</h3></NavLink>
                </div>
              </div>
          </div>

          <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                  <img src="new/img/bg-img/baklajan.jpg" alt="" />
                </div>
                 <div className="place_info">
                   <NavLink to="/badyran"><h3>Баклажан</h3></NavLink>
                </div>
              </div>
          </div>

          <div className="col-lg-4 col-md-6">
              <div className="single_place">
                <div className="thumb">
                  <img src="new/img/bg-img/sabiz.jpg" alt="" />
                </div>
                 <div className="place_info">
                   <NavLink to="/badyran"><h3>Сабиз</h3></NavLink>
                </div>
              </div>
          </div>

          </div>
        </div>
      </div>

</div>

   )
  }
}