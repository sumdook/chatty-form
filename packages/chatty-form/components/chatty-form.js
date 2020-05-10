import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import merge from 'deepmerge';
import PropTypes from 'prop-types';
import defaultTheme from '../themes/theme';

export const ChattyForm = ({
  children,
  theme = {},
  disableAutoScroll,
  scrollParent,
  onChange,
  onSubmit,
}) => {
  if (!children) return null;
  // handling the case when there's a singlle child
  const childrenArray = Array.isArray(children) ? children : [children];
  const initialState = childrenArray.reduce(
    (acc, child) => Object.assign(acc, { [child.props.name]: null }),
    {}
  );
  const reducer = (state, { type, payload }) => {
    return { ...state, [type]: payload };
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    // Only call after altealst one question is answered
    if (
      Object.keys(state).some((key) => state[key] !== null) &&
      typeof onChange === 'function'
    ) {
      onChange(state);
    }
  });
  React.useEffect(() => {
    // Only call after the last question is answered
    if (
      Object.keys(state).every((key) => state[key] !== null) &&
      typeof onSubmit === 'function'
    ) {
      console.log('calling onSubmit');
      onSubmit(state);
    }
  });

  // Logic to render the question only when the precious one has been answered
  // The first one has to be rendered by default though
  return (
    <ThemeProvider theme={merge(defaultTheme, theme)}>
      {React.cloneElement(childrenArray[0], {
        dispatch,
        state,
        key: childrenArray[0].props.name,
        noScroll: true,
        scrollParent,
      })}
      {childrenArray.slice(1).map((child, index) => {
        if (state[children[index].props.name] !== null) {
          return React.cloneElement(child, {
            dispatch,
            key: child.props.name,
            state,
            scrollParent,
            ...(disableAutoScroll && { noScroll: true }),
          });
        }
        return null;
      })}
    </ThemeProvider>
  );
};

ChattyForm.propTypes = {
  theme: PropTypes.object,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  disableAutoScroll: PropTypes.bool,
  scrollParent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
