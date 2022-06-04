import React from 'react'
import './Footer.css'
const Footer = () => {
  let footerStyle ={
    position: "relative",
    top: "70vh",
    width: "100%",
    border: "2px solid red"

  }
  return (
    <footer className="bg-dark text-light py-3"style=
    {footerStyle}>
        <p className="text-cent">
        copyright &copy; Presha'sTodolist.com
        </p>
        
    </footer>
  )
}

export default Footer
