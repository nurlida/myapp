import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

 class Navbar extends Component {
  render() {
    return (

<div>
    <header>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid">
            <div className="header_bottom_border">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo"><a href="index.html"><h5>Osumduk.kg</h5>
                       <img src="new/img/core-img/decor.png" alt="" /></a>
                  </div>
                </div>
                  
                <div className="col-xl-6 col-lg-6">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                          <li><NavLink className="active" to='/'>Негизги бет</NavLink></li>
                          <li><NavLink className="nav-link" to="/jashylcha">Жаңылыктар</NavLink></li>
                          <li><NavLink className="nav-link" to="/ziy">Зыянкечтер</NavLink></li>
                          <li><NavLink to="#">Категория <i className="ti-angle-down" /></NavLink>
                            <ul className="submenu">
                              <li><NavLink to="/jashylcha">Жашылча-жемиштер</NavLink></li>
                              <li><NavLink to="/jashylcha">Мөмө-жемиштер</NavLink></li>
                              <li><NavLink to="/jashylcha">Гүлдөр</NavLink></li>
                              <li><NavLink to="/jashylcha">Ийне жалбырактуулар</NavLink></li>
                              <li><NavLink to="/jashylcha">Дан-өсүмдүктөр</NavLink></li>
                            </ul>
                          </li>
                           <li><NavLink className="nav-link" to="/contact">Байланышуу</NavLink></li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                  <div className="social_wrap d-flex align-items-center justify-content-end">
                    <div className="number">
                      <p> <i className="fa fa-phone" /> 0556 64 06 74</p>
                    </div>
                  </div>
                </div>
                  
                  <div className="seach_icon">
                    <NavLink data-toggle="modal" data-target="#exampleModalCenter" to="#">
                      <i className="fa fa-search" /></NavLink>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  {/* header-end */}
  
  
  {/* Modal */}
    <div className="modal fade custom_search_pop" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="serch_form">
              <input type="text" placeholder="Search" />
              <button type="submit">search</button>
            </div>
          </div>
        </div>
      </div>

</div>
    )
  }
}
export default Navbar