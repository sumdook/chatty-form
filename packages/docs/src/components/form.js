/** @jsx jsx */
import { jsx, Box, useColorMode } from 'theme-ui';
import { isMobile } from 'react-device-detect';
import { ChattyForm, Input, Select, MultiSelect } from 'chatty-form';
import themeList from '../theme-list';
export default function Form() {
  const [colorMode] = useColorMode();
  const [formState, setFormState] = React.useState({});
  const myref = React.useRef();
  return (
    <div
      ref={myref}
      sx={{
        height: ['auto', 'auto', 500],
        overflowY: 'scroll',

        mt: [4, 4, 0],
        px: [1, 1, 3],
        border: '1ps solid red',
      }}
    >
      <Box>
        <ChattyForm
          theme={{ colors: { primary: themeList[colorMode] } }}
          onChange={(values) => setFormState(values)}
          scrollParent={!isMobile ? myref : null}
        >
          <Input
            name="name"
            question="Howdy! What's your name?"
            placeholder="Type your answer"
            width={[250, 300, 400]}
            validate={(value) => {
              if (value === '') {
                return false;
              }
              return true;
            }}
          />
          <Select
            name="pet"
            question={`Hello ${formState.name}! I'm just trying to show off all I can do. Do you like dogs more or cats?`}
            options={[
              { label: 'Dogs', value: 'dogs' },
              { label: 'Cats', value: 'cats' },
            ]}
          />
          <Select
            pretext={
              <img
                alt={
                  !formState.pet
                    ? null
                    : formState.pet.value === 'cats'
                    ? 'cat gif'
                    : 'dog gif'
                }
                src={
                  !formState.pet
                    ? null
                    : formState.pet.value === 'cats'
                    ? 'https://media1.tenor.com/images/f6fe8d1d0463f4e51b6367bbecf56a3e/tenor.gif'
                    : 'https://media.tenor.com/images/ce3496923232360bd50895dfbdf537ba/tenor.gif'
                }
                sx={{ borderRadius: 20, height: [150, 200] }}
              />
            }
            name="number"
            question={`Good choice! Btw, I can scroll down all by myself. How cool is that?`}
            options={[
              { label: 'Very Cool', value: 'vcool' },
              { label: 'Very Very Cool', value: 'vvcool' },
            ]}
            renderAnswer={() => {
              return 'v v v v cool!';
            }}
          />
          <MultiSelect
            name="multi"
            pretext="The answer rendered is different from what you selected. I can customize the answer field based on selected answer, more on this in the docs."
            question="Here is a multiple choice question because I can do that too. Which of these are fruits?"
            options={[
              { label: 'Pumpkin', value: 'Pumpkin' },
              { label: 'Pepper', value: 'Pepper' },
              { label: 'Cucumber', value: 'Cucumber' },
              { label: 'Tomato', value: 'Tomato' },
              { label: 'Peas', value: 'Peas' },
            ]}
            finaltext={
              <>
                They're all fruits
                <span
                  role="img"
                  aria-label="mind-blown"
                  sx={{ fontSize: 4, ml: 2 }}
                >
                  🤯
                </span>
                <br />
                <br />
                Thanks for interacting. If you found this cool you can{' '}
                <span role="img" aria-label="star">
                  🌟
                </span>{' '}
                it on{' '}
                <a
                  href="github.com"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                  github
                </a>{' '}
                or alternatively let me know what I can improve upon, on{' '}
                <a
                  href="www.github.com"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                  github issues
                </a>{' '}
                or my{' '}
                <a
                  href="www.github.com"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                  twitter.
                </a>
              </>
            }
          />
        </ChattyForm>
      </Box>
    </div>
  );
}
