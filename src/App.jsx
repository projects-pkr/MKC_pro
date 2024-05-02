import React from 'react';
import './App.css';
import Navbar from './Components/header/header';
import Banner from './Components/homepage/homepage';
import Book_session from './Components/book_session/Book_session';
import Our_menters from './Components/our-menters/Our_menter';
import Signup from './Components/signup/Signup';
import Our_performer from './Components/our performer/our_performer';
import Keypoints from './Components/keypoints/Keypoints';
import Footer from './Components/footer/Footer';
function App() {
  return (

    <>
      <Navbar />
      <Banner />
      <Book_session />
      <Our_menters />
      <Signup />
      <Keypoints />
      <Our_performer />
      <Footer />
    </>
  )
}

export default App
