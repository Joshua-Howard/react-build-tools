import React from 'react';
import './styles.sass';

const Nav = () => {
  return (
    <>
      <button className="btn" type="button">
        Start
      </button>
      <button className="btn " type="button">
        Express
      </button>
      <button className="btn" type="button">
        React
      </button>
      <button className="btn" type="button">
        Linting
      </button>
      <button className="btn" type="button">
        Launch!
      </button>
    </>
  );
};

export default Nav;
