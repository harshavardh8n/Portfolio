import React from 'react'
import '../CSSs/Midsection.css'
import { Text, Button } from '@chakra-ui/react'
import me from '../img/me3.jpg'
import { DownloadIcon,AddIcon } from '@chakra-ui/icons'

function Midsection() {
  return (
    <div className='container'>
       <div className='leftsection'>
        <div id="identity">
        <div id="heading">
        <Text fontSize='4xl'as='b'>Hello, Im Harshavardhan </Text><br />
       <Text fontSize='5xl' color='tomato' as='b'>A Web developer <i class="fa-solid fa-computer"></i></Text>
        </div>
        <div id='desc'>
          <p>
           Im an amatuer software engineer and web developer currently persuing B.E. and studying in Pune Vidyarthi griha's College of Engineering and Techcnology, Pune.
          </p>
        </div>
        </div>
        <div className='cv'>
        <Button colorScheme='teal' variant='solid' rightIcon={<DownloadIcon/>}>
    Download CV
  </Button>
  <Button colorScheme='teal' variant='outline' rightIcon={<AddIcon/>}>
    Hire me
  </Button>
        </div>
        
       
      
       </div>
       <div className='rightsection'>
       <div className='imgholder'>
        <img src={me} alt="me" id="pfp"/>
        </div>
        </div>
</div>
  )
}

export default Midsection