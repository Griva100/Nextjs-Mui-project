import Head from 'next/head';
import Header from '../components/Header';
import { Box, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Responsive Layout</title>
        <meta name="description" content="Responsive layout with Next.js and Material-UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <Box sx={{ padding: '2rem', textAlign: 'center' }}>
          <Typography variant="h4">Main Content Area</Typography>
          <Box
            sx={{
              height: '200px',
              backgroundColor: '#f0f0f0',
              marginTop: '1rem',
              borderRadius: '8px',
            }}
          >
            {/* Content goes here */}
          </Box>
        </Box>
      </Container>
    </div>
  );
}
