import React from 'react';
import '../App.css';

//imagenes  para la galeria inicial
import Image1 from "./Images/foto1.jpg"
import Image2 from "./Images/foto2.jpg"
import Image3 from "./Images/foto3.jpg"
import Image4 from "./Images/foto4.jpg"
import Image5 from "./Images/foto5.jpg"
import Image6 from "./Images/foto6.jpg"



const Gallery = () => {
    return (
        
        <div className='Gallery-wrapper'>
            <img src={Image1} alt="1" />
            <img src={Image2} alt="2" />
            <img src={Image3} alt="3" />
            <img src={Image4} alt="4" />
            <img src={Image5} alt="5" />
            <img src={Image6} alt="6" />
        </div>
    
    )
}
export default Gallery;

<button className='Sucribe'>
    Únete a la comunidad
</button>