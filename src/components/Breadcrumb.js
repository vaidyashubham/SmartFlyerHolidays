import React from 'react'
import { Link } from 'react-router-dom';

function Breadcrumb({pageTitle}) {
  return (
    <div className="breadcrumb-agile">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link to='/'>Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
      </ol>
    </div>
  )
}

export default Breadcrumb
