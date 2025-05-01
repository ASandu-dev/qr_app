import React from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import Image from 'next/image'

const prefix = process.env.NODE_ENV === 'production' ? '/qr_app' : '';

const Home = () => {
  return (
    <Container maxWidth="lg" 
      className="bg-gray-300 h-screen flex flex-col items-center justify-center"
    >
      <Box className="bg-white w-[85%] md:w-[30%] rounded-3xl shadow-lg p-6 flex flex-col items-center">
        <Image 
          src={`${prefix}/assets/images/image-qr-code.png`} 
          alt="QR Code" 
          width={300} 
          height={300} 
          className="rounded-2xl" 
        />
        <h1 className="text-2xl font-bold text-center text-gray-800 mt-4">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-gray-400 text-md text-center mt-2">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </Box>
    </Container>
  );
}

export default Home;
