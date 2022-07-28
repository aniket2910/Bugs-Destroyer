import React from 'react'
import { Box, Container, Heading, Progress, Text } from '@chakra-ui/react'
import ProgressBar from '../components/DashBord/ProgressBar'
import Boxes from '../components/DashBord/Boxes'
const Dashbord = () => {
    return (
        <>
            <Box bg='gray.800'>
                <br />
                <Heading
                    textAlign='center'
                    fontWeight={600}
                    color='white'
                    fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
                    lineHeight={'110%'}>
                    Hello,{' '}
                    <Text as={'span'} color={'pink'}>
                        user name
                    </Text>
                </Heading>
                <br />
                <Progress size='xs' bg='skyblue' />
                <br />
                <ProgressBar />
                <br />
                <br />
                <Progress size='xs' bg='skyblue' marginBottom='-3%' />
                <Box p={'10'}>
                    <Boxes />
                </Box>
            </Box>

        </>
    )
}

export default Dashbord