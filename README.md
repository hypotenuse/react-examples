
`React`
React (as a library)
React-router (SPA)
Webpack (webpack-dev-server, jsx -> js)

`ReactRedux`
React (as a library)
Redux (Predictable state container. Store data globally in SPA. `immutable` helps to write reducers simplier, `react-redux` bind storage to components)
No routing
Webpack (webpack-dev-server, jsx -> js)

`ReactReduxAdvanced`
React (as a library)
Redux (Predictable state container. Store data globally in SPA. `immutable` helps to write reducers simplier, `react-redux` bind storage to components)
React-router (SPA)
Webpack
- webpack-dev-server
- jsx -> js
- scss -> css + autoprefixer
- `file-loader` to rename and move assets to /dist/
- `css-loader` will automatically use `file-loader` to move assets from css to /dist/ and resolve url(...)
- `file-loader` to rename and move assets to /dist/
- `source-maps` to improve debuging
- development / production mods
- Minimization (via `webpack.optimize.UglifyJsPlugin` for js + HTML + css)
- Generate HTML automatically + template
- `core-js` to polyfill ES5 / ES6 / ES7+ (on demand)
- Bunch or useful plugins to improve Webpack bundling
