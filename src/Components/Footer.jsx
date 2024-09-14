import React from 'react'
import FooterStyles from '../Styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' />
        <div >
          <img src="../../public/images/ico-facebook.png" alt='DH-logo' />
          <img src="../../public/images/ico-instagram.png" alt='DH-logo' />
          <img src="../../public/images/ico-tiktok.png" alt='DH-logo' />
          <img src="../../public/images//ico-whatsapp.png" alt='DH-logo' />
        </div>
    </footer>
  )
}

export default Footer
