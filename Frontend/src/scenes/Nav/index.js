import React from 'react';
import './styles.sass';

const Nav = props => {
  const { selectNav } = props;

  const clickNav = e => {
    selectNav(e.currentTarget.textContent);
  };

  return (
    <>
      <button className="btn" type="button" onClick={clickNav}>
        Start
      </button>
      <button className="btn " type="button" onClick={clickNav}>
        Express
      </button>
      <button className="btn" type="button" onClick={clickNav}>
        React
      </button>
      <button className="btn" type="button" onClick={clickNav}>
        Linting
      </button>
      <button className="btn" type="button" onClick={clickNav}>
        Launch!
      </button>
    </>
  );
};

export default Nav;
