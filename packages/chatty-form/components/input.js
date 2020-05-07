import React from 'react';
import PropTypes from 'prop-types';
import { Input as RebassInput } from '@rebass/forms';
import { Flex, Button } from 'rebass';

import ChatGroup from './chat-group';

export const Input = ({
  name,
  pretext,
  question,
  type,
  placeholder = 'Type your answer...',
  validate,
  renderAnswer,
  dispatch,
  state,
  width,
  noScroll,
  scrollParent,
  finaltext,
}) => {
  return (
    <ChatGroup
      pretext={pretext}
      question={question}
      state={state}
      name={name}
      noScroll={noScroll}
      renderAnswer={renderAnswer}
      scrollParent={scrollParent}
      finaltext={finaltext}
    >
      <InputSection
        state={state}
        name={name}
        type={type}
        placeholder={placeholder}
        dispatch={dispatch}
        validate={validate}
        width={width}
      />
    </ChatGroup>
  );
};

const InputSection = ({
  state,
  name,
  type,
  placeholder,
  validate,
  dispatch,
  width,
}) => {
  const [value, set] = React.useState('');
  const handleInputWidth = (width) => {
    if (Array.isArray(width)) {
      return width.map((value) => value - 80);
    }
    return width - 80;
  };
  return (
    <Flex my={1} variant="inputContainer" width={width}>
      {!state[name] && (
        <RebassInput
          value={value}
          width={handleInputWidth(width)}
          placeholder={placeholder}
          onChange={(e) => set(e.target.value)}
          type={type}
          aria-label={name}
        />
      )}
      {!state[name] && (
        <Button
          fontSize={3}
          variant="input"
          aria-label="send"
          onClick={() => {
            if (typeof validate !== 'function') {
              return dispatch({ type: name, payload: value });
            }
            if (validate(value)) {
              return dispatch({ type: name, payload: value });
            }
          }}
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 495 495">
            <path d="M165 457a8 8 0 0012 6l55-37-67-33v64zM492 32a8 8 0 00-9-1L8 264a14 14 0 000 26l125 60 251-206-220 220 157 75a14 14 0 0019-8L494 41c2-3 1-6-2-9z" />
          </svg>
        </Button>
      )}
    </Flex>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  pretext: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  question: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.func,
  renderAnswer: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  finaltext: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Input.defaultProps = {
  placeholder: 'Type your answer...',
  width: [320, 400],
};
