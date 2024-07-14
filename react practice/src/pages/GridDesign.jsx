import React from 'react'
import { SimpleGrid,Box } from '@chakra-ui/react'
import { Flex, Spacer,Button, ButtonGroup, Heading } from '@chakra-ui/react'
const GridDesign = () => {
  return (
   <>
<Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md' marginTop="20px">Chakra App</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button>
  </ButtonGroup>
</Flex>



{/* <SimpleGrid columns={[2, null, 3]} spacing='40px'>
  <Box bg='tomato' height='80px' ></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid> */}
   </>
  )
}

export default GridDesign
