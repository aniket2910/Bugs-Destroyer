import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = Array.apply(null, Array(4)).map(function (x, i) {
    return {
        id: i,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
});

export default function TodosList() {
    return (
        <Box p={4}>
            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1 }} spacing={10}>
                    {features.map((feature) => (
                        <HStack bg={'gray.800'} border='1px solid white' p='1rem' borderRadius='lg' key={feature.id} align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text color={'white'} fontWeight={600}>{feature.title}</Text>
                                <Text textAlign={'left'} color={'gray.600'}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}