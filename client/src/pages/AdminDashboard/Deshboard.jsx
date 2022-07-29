import { Box } from '@chakra-ui/react'
import React from 'react'
import BasicStatistics from './DashTop'
import DisplayAllPosts from './DisplayAllPosts'
import SimpleSidebar from './Sidebar'
import './styles.css'
const Deshboard = () => {
  return (
    <Box bg={'#161b22'} color={'white'}>
        <SimpleSidebar/>
        <BasicStatistics/>
        <div style={{width:'60%', margin:'auto'}}>
        <DisplayAllPosts />
        </div>
    </Box>
  )
}

export default Deshboard