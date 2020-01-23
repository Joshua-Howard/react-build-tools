import * as types from '../actions/actionTypes';

const selectionOptions = {
  express: { nodemon: false },
  react: {
    webpackDev: false,
    bootstrap: false,
    sass: false,
    redux: false,
    reduxDev: false
  },
  linting: { eslint: false, prettier: false }
};

// Add a state to store "currentScreen" to keep track of which screen we are on.
// So that we can use it to show the options on the primary screen.

// Create a constants file to store all of the strings we want to show on the screen
// We can create another object to map selectionOptions to strings

// Every time we update the state after clicking, in state: We loop through all of the keys and values in the object.
// Then we do the same thing where we come that to values in an object that references a constants file.

const initialState = {
  selections: selectionOptions,
  placeholder: 10
};

const interfaceReducer = (state = initialState, action) => {
  let placeholder;

  switch (action.type) {
    case types.INCREMENT_PLACEHOLDER:
      placeholder = state.placeholder + 1;
      console.log(placeholder, 'Placeholder State', action.payload, 'Payload');

      return {
        ...state,
        placeholder
      };

    default:
      return state;
  }
};

export default interfaceReducer;
