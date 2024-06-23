import path from 'path';

export default {
  context: path.resolve(),
  entry: {
    app: path.join(path.resolve(), './app.js')
  },
  // compile to browser platform
  target: 'web',
  output: {
    path: path.resolve(),
    filename: '[name].output.js',
  }
};
