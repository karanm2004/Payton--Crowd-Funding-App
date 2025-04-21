import React from 'react'

const Footer = () => {
  return (
    <footer className='[background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_100%)]  flex justify-center items-center text-white p-4 h-20'>
        <p>Copyright &copy; {new Date().getFullYear()} <b>Payton</b> - All rights reserved </p>
    </footer>
  )
}

export default Footer