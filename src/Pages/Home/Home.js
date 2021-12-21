import React from 'react'
import NavBar from '../../component/navbar/index'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
      <NavBar />
      <div className="container__home">
        <header className="content__home">
          <div>
            <h3 className="subtitle__home">SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className="title__home">SPACE</h1>
            <p className="text__home">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div>
            <Link to="/destination" className="button__home">
              EXPLORE
            </Link>
          </div>
        </header>
      </div>
    </>
  )
}
export default Home
