import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';
import './styles.sass';
import Nav from './Nav';
import Secondary from './Secondary';
import Primary from './Primary';

const mapStateToProps = state => ({
  currentScreen: state.interface.currentScreen
});

const mapDispatchToProps = dispatch => ({
  // Functions that dispatch action creators
  selectNav: option => dispatch(actions.selectNav(option))
});

const Scenes = props => {
  const { selectNav } = props;

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="row containerRow">
        <div className="col leftCol d-flex justify-content-around flex-column">
          <Nav selectNav={selectNav} />
        </div>

        <div className="col rightCol">
          <div className="row primaryRow" style={{ height: '70%' }}>
            <div className="col">
              <Primary />
            </div>
          </div>

          <div className="row secondaryRow">
            <div className="col">
              <Secondary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
