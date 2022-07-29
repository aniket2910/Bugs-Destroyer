import {
    Box,
    chakra,
    CircularProgress,
    CircularProgressLabel,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { RiTodoLine } from 'react-icons/ri';
import { FiServer } from 'react-icons/fi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTodosData } from '../../redux/Todos/actions';
import { useState } from 'react';



function StatsCard(props) {
    const { title, stat, icon, bg, iconColor, percentile } = props;
    return (
        <Stat
            bg={bg}
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('#FFFFFFEB', '#FFFFFFEB')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'} color='#FFFFFFEB'>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'}  >
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box my={'auto'} alignContent={'center'}>
                    <CircularProgress value={percentile} color='green.400'>
                        <CircularProgressLabel>{percentile}%</CircularProgressLabel>
                    </CircularProgress>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue(iconColor)}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function ProgressBar() {

    const dispatch = useDispatch();
    const { lading, todos, error } = useSelector((store) => store.todos);


    useEffect(() => {
        if (todos.length <= 0) {
            dispatch(getTodosData())
        }
    }, [dispatch])

    var i = 0;
    var j = 0;
    var k = 0;
    useEffect(() => {
        let data = todos.data && todos.data.map((elem) => {
            if (elem.status.todo && elem.delete === false) {
                return elem
            }
        })

        console.log("data", data)
    }, [todos.data])

    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard
                    percentile='100'
                    title={'To do'}
                    stat={i}
                    icon={<RiTodoLine size={'3em'} />}
                />
                <StatsCard
                    percentile='20'
                    title={'In progress'}
                    stat={j}
                    icon={<FiServer size={'3em'} />}
                    iconColor={'pink.400'}
                />

                <StatsCard
                    title={'Done'}
                    stat={k}
                    icon={<AiOutlineFileDone size={'3em'} />}
                    iconColor={'whatsapp.400'}
                />

            </SimpleGrid>
        </Box >

    );
}