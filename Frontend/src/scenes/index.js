import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';
import './styles.sass';

const mapStateToProps = state => ({
  placeholder: state.interface.placeholder
});

const mapDispatchToProps = dispatch => ({
  // Functions that dispatch action creators
  incrementPlaceholder: value => dispatch(actions.incrementPlaceholder(value))
});

const Scenes = props => {
  const { placeholder } = props;
  console.log(placeholder, 'This is the value of the placeholder state');

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="row containerRow">
        <div className="col leftCol"> hey</div>

        <div className="col rightCol">
          <div className="row primaryRow" style={{ height: '70%' }}>
            <div className="col" />
          </div>

          <div className="row secondaryRow">
            <div className="col" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
