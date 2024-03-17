import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


function PageNotFound() {
  return (
    <>
      <Navbar />
      <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '20px'}}>
        <h1 style={{ textAlign: 'center' }}>404 | This page could not be found.</h1>
      </div>
      <Footer />
    </>
  );
}


export default PageNotFound