import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
        <Box>
            <Box>
                <Heading fontSize={'larger'}>ABOUT</Heading>
            </Box>
            <Box w={'98%'} ml={'2%'}>
                <Text>
                    As a recent graduate with a passion for education and community engagement, 
                    I am eager to leverage my skills and enthusiasm to contribute as a Community Instructor Mobilizer. 
                    I am dedicated to fostering learning opportunities and empowering individuals within communities to reach their full potential.
                </Text>
            </Box>
        </Box>
    )
}
