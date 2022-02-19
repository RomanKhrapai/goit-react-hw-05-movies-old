//import { useState } from 'react';
//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Layout } from './Layout.styles';
import s from './NavLink.module.css';

function Header() {
  return (
    <Layout>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.link}  ${s.activeLink}` : s.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? `${s.link}  ${s.activeLink}` : s.link
        }
      >
        Movies
      </NavLink>
    </Layout>
  );
}

Header.propTypes = {};

export default Header;
