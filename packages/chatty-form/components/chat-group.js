import React from 'react';
import { Box, Text } from 'rebass';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const Flex = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
`;

const ChatGroup = ({
  pretext,
  question,
  children,
  state,
  name,
  noScroll,
  renderAnswer,
  scrollParent,
  finaltext,
}) => {
  const myRef = React.useRef(null);
  const defaultRenderAnswer = (answer) => {
    if (typeof answer === 'string' || typeof answer === 'number') return answer;
    if (Array.isArray(answer)) {
      if (answer.length === 0) return 'None';
      if (answer.length === 1) return answer[0].label;
      return answer.reduce((acc, { label }, index, array) => {
        return (acc +=
          index === array.length - 1
            ? `& ${label}.`
            : index === array.length - 2
            ? `${label} `
            : `${label}, `);
      }, '');
    }
    if (typeof answer === 'object') return answer.label;
  };

  React.useEffect(() => {
    if (!noScroll) {
      if (!scrollParent) {
        window.scrollTo({
          top: myRef.current.offsetTop,
          left: 0,
          behavior: 'smooth',
        });
      } else {
        scrollParent.current.scrollTo({
          top: myRef.current.offsetTop,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  }, [noScroll]);

  return (
    <div ref={myRef}>
      {pretext && <Pretext name={name} text={pretext} />}
      <Question key={name} name={name} question={question} />
      {!state[name] && (
        <Flex
          width="100%"
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.6,
            },
          }}
          transition={{ duration: 0.5 }}
        >
          <Box width="100%">{children}</Box>
        </Flex>
      )}
      {state[name] && (
        <Answer
          answer={
            renderAnswer
              ? renderAnswer(state[name])
              : defaultRenderAnswer(state[name])
          }
        />
      )}
      {finaltext && state[name] && (
        <FinalText
          name={name}
          text={finaltext}
          noScroll={noScroll}
          scrollParent={scrollParent}
          myRef={myRef}
        />
      )}
    </div>
  );
};

const Pretext = ({ name, text }) => {
  return (
    <Flex
      key={name}
      width="100%"
      initial={{ opacity: 0, x: -10 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.4,
        },
      }}
      transition={{ duration: 0.5 }}
    >
      <Box maxWidth={['90%', '80%']} variant="pretext">
        <Text variant="question">{text}</Text>
      </Box>
    </Flex>
  );
};

const FinalText = ({ myRef, scrollParent, noScroll, ...props }) => {
  React.useEffect(() => {
    if (!noScroll) {
      if (!scrollParent) {
        window.scrollTo({
          top: myRef.current.offsetTop,
          left: 0,
          behavior: 'smooth',
        });
      } else {
        scrollParent.current.scrollTo({
          top: myRef.current.offsetTop,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  }, [noScroll]);
  return <Pretext {...props} />;
};

const Question = ({ name, question }) => {
  return (
    <Flex
      key={name}
      width="100%"
      initial={{ opacity: 0, x: -10 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.5,
        },
      }}
      transition={{ duration: 0.5 }}
    >
      <Box maxWidth={['90%', '80%']} variant="question">
        <Text variant="question">{question}</Text>
      </Box>
    </Flex>
  );
};

const Answer = ({ answer }) => {
  return (
    <Flex
      key={answer}
      width="100%"
      justifyContent="flex-end"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box maxWidth={['90%', '80%']} variant="answer">
        <Text variant="answer">{answer}</Text>
      </Box>
    </Flex>
  );
};

export default ChatGroup;
