import React from 'react'
import '../CSSs/Skills.css'
import { Text ,Box} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

function Skills() {
  return (
    <>
    <hr />
     <div className='page2'>
      <div className="Education">
        <div id="Edutitle">
        <Text fontSize='4xl' as='b' id='Educ'>Education <i class="fa-solid fa-book-open"></i></Text>
        </div>
        <div className="Educontent">
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          SSC
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Passed SSC by the score of 93.00% through N. M. Joshi Vidyabhavan, Goregaon-Raigad. 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          HSC
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Passed HSC by the score of 86.33% through R. B. Mone Higher secondary school, Goregaon-Raigad.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          BE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Currently persuing Bacheleors of Engineering at Pune Vidyarthi Griha's College of Engineering and Technology, Pune.
    </AccordionPanel>
  </AccordionItem>

</Accordion>
        </div>
       
      </div>

      
      <div className="skills">
      <div id="skilltitle">
        <Text fontSize='4xl' as='b' id='Educ'>Skills <i class="fa-solid fa-brush"></i></Text>
        </div>
      <div className="skillcontent">
      <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Programming
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          web development
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Graphic Designing
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

</Accordion>
        </div>

      </div>
    </div>
    <div className='footer'>
    <div className='credit'>
      <Text align='center'> Made by Harshavardhan Gaikwad</Text>
    </div>
    <div className="smedia">
      <fiv className="icons">
      <i className="fa-brands fa-instagram icon" ></i>
    <i className="fa-brands fa-facebook icon" ></i>
    <i className="fa-brands fa-twitter icon"></i>
    <i className="fa-brands fa-linkedin icon" ></i>
    <i className="fa-solid fa-envelope icon"></i>
      </fiv>
    
    </div>
    <div className="develop">
    <Box
  as='button'
  height='24px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='5px'
  fontSize='14px'
  fontWeight='semibold'
  bg='black'
  borderColor='#ccd0d5'
  color='white'
  _hover={{ bg: '#ebedf0', color:'black'}}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  Created using <i class="fa-brands fa-react"></i> React.js
</Box>
    </div>
    </div>
    </>
   
  )
}

export default Skills