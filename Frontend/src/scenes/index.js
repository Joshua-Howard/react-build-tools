import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';
import './styles.sass';
import Nav from './Nav';
import Secondary from './Secondary';
import Primary from './Primary';

const mapStateToProps = state => ({
  selections: state.interface.selections,
  currentScreen: state.interface.currentScreen,
  selectionsArray: state.interface.selectionsArray
});

const mapDispatchToProps = dispatch => ({
  // Functions that dispatch action creators
  selectNav: option => dispatch(actions.selectNav(option)),
  selectOption: option => dispatch(actions.selectOption(option))
});

const Scenes = props => {
  const {
    selections,
    selectionsArray,
    selectNav,
    selectOption,
    currentScreen
  } = props;

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="row containerRow">
        <div className="col leftCol d-flex justify-content-around flex-column">
          <Nav selectNav={selectNav} />
        </div>

        <div className="col rightCol">
          <div className="row primaryRow" style={{ height: '62%' }}>
            <div className="col">
              <Primary
                selectionsArray={selectionsArray}
                selectOption={selectOption}
                selectNav={selectNav}
                currentScreen={currentScreen}
              />
            </div>
          </div>

          <div className="row secondaryRow">
            <div className="col">
              <Secondary selections={selections} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
