import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Skill() {
  return (
    <Box >
        <Box>
            <Heading fontSize={'larger'}>SKILL</Heading>    
        </Box>  
        <Box w={'96%'} ml={'4%'} >
            <ul>
                <li>
                    Good communication skills.
                </li>   
                <li>
                    Basic organizational abilities and willingness to learn.
                </li>  
                 <li>
                    Passion for community engagement and education.
                </li>   
                <li>
                    Adaptability and enthusiasm to work in diverse environments.
                </li>    
            </ul>    
        </Box>      
    </Box>
  )
}
