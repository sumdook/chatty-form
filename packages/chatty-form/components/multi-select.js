import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Button } from 'rebass';

import ChatGroup from './chat-group';

export const MultiSelect = ({
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
      <Input state={state} name={name} dispatch={dispatch} options={options} />
    </ChatGroup>
  );
};

const Input = ({ state, name, dispatch, options }) => {
  const [selected, set] = React.useState([]);
  const handleClick = ({ label, value }) => {
    if (!selected.map(({ value }) => value).includes(value)) {
      return set([...selected, { label, value }]);
    }
    set([...selected.filter(({ value: v }) => v !== value)]);
  };

  return (
    <Flex py={2} flexWrap="wrap" width="100%">
      {!state[name] &&
        options.map(({ label, value }) => (
          <Button
            key={value}
            variant={
              selected.map(({ value }) => value).includes(value)
                ? 'selected'
                : 'select'
            }
            onClick={() => handleClick({ label, value })}
          >
            {label}
          </Button>
        ))}
      {!state[name] && (
        <Button
          onClick={() => dispatch({ type: name, payload: selected })}
          aria-label="send"
          variant="action"
        >
          {selected.length === 0 ? (
            'None of the above'
          ) : (
            <svg width="15" height="15" fill="white" viewBox="0 0 495 495">
              <path d="M165 457a8 8 0 0012 6l55-37-67-33v64zM492 32a8 8 0 00-9-1L8 264a14 14 0 000 26l125 60 251-206-220 220 157 75a14 14 0 0019-8L494 41c2-3 1-6-2-9z" />
            </svg>
          )}
        </Button>
      )}
    </Flex>
  );
};

MultiSelect.propTypes = {
  name: PropTypes.string.isRequired,
  pretext: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderAnswer: PropTypes.func,
  finaltext: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
