
## React
- `React` (as a library)
- `React-router` (SPA)
- `Webpack` (`webpack-dev-server`, `jsx` -> `js`)
##### installation: `cd desktop` && `git clone https://github.com/hypotenuse/react-examples.git` && `cd react-examples` && `npm install`

## ReactRedux
- `React` (as a library)
- `Redux`
  - Predictable state container. Store some data globally in SPA if needed
  - `immutable` helps to write reducers simplier
  - `react-redux` to bind storage to components
- No routing
- `Webpack` (`webpack-dev-server`, `jsx` -> `js`)


## ReactReduxAdvanced
- `React` (as a library)
- `Redux`
  - Predictable state container. Store some data globally in SPA if needed
  - `immutable` helps to write reducers simplier
  - `react-redux` to bind storage to components
  - `react-thunk` to allow dispatch thunks (async action creators) that are simply functions
- `React-router` (SPA)
- `Webpack`
  - `webpack-dev-server`
  - `jsx` -> `js`, `es6+` -> `es5` via `babel` & `babel-loader`
  - `scss` -> `css` + `autoprefixer`
  - `file-loader` to rename and move assets to /dist/
  - `css-loader` will automatically use `file-loader` to move assets from css to /dist/ and resolve url(...)
  - `source-maps` to improve debuging
  - development / production mods
  - Minimization (via `webpack.optimize.UglifyJsPlugin` for js + HTML + css)
  - Generate HTML automatically + template
  - `core-js` to polyfill ES5 / ES6 / ES7+ (on demand)
  - Bunch or useful plugins to improve Webpack bundling
