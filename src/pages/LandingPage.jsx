// src/pages/LandingPage.jsx
import React from 'react';
import { Box, Button, Heading, VStack, Grid, GridItem, Image } from '@chakra-ui/react';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/movies');
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" height="100vh">
      {/* Left half - Movie Poster */}
      <GridItem display="flex" alignItems="center" justifyContent="center">
        <Image
          src="/images/fallen-angels-wong-kar-wai-poster.jpg" // Use the relative path from the public directory
          alt="Movie Poster"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </GridItem>

      {/* Right half - Login Area */}
      <GridItem display="flex" alignItems="center" justifyContent="center">
        <Box textAlign="center" p={8} bg="gray.50" boxShadow="lg" borderRadius="md">
          <VStack spacing={5}>
            <Heading>Welcome to Movie Library</Heading>
            <Button colorScheme="teal" onClick={handleLogin}>
              Login with Google
            </Button>
          </VStack>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default LandingPage;
