import React, { Fragment } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const TextInputAction = ({ actionLabel }) => (
  <Fragment>
    <input type="text" />
    <Button>{actionLabel}</Button>
  </Fragment>
);

TextInputAction.propTypes = {
  actionLabel: PropTypes.string,
};

export default TextInputAction;
