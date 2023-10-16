import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Link to='https://twitter.com/IRCTCofficial'><div className='twitter-logo'></div></Link>
        <Link to='https://www.facebook.com/IRCTCofficial/'><div className='fb-logo'></div></Link>
        <Link to='https://www.instagram.com/irctc.official/?igshid=yyg5byow704l'><div className='insta-logo'></div></Link>
        <p className='tnrtc-txt'>&copy; {new Date().getFullYear()} TNRTC. All Rights Reserved.</p>
        <Link to='/privacy' className='link-light-pp'>privacy policy</Link>
        <br></br><Link to='/terms' className='link-light-tc'>Terms&Conditions</Link><br></br>
        <Link to='/faq' className='link-light-faq'>FAQ's</Link>

      </div>
    </footer>
  );
}

export default Footer;