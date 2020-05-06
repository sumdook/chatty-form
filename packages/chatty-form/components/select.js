import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Button } from 'rebass';

import ChatGroup from './chat-group';

export const Select = ({
  name,
  pretext,
  question,
  options,
  dispatch,
  state,
  renderAnswer,
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
      renderAnswer={renderAnswer}
      noScroll={noScroll}
      scrollParent={scrollParent}
      finaltext={finaltext}
    >
      <Flex py={2} flexWrap="wrap" width="100%">
        {!state[name] &&
          Array.isArray(options) &&
          options.map(({ label, value }) => (
            <Button
              key={value}
              variant="select"
              onClick={() =>
                dispatch({
                  type: name,
                  payload: { label, value },
                })
              }
            >
              {label}
            </Button>
          ))}
      </Flex>
    </ChatGroup>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  pretext: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderAnswer: PropTypes.func,
  finaltext: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
