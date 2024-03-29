import { Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ImPhone } from "react-icons/im";
import { FcCellPhone } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { SlLocationPin } from "react-icons/sl";


export default function Bio() {
  return (
    <VStack>
        <Flex w={'100%'} gap={'10px'}  alignItems={'center'} >
            <FcCellPhone/>
            <Text>9479068221</Text>
        </Flex>
        <Flex w={'100%'} gap={'10px'}  alignItems={'center'} >
            <FcAddressBook/>
            <Link href='mailto:jekta2309@gmail.com'>jekta2309@gmail.com</Link>
        </Flex>
        <Flex w={'100%'} gap={'10px'}  alignItems={'center'} >
            <FcGlobe/>
            <Link href='https://jain-ekta.github.io'>https://jain-ekta.github.io</Link>
        </Flex>
        <Flex w={'100%'} gap={'10px'}  alignItems={'center'} >
            <SlLocationPin/>
            <Text>Kanker, C.G. 494334</Text>
        </Flex>
    </VStack>
  )
}
