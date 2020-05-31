import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'




class Jashylcha extends Component {


  constructor(props){
    super(props)

      this.state={
        posts:[]
      }
    }

      componentDidMount(){
        axios.get('https://nurlida.herokuapp.com/plants/category/5/')
       .then(response => {
       
        console.log(response)    
        this.setState({posts: response.data})

      })
        .catch(error => {
        console.log(error)
    })
  }

  render() {
    return (
            
 <div>
      <div className="breadcrumb-area bg-img bg-overlay jarallax" style={{backgroundImage: 'url("/new/img/bg-img/slider.jpg")'}}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
          </div>
        </div>
      </div>

    <div className="row" style={{marginTop:'2rem'}}>
        <div className="col-12">
          <div className="section-heading text-center">
            <h2><span>Жашылча жер-</span>жемиштер</h2>
            <img src="/new/img/core-img/decor2.png" alt="" />
          </div>
        </div>
    </div>

   <div style={{marginBottom:'2rem'}} className="our-products-area ">
    <div className="container">
      <p>Жашылча айдалма өсүмдүктөрдүн тамак-аш катары колдонулуучу бөлүгү. Жашылча капусталар, азык тамырлуу, түймөк тамырлуу, уруктуу, чанактуу, томат, салат өсүмдүктөрү, татымал, пияз түп жана башка топторго бөлүнөт. Чоң кишинин тамак рационунун составында суткасына 600 гдан кем эмес жашылча болушу керек. Составы, аш болумдуулугу жашылчанын түрүнө, өстүрүү шартына жараша болот. Жашылчада белок менен май жаныбарлардан алынган тамак-ашка караганда аз болот. Алар углевод, клетчатка, витамин, орг. кислота, минерал заттарга бай болгондуктан тамак катары баалуу. Кишинин тамакка табити жакшырып, тамак сиңирүү безинин секрет иштеп чыгуусун күчөтөт. Жашылчаны көпкө бышыруу, туура эмес сактоо (жылуу, күн тийген жерде) андагы витаминдин азайышына алып келет. Жашылчада суу көп болгондуктан (90—95%) тез бузулат. Ошондуктан узак убакыт сактоо үчүн жашылчаны туздайт, кургатат, консервалайт, тоңдурат. Мындай жолдор менен жашылны сактоодо деле алардагы витаминдер азаят. Булардын ичинен туздоо, тез тоңдуруу, кургатууда витаминдер көбүрөөк сакталат.</p>
      <p>Жемиштер. Жапайы, эгилме, бадал жана чөп өсүмдүктөрдүн жемиштеринин даамы жакшы, тамак сиңирүүнү жакшыртуучу витамин, клетчатка, кант, органикалык кислота жана пектин заттарына бай. Ичегидеги чиринди заттарды бөлүп чыгарууга жардам берүүчү пектин заты  Дан куурайда 0,5 — 0,9%, Бүлдүркөндө 0,4—1,6%, Карагатта 0,2—0,8% болот.Жемиштердеги клетчатка тамак сиңирүү органынын мотордук жана секрет иштеп чыгуу функциясына таасир этип, организмден ашык холестериндин бөлүнүшүнө жардам берет. Органикалык кислоталардан алма кислотасы бардык жерде болот; клюквада — лимон кислотасы, жүзүмдө — шарап кислотасы, бензой кислотасы брусникада, клюквада көп кезигет. Жемиштерде танин менен катехин бар. Танин ичеги былжыр челинин сезгенишине каршы таасир тийгизет. Катехин Р витамининин касиетине ээ. С витамини менен бирге кан тамырлардын капталынын бышыктыгын арттырат. Жемиштердин составында суу көп болгондуктан тез бузулат. Жемиштерди сактоодо (кыям, компот, кургатылган Ж.) составындагы биологиялык баалуу заттар, өзгөчө витаминдер азаят. Жемиштерди тез тоңдуруу, кургатуу менен баалуу касиеттерин көбүрөөк сактоого болот.</p>
    </div>
  </div>
        

 {/* popular_destination_area_start  */}
 <div className="popular_places_area bg-light">
    <div className="container">
        <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <h2><span>Жашылча жемиштер</span></h2>
                <img src="/new/img/core-img/decor2.png" alt="" />
              </div>
            </div>
        </div>



        <div className="row">
              {
               this.state.posts.map(plants =>  

                <div className="col-lg-4 col-md-6">
                  <div className="single_place">
                    <div key= {plants.image.id} className="thumb">
                      <img src= {plants.image.image} alt=""/>
                    </div>
                      <div className="place_info">
                        <Link to={"/badyran/" + plants.id}><h3>{plants.title}</h3></Link>
                      </div>
                   </div>
                </div> 
                )
              }
          </div>


       </div>
   </div>
</div>

   )
  }
}
export default Jashylcha