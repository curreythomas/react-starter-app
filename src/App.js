import React from 'react'
import './App.css'
import ReactWebpackBabel from './assets/react-webpack-babel.png'

const App = () => {
    return (
        <div className="App">
            <h1>React Starter App</h1>
            <h2>Using Webpack and Babel</h2>
            <p>This is the starting point for a basic React app with Webpack and Babel. It allows you to quickly fire up a single webpage, add your own custom components and see them update realtime in the browser.</p>
            <p>To start the server, first run <code> > npm install</code> followed by <code> > npm run build</code>.</p> 
            <p>This will install all dependencies and build the project creating a new folder <code> > dist</code> with an index.html file and bundle.js file.</p>
            <p>The last step to start the server is to run <code> > npm run start</code>. This will open the application in your browser at <a href="localhost:8080/" alt="link to localhost:8080">localhost:8080/</a></p>
            <p>To add components, add a .js file to the components folder, and import the component into App.js. If you have any assets, place those in the assets folder.</p>
            <img src={ReactWebpackBabel} alt="react webpack babel logos" width='100%' />
        </div>
    )
}

export default App