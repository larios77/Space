import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="container__notFound">
      <h1>404 error</h1>
      <Link to="/" className="link__home">
        Home
      </Link>
    </div>
  )
}
export default NotFound
