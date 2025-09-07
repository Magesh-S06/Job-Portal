import React from 'react'
import NavBar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <JobListing />
      <Footer />
    </div>
  )
}

export default Home
