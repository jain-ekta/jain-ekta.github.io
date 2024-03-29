import { Grid, GridItem, VStack } from '@chakra-ui/react'
import React from 'react'
import Dp from './components/Dp'
import Bio from './components/Bio'
import Language from './components/Language'
import Name from './components/Name'
import About from './components/About'
import Education from './components/Education'
import Skill from './components/Skill'
export default function App() {
  return (
      <Grid 
        templateAreas={
          `"header header header"
          "left mid right"`
        }
        templateColumns="19% 1% 80%" // Set the column widths
        // gap={2} // Adjust the gap between grid items as needed
      
      >
        <GridItem h={'50px'}  pl='2' area={'header'}        
          // background= {'rgb(2,0,36)'}
          background= {'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}
        
        >
          
        </GridItem>
         {/* Left Section */}
        <GridItem h={"720px"} area={'left'} gap={'40px'}>
          
          <VStack  align={'left'} pl={'20px'}>
            <Dp/>
            <Bio/>
            <Language/>
          </VStack>
        </GridItem>

         {/* Mid Section */}
        <GridItem h={"720px"} pl='2'  area={'mid'}
          backgroundColor= {'#4158D0'}
          backgroundImage= {"linearGradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"}
        > 

          
        </GridItem>

         {/* Right Section */}
        <GridItem h={"720px"} w={'80%'} textAlign={'justify'} pl='2' area={'right'} >
          <Name/>
          <About/>
          <Education/>
          <Skill/>
        </GridItem>
      </Grid>
  )
}
