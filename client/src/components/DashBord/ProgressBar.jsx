import {
    Box,
    chakra,
    CircularProgress,
    CircularProgressLabel,
    Flex,
    Heading,
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


function StatsCard(props) {
    const { title, stat, icon, bg, iconColor } = props;
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
                    <StatLabel fontWeight={'medium'} isTruncated >
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box my={'auto'} alignContent={'center'}>
                    <CircularProgress value={40} color='green.400'>
                        <CircularProgressLabel>40%</CircularProgressLabel>
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
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard

                    title={'To do'}
                    stat={'5,000'}
                    icon={<RiTodoLine size={'3em'} />}
                />
                <StatsCard
                    title={'In progress'}
                    stat={'1,000'}
                    icon={<FiServer size={'3em'} />}
                    iconColor={'pink.400'}
                />

                <StatsCard
                    title={'Done'}
                    stat={'7'}
                    icon={<AiOutlineFileDone size={'3em'} />}
                    iconColor={'whatsapp.400'}
                />

            </SimpleGrid>
        </Box >

    );
}