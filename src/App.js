import React from 'react';
import logo from './logo1.png';
import home from "./Components/Home"
import login from "./Components/Login"
import events from "./Components/Events"
import Gallery from './Components/Home'


//import mi archivo css
import './App.css';

function NavBar() {
  return (
    
    <><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            <li>
              <a href={home} id="home"><span className="material-symbols-outlined">
                Home</span></a>
            </li>
            <li>
              <a href={login} id="login"><span className="material-symbols-outlined">
                account_circle </span></a>
            </li>
            <li>
              <a href="#Search" id="search"><span className="material-symbols-outlined">
                search</span></a>
            </li>
            <li>
              <a href={events} id="events"><span className="material-symbols-outlined">
                sound_detection_loud_sound</span></a>
            </li>
          </ul>
        </nav>

        {/* selector de lenguaje */}
        <select className="select-language">
          <option value="" selected disabled>
            Idioma
          </option>
          <option value="">Español</option>
          <option value="">English</option>
          <option value="">日本語</option>
        </select>
      </header>
    </div>
    <main>
       <Gallery />
    </main>
    <div className='footerpag'>
        <footer>
          <p>&copy; 2024 Red Social de Bailarines. Todos los derechos reservados.</p>
        </footer>
      </div></>
  )
}
export default NavBar; 

