import React from 'react';
import PropTypes from 'prop-types';


export default function Header({title, children}) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{children}</h2>
    </>
  )
}
Header.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: 'JStack blog',
}