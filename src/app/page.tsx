import React from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import Image from 'next/image'

const Home = () => {
  return (
    <Container maxWidth="lg" 
    className='bg-gray-300 h-screen flex flex-col items-center justify-center'>
      <Box className='bg-white w-[90%] md:w-[30%] rounded-3xl shadow-lg p-6 flex flex-col items-center'>
        <Image src="/qr_app/assets/images/image-qr-code.png" alt="QR Code" width={300} height={300} 
               className='rounded-2xl' />
        <h1
        className='text-2xl font-bold text-center text-gray-800 mt-4'
        >Improve your front-end skills by building projects</h1>
        <p
        className='text-gray-300 text-sm text-center mt-2'
        >Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </Box>
    </Container>
  )
}

export default Home
