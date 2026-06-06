import darkLogo from '@/images/yagga-logo-dark.svg';
import lightLogo from '@/images/yagga-logo-light.svg';
import PropType from 'prop-types';
import React from 'react';

const ThemedLogo = ({ alt, className }) => (
  <span className={`themed-logo ${className}`}>
    <img alt={alt} className="themed-logo-light" src={lightLogo} />
    <img alt={alt} className="themed-logo-dark" src={darkLogo} />
  </span>
);

ThemedLogo.defaultProps = {
  alt: 'Yagga logo',
  className: ''
};

ThemedLogo.propTypes = {
  alt: PropType.string,
  className: PropType.string
};

export default ThemedLogo;
