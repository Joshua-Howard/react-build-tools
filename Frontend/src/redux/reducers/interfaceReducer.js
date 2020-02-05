import * as types from '../actions/actionTypes';
import instructions from '../constants/instructions';

const selectionOptions = {
  // Blanks for start
  start: { start: { selected: false, instructions: instructions.start } },
  'launch!': {
    'launch!': { selected: false, instructions: instructions['launch!'] }
  },
  express: { nodemon: { selected: false, instructions: instructions.nodemon } },
  react: {
    webpackdev: { selected: false, instructions: instructions.webpackdev },
    bootstrap: { selected: false, instructions: instructions.bootstrap },
    sass: { selected: false, instructions: instructions.sass },
    redux: { selected: false, instructions: instructions.redux },
    reduxdev: { selected: false, instructions: instructions.reduxdev }
  },
  linting: {
    eslint: { selected: false, instructions: instructions.eslint },
    eslintairbnb: { selected: false, instructions: instructions.eslintairbnb }
    // prettier: { selected: false, instructions: instructions.prettier },
  }
};

// Add a state to store "currentScreen" to keep track of which screen we are on.
// So that we can use it to show the options on the primary screen.

// Create a constants file to store all of the strings we want to show on the screen
// We can create another object to map selectionOptions to strings

// Every time we update the state after clicking, in state: We loop through all of the keys and values in the object.
// Then we do the same thing where we come that to values in an object that references a constants file.

// Create an object that has strings for each option. It can be called constants.

const screenOrder = ['start', 'express', 'react', 'linting', 'launch!'];

const initialState = {
  selections: selectionOptions,
  selectionsArray: [selectionOptions.start.start],
  currentScreen: 'start', // start, express, react, linting, launch!
  placeholder: 10
};

const interfaceReducer = (state = initialState, action) => {
  let payload;
  if (action.payload !== undefined) {
    payload = action.payload.toLowerCase();
  }

  const selectionsArray = [];
  let currentScreen;
  let selections;

  // console.log('actionnnn', action);

  switch (action.type) {
    case types.SELECT_NAV:
      // Payload is current screen or 'next' to go to the next screen

      currentScreen = payload;

      // Next can be used to continue onto the next screen in the screen order array
      if (payload === 'next') {
        const currIndex = screenOrder.indexOf(state.currentScreen);

        // If the the next scree
        const nextScreen = screenOrder[currIndex + 1];

        currentScreen = nextScreen;
      }

      // Core Code Below
      // Get all detail keys for the currently selected screen
      Object.keys(selectionOptions[currentScreen]).forEach(option => {
        // Push the data into the selection options array
        selectionsArray.push(selectionOptions[currentScreen][option]);
      });

      return {
        ...state,
        currentScreen,
        selectionsArray
      };

    case types.SELECT_OPTION:
      // Need to update instructions array by pushing the data for the selected option into the array
      // Need to do an if statement to check the prev state so that we can delete things from the array if needed.

      // If the option had not been selected before the action was received, then push it into the instructions array

      selections = { ...state.selections };

      selections[state.currentScreen][payload].selected = !state.selections[
        state.currentScreen
      ][payload].selected;

      return {
        ...state,
        selections
      };

    default:
      return state;
  }
};

export default interfaceReducer;
