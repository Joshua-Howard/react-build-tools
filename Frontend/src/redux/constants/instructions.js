// Key is a unique value used to optimize React re-rendering

const instructions = {
  // Start
  start: {
    key: 'start',
    name: 'Welcome to React Build Tools!',
    description: '',
    descriptionTooltip: '',
    npmCode: '',
    npmCodeTooltip: ''
  },
  'launch!': {
    key: 'launch!',
    name: 'Your commands are ready below!',
    description: '',
    descriptionTooltip: '',
    npmCode: '',
    npmCodeTooltip: ''
  },
  // Express
  nodemon: {
    key: 'nodemon',
    name: 'Nodemon',
    description:
      'Monitor your filesystem for changes and automatically restart your server',
    descriptionTooltip:
      'Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. ',
    npmCode: 'nodemon',
    npmCodeTooltip:
      'Nodemon automatically restarts your server after you save your files'
  },
  // React
  webpackdev: {
    key: 'webpackDev',
    name: 'Webpack Dev Server',
    description:
      'Serves webpack apps and auto updates the browser after changes are made',
    descriptionTooltip:
      'Use webpack with a development server that provides live reloading. This should be used for development only.',
    npmCode: 'webpack-dev-server',
    npmCodeTooltip: 'Live reloading in development mode'
  },
  bootstrap: {
    key: 'bootstrap',
    name: 'Bootstrap',
    description: "The world's most popular front-end component library",
    descriptionTooltip:
      'Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.',
    npmCode: 'bootstrap',
    npmCodeTooltip: 'Bootstrap front-end component library'
  },
  sass: {
    key: 'sass',
    name: 'SASS',
    description: 'Syntactically Awesome Style Sheets',
    descriptionTooltip:
      'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
    npmCode: 'style-loader css-loader sass-loader node-sass',
    npmCodeTooltip:
      'Webpack loader to automatically generate HTML CSS style tags'
  },
  redux: {
    key: 'redux',
    name: 'Redux',
    description: 'A predictable state container for JavaScript apps.',
    descriptionTooltip: 'Redux centralizes application state and logic',
    npmCode: 'redux react-redux',
    npmCodeTooltip: 'React and official React binding for Redux'
  },
  reduxdev: {
    key: 'reduxDev',
    name: 'Redux Dev Tools',
    description: 'Time-travel debugging for Redux',
    descriptionTooltip:
      "The Redux DevTools make it easy to trace when, where, why, and how your application's state changed.",
    npmCode: 'redux-devtools-extension',
    npmCodeTooltip: 'Enables Redux Dev Tools support for Redux'
  },
  // Linting
  eslint: {
    key: 'eslint',
    name: 'ESLint',
    description: 'Static code analysis for JavaScript',
    descriptionTooltip:
      'A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.',
    npmCode: 'eslint',
    npmCodeTooltip: 'ESLint JavaScript linter'
  },
  eslintairbnb: {
    key: 'eslintAirbnb',
    name: 'Airbnb ESLint',
    description: "Airbnb's recommended approach to JavaScript",
    descriptionTooltip: 'Popular JavaScript style guide',
    npmCode: 'eslint-config-airbnb install-peerdeps --dev eslint-config-airbnb',
    npmCodeTooltip: "Airbnb's JavaScript style guide"
  }
  // prettier: {
  //   key: 'prettier',
  //   name: 'My Name Is',
  //   description: 'Hey I am a cool package :)',
  //   descriptionTooltip: 'Here is everything about me :P',
  //   npmCode: 'cool-package',
  //   npmCodeTooltip: 'I am so easy to install'
  // }
};

export default instructions;
