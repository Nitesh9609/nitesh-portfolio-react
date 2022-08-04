import React from 'react'
import './Header.css'
// import nitesh1  from '../../assets/nitesh.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
  return (
    <>
      <div className='container'>
        <div>
          <h5>Hello, i'm</h5>
          <h2>Nitesh Sharma</h2>
          <h4>Fullstack Developer</h4>
        </div>
          
          <div>
            <button className='btn' >Download CV </button>
            <button className='btn'>Let's Talk</button>
          </div>

          
            <img className='img1' src={'assets/nitesh.png'} alt="nitesh"  />
        

          <div className='media'>
              <a href=''><LinkedInIcon/></a>
              <a href=''><GitHubIcon/></a>
              <a href=''><InstagramIcon/></a>
          </div>
      </div>
    </>
  )
}

export default Header