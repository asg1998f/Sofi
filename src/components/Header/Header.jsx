import React from 'react'
import logo from "../../assets/zelda-cartoon-logo-370B33C460-seeklogo.com.png"
import "./Header.scss"
import { Link } from 'react-router-dom'
import song from "../../assets/Lady-Gaga-Bad-Romance.ogg"
import logo1 from "../../assets/vecteezy_one-piece-sticker-ai-generative-luffy-ai-generative_34227699.png"
import logo2 from "../../assets/pngegg.png"
import logo3 from "../../assets/pngegg (1).png"
import logo4 from "../../assets/pngegg (2).png"
import logo6 from "../../assets/pngegg (3).png"
import logo8 from "../../assets/pngegg (4).png"
import logo5 from "../../assets/vecteezy_roronoa-zoro-onepiece-icon-ai-generative_33663329.png"
import logo7 from "../../assets/6mx.gif"
import logo9 from "../../assets/pngwing.com (1).png"
import logo10 from "../../assets/pngwing.com.png"
import logo11 from "../../assets/pngwing.com (2).png"


const Header = () => {
  return (
    <div className='header'>
             <audio autoPlay loop>
        <source src={song} type="audio/ogg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
        <Link to="/" className="logo">
        <img src={logo7}  className="logo-image" />
      </Link>
      <h1 className="title">Sofi...</h1>
      <div className='container-logos'>
        <img src={logo1} className='logo-width'></img>
      <Link to="/breyner">Breyner</Link>
      </div>
      <div className='container-logos'>
      <img src={logo4} className='logo-width'></img>
      <Link to="/catalina">Catalina</Link>
      </div>
      <div className='container-logos'>
      <img src={logo3} className='logo-width'></img>
      <Link to="/joan">Joan</Link>
      </div>
      <div className='container-logos'>
      <img src={logo5} className='logo-jose'></img>
      <Link to="/jose">Jose</Link>
      </div>
      <div className='container-logos'>
        <img src={logo2} className='logo-width'></img>
      <Link to="/karen">Karen</Link>
      </div>
      <div className='container-logos'>
      <img src={logo6} className='logo-width'></img>
      <Link to="/luis">Luis</Link>
      </div>
      <div className='container-logos'>
      <img src={logo8} className='logo-width'></img>
      <Link to="/mario">Mario</Link>
      </div>
      <div className='container-logos'>
      <img src={logo9} className='logo-victor'></img>
      <Link to="/victor">Victor</Link>
      </div>
      <div className='container-logos'>
      <img src={logo10} className='logo-xavi'></img>
      <Link to="/xavi">Xavi</Link>
      </div>
      <div className='container-logos'>
      <img src={logo11} className='logo-alberto'></img>
      <Link to="/alberto">Alberto</Link>
      </div>
      <Link to="/" className="logo">
        <img src={logo7}  className="logo-image" />
      </Link>
      <audio autoPlay loop>
        <source src={song} type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  )
}

export default Header