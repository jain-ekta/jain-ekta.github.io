import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Education() {
  return (
    <Box>
        <Box>
            <Heading fontSize={'larger'}>EDUCATION</Heading>
        </Box>
        <Box>
            <Box w={'98%'} ml={'2%'}>
            <Text fontSize={'larger'} fontWeight={'700'}>Bachelor of Education</Text>
            <Text fontSize={'large'}>Hemchand Yadav University Durg C.G.</Text>
            <Text fontSize={'small'} color={'grey'}>2018-2020</Text>
        </Box>
        <Box w={'98%'} ml={'2%'}>
            <Text fontSize={'larger'} fontWeight={'700'}>Master in Geography</Text>
            <Text fontSize={'large'}>Baster University Jagdalpur, C.G. </Text>
            <Text fontSize={'small'} color={'grey'}>2016-2028</Text>
        </Box>
        <Box w={'98%'} ml={'2%'}>
            <Text fontSize={'larger'} fontWeight={'700'}>Bachelor of Arts</Text>
            <Text fontSize={'large'}>Baster University Jagdalpur, C.G.</Text>
            <Text fontSize={'small'} color={'grey'}>2013-2026</Text>
        </Box>
        <Box w={'98%'} ml={'2%'}>
            <Text fontSize={'larger'} fontWeight={'700'}>Diploma in Computer Application</Text>
            <Text fontSize={'large'}>D.R. C.V. Raman University Bilaspur, C.G.</Text>
            <Text fontSize={'small'} color={'grey'}>2013-2024</Text>
        </Box>
        </Box>
    </Box>
  )
}
