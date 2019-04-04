import React from 'react';
import './app.css'
import Scrapbook from './scrapbook';

class App extends React.Component{
    render(){
        return(
            <div className="main-container">
                <h1 className="main-title">Scrapbook</h1>
                <Scrapbook/>
            </div>
        )
    }
}

export default App;