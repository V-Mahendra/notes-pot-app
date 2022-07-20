import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./home.scss"
import Card from '../../components/MyNotes/Card'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homecontainer">
            <Navbar />
            <Card />
        </div>
    </div>
  )
}

export default Home