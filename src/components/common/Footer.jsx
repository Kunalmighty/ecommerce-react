import * as Route from '@/constants/routes';
import React from 'react';
import { useLocation } from 'react-router-dom';
import ThemedLogo from './ThemedLogo';

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-2">
        <ThemedLogo alt="Footer logo" className="footer-logo" />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
