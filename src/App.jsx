import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Breyner from './components/Breyner/Breyner'
import Home from './components/Home/Home'
import Catalina from './components/Catalina/Catalina'
import Joan from './components/Joan/Joan'
import Jose from './components/Jose/Jose'
import Karen from './components/Karen/Karen'
import Luis from './components/Luis/Luis'
import Mario from './components/Mario/Mario'
import Victor from './components/Victor/Victor'
import Xavi from './components/Xavi/Xavi'
import Alberto from './components/Alberto/Alberto'
import Header from './components/Header/Header'



function App() {

  return (
   <>
   <BrowserRouter>
   <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/breyner" element={<Breyner/>}/>
      <Route path="/catalina" element={<Catalina/>}/>
      <Route path="/joan" element={<Joan/>}/>
      <Route path="/jose" element={<Jose/>}/>
      <Route path="/karen" element={<Karen/>}/>
      <Route path="/luis" element={<Luis/>}/>
      <Route path="/mario" element={<Mario/>}/>
      <Route path="/victor" element={<Victor/>}/>
      <Route path="/xavi" element={<Xavi/>}/>
      <Route path="/alberto" element={<Alberto/>}/>
     </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
