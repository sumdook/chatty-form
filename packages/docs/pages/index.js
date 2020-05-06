/** @jsx jsx */
import { jsx, Container, Flex, Box, Text, Button } from 'theme-ui';

import Link from 'next/link';
import Header from '../src/components/header';
import ThemeChanger from '../src/components/theme-changer';
import Form from '../src/components/form';
import Footer from '../src/components/footer';

export default function IndexPage() {
  return (
    <Container>
      <Header />
      <Flex
        sx={{
          width: '100%',
          height: ['auto', 'auto', '80vh'],
          alignItems: 'center',
          flexDirection: ['column', 'column', 'row'],
        }}
      >
        <Box sx={{ width: ['100%', '100%', '50%'] }} pr={[0, 0, 5]}>
          <div
            sx={{
              display: 'grid',
              gridGap: [3, 4, 4],
            }}
          >
            <Text
              sx={{
                fontSize: [2, 4, 5],
                fontWeight: 'bold',
              }}
            >
              A highly theme-able and customisable form in the shape of a chat
              based interface for React.
            </Text>
            <ThemeChanger />
            <Link href="/docs">
              <Button
                sx={{ width: [130, 240], display: ['none', 'none', 'block'] }}
              >
                Documentation
              </Button>
            </Link>
          </div>
        </Box>
        <Box sx={{ width: ['100%', '100%', '50%'] }}>
          <Form />
        </Box>
      </Flex>
      <Footer />
    </Container>
  );
}
