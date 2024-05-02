import React from 'react'
import './App.css'
 import Book_session from './Components/book_session/Book_session'
 import Our_menters from './Components/our-menters/Our_menter'
import Our_performer from './Components/our performer/our_performer'
import Footer from './Components/footer/Footer'
import Keypoints from './Components/keypoints/Keypoints'
import Banner from './Components/homepage/homepage'
import Navbar from './Components/header/header'
import Signup from './Components/signup/Signup'
function App() {
  return (

    <>
    <Navbar/>
    <Banner/>
<Book_session/>
<Our_menters/>
<Keypoints/>
<Signup/>
<Our_performer/>
      <Footer/>
    </>
  )
}

export default App
