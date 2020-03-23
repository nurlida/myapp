import React from 'react';
import Navbar from './components/Navbar';
import Jashylcha from './components/categories /Jashylcha'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Ziyankechter from './components/Ziyankechter'
import Footer from './components/Footer'
import Juk from './components/pages/Juk'
import Contact from './components/Contact';
import Badyran from './components/pages/Badyran'
import Osumduk from './components/pages/Osumduk'



function App() {
  return (
   <div>
    
    <Router>
        <Navbar/>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/jashylcha' component={Jashylcha} />
              <Route path='/ziy' component={Ziyankechter} />
              <Route path='/juk' component={Juk} />
              <Route path='/contact' component={Contact} />
              <Route path='/badyran' component={Badyran} />
              <Route path='/osumduk' component={Osumduk} />
            
            </Switch>

        <Footer/>
    </Router>

 </div>


  );
}

export default App;
