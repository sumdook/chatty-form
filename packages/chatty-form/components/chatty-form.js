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
    if (onChange) {
      if (state[Object.keys(state)[0]]) {
        onChange(state);
      }
    }
  });
  React.useEffect(() => {
    if (
      Object.keys(state).every((key) => state[key] !== null) &&
      typeof onSubmit === 'function'
    ) {
      onSubmit(state);
    }
  });

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
