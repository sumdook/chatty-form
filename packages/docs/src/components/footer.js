/** @jsx jsx */

import { jsx, Flex, Styled, IconButton } from 'theme-ui';

export default function Footer() {
  return (
    <Flex
      as="footer"
      mt={2}
      sx={{
        justifyContent: 'center',
        visibility: ['hidden', 'hidden', 'visible'],
      }}
    >
      Made with{' '}
      <span sx={{ mx: 2, opacity: 0.8, fill: 'primary' }}>
        <svg viewBox="0 -28 512 512" height="12" width="12">
          <path
            sx={{ transition: 'color 0.3s' }}
            d="M471 45C445 16 409 0 369 0c-30 0-57 9-80 28-12 9-23 20-33 34-10-14-20-25-33-34-23-19-50-28-80-28-40 0-76 16-102 45C14 73 0 112 0 154c0 43 16 83 51 125 31 37 75 75 127 119l58 50a30 30 0 0040 0l58-50c52-44 96-82 127-119 35-42 51-82 51-125 0-42-14-81-41-109zm0 0"
          />
        </svg>
      </span>{' '}
      by
      <Styled.a
        href="https://www.twitter.com/sumdook"
        target="_blank"
        sx={{ ml: 1, textDecoration: 'none', transition: 'color 0.3s' }}
      >
        @sumdook
      </Styled.a>
    </Flex>
  );
}
