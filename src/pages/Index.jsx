import React from "react";
import { Box, Container, Heading, Text, UnorderedList, ListItem, Divider, Image, VStack, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaMusic, FaKeyboard, FaBookOpen, FaHandsHelping } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Learn to Play Piano
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Master the basics of piano and start your musical journey with these simple steps.
        </Text>

        <Image src="https://images.unsplash.com/photo-1620942988625-74825774fdda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmFuZCUyMHBpYW5vfGVufDB8fHx8MTcwODk4NjUzNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Grand Piano" borderRadius="md" boxShadow="lg" />

        <Box as="section" bg={bg} borderRadius="md" p={8} boxShadow="lg">
          <VStack spacing={6}>
            <Heading as="h2" size="lg">
              <FaMusic /> Step 1: Understanding the Piano Keyboard
            </Heading>
            <Text fontSize="md">The piano keyboard consists of white and black keys. Each key represents a different musical note. The white keys are based on the C major scale. Black keys are sharps and flats.</Text>
            <Image src="https://images.unsplash.com/photo-1538402074774-8e624f3f7e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaWFubyUyMGtleXN8ZW58MHx8fHwxNzA4OTg2NTM2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Piano Keys" borderRadius="md" boxShadow="lg" />
          </VStack>
        </Box>

        <Divider my={10} />

        <Box as="section" bg={bg} borderRadius="md" p={8} boxShadow="lg">
          <VStack spacing={6}>
            <Heading as="h2" size="lg">
              <FaKeyboard /> Step 2: Hand Position and Posture
            </Heading>
            <Text fontSize="md">Proper hand position and posture are crucial. Sit up straight, relax your shoulders and arms, and curve your fingers slightly.</Text>
            <Image src="https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaWFubyUyMGhhbmQlMjBwb3NpdGlvbnxlbnwwfHx8fDE3MDg5ODY1MzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Piano Hand Position" borderRadius="md" boxShadow="lg" />
          </VStack>
        </Box>

        <Divider my={10} />

        <Box as="section" bg={bg} borderRadius="md" p={8} boxShadow="lg">
          <VStack spacing={6}>
            <Heading as="h2" size="lg">
              <FaBookOpen /> Step 3: Reading Music
            </Heading>
            <Text fontSize="md">Begin with simple songs or exercises that use only one hand at a time. Learn to read music notes, starting with the treble clef and bass clef.</Text>
            <Image src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHNoZWV0c3xlbnwwfHx8fDE3MDg5ODY1MzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Music Sheets" borderRadius="md" boxShadow="lg" />
          </VStack>
        </Box>

        <Divider my={10} />

        <Box as="section" bg={bg} borderRadius="md" p={8} boxShadow="lg">
          <VStack spacing={6}>
            <Heading as="h2" size="lg">
              <FaHandsHelping /> Step 4: Practice Regularly
            </Heading>
            <Text fontSize="md">Consistent practice is key to learning piano. Start with 15-30 minutes a day and gradually increase your practice time as you progress.</Text>
            <UnorderedList textAlign="left">
              <ListItem>Practice scales and arpeggios to build finger strength.</ListItem>
              <ListItem>Learn chords to play songs and understand harmony.</ListItem>
              <ListItem>Use a metronome to develop your sense of rhythm.</ListItem>
            </UnorderedList>
          </VStack>
        </Box>

        <Divider my={10} />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box as="section" bg={bg} borderRadius="md" p={8} boxShadow="lg">
            <Heading as="h3" size="md" mb={4}>
              Basic Scales
            </Heading>
            <Image src="https://images.unsplash.com/photo-1548076805-5f8d6345df31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaWFubyUyMHNjYWxlc3xlbnwwfHx8fDE3MDg5ODY1Mzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Piano Scales" borderRadius="md" boxShadow="lg" />
          </Box>

          <Box as="section" bg={bg} borderRadius="md" p={8} boxShadow="lg">
            <Heading as="h3" size="md" mb={4}>
              Common Chords
            </Heading>
            <Image src="https://images.unsplash.com/photo-1479118013749-9f79d55a28d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaWFubyUyMGNob3Jkc3xlbnwwfHx8fDE3MDg5ODY1Mzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Piano Chords" borderRadius="md" boxShadow="lg" />
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
