import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import { ThemeContext } from './ThemeContext';


export default function Header(props) {
  const {onToggleTheme} = useContext(ThemeContext)
  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      <h2>{props.children}</h2>
      
    </>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: 'JStack blog',
}