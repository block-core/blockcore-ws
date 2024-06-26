### Blockcore WebSocket (blockcore-ws) 🌐

**Blockcore WebSocket (blockcore-ws)** is a WebSocket library designed to provide an easy and seamless way to implement WebSocket communication in various environments. It supports both Node.js and browser environments, making it versatile for different use cases.

#### Features ✨
- 🚀 Easy to use API
- 🌍 Supports both Node.js and browser environments
- 💡 Lightweight and efficient

### Installation 📦

To install the `blockcore-ws` library, use the following npm command:

```sh
npm install @blockcore/ws
```

### Usage 🚀

#### Node.js Example 🖥️

Here is an example of how to use `blockcore-ws` in a Node.js environment:

1. Create a file named `app.js` and add the following code:

   ```js
   import WebSocket from '@blockcore/ws';

   const ws = new WebSocket('wss://echo.websocket.org');

   ws.on('open', function open() {
     console.log('connected');
     ws.send(Date.now());
   });

   ws.on('close', function close() {
     console.log('disconnected');
   });

   ws.on('message', function incoming(data) {
     console.log(`Roundtrip time: ${Date.now() - data} ms`);
     ws.send(Date.now());
   });
   ```

2. Ensure your `package.json` includes `"type": "module"` to use ES modules:

   ```json
   {
     "name": "your-project-name",
     "version": "1.0.0",
     "description": "",
     "main": "app.js",
     "type": "module",
     "scripts": {
       "start": "node app.js"
     },
     "dependencies": {
       "@blockcore/ws": "^0.0.1"
     }
   }
   ```

3. Install dependencies and run the example:

   ```sh
   npm install
   npm start
   ```

#### Browser Example 🌐

To use `blockcore-ws` in a browser environment, follow these steps:

1. Create an HTML file, `index.html`, and include a script to run the WebSocket code:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Blockcore WebSocket Example</title>
   </head>
   <body>
       <script type="module">
           import WebSocket from './path/to/blockcore-ws/browser.js';

           const ws = new WebSocket('wss://echo.websocket.org');

           ws.onopen = () => {
               console.log('connected');
               ws.send(Date.now());
           };

           ws.onclose = () => {
               console.log('disconnected');
           };

           ws.onmessage = (event) => {
               console.log(`Roundtrip time: ${Date.now() - event.data} ms`);
               ws.send(Date.now());
           };
       </script>
   </body>
   </html>
   ```

2. Serve the HTML file using a local server. You can use `http-server` or any other local server tool:

   ```sh
   npm install -g http-server
   http-server
   ```

3. Open the served HTML file in your browser to see the WebSocket in action.

### Running Examples 🛠️

#### Webpack Example 📦

The `blockcore-ws` library includes a Webpack example to demonstrate how to bundle and use the library with Webpack.

1. Navigate to the example directory:

   ```sh
   cd path/to/blockcore-ws/example/webpack
   ```

2. Ensure your `webpack.config.js` is set up to use ES modules:

   ```js
   import path from 'path';

   export default {
     context: path.resolve(),
     entry: {
       app: path.join(path.resolve(), './app.js')
     },
     target: 'web',
     output: {
       path: path.resolve(),
       filename: '[name].output.js',
     }
   };
   ```

3. Install dependencies and build the project:

   ```sh
   npm install
   npm run build
   ```

4. Serve the output file using a local server and open it in a browser:

   ```sh
   http-server
   ```

With these instructions, you should be able to install, run, and use the `blockcore-ws` library effectively in both Node.js and browser environments. Happy coding! 🎉