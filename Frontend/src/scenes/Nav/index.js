import React from 'react';
import './styles.sass';

const Nav = props => {
  const { selectNav } = props;

  const clickNav = e => {
    selectNav(e.currentTarget.textContent);
  };

  return (
    <>
      <div className="buttonStyle" onClick={clickNav}>
        Start
      </div>
      <div className="buttonStyle" onClick={clickNav}>
        Express
      </div>
      <div className="buttonStyle" onClick={clickNav}>
        React
      </div>
      <div className="buttonStyle" onClick={clickNav}>
        Linting
      </div>
      <div className="buttonStyle" onClick={clickNav}>
        Launch!
      </div>
    </>
  );
};

export default Nav;
