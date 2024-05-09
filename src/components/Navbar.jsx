import React from 'react'
import "../CSSs/Navbar.css";
import { Button} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import logo from '../img/HG.jpg'
import  DarkMode from './DarkMode';


function Navbar() {
  return (
    <div>
      
        <nav className='Navbar'>
          <div id="logoh"><img src={logo} alt="" id="logohh"/></div>
          
            <ul id='hca'>
                    <li>
                       <a href="google.com"> Home</a>
                    </li>
                    <li>
                        <a href="google.com">Contact</a> 
                    </li>
                    <li>
                       <a href="google.com"> About</a>
                    </li>
                </ul>
                <div className='Contact'>
                  <DarkMode/>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'> Contact me
 </Button>
                </div>
            
            
        </nav>
    </div>
  )
}

export default Navbar