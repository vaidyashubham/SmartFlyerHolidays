import React from 'react'

function Whatsapp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+919595016858"
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Whatsapp"
    >
      <i className="fa fa-whatsapp whatsapp-icon"></i>
    </a >
  )
}

export default Whatsapp
